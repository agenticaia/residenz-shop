import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { 
  Shield, 
  MapPin, 
  Camera, 
  PawPrint, 
  AlertTriangle, 
  Edit2, 
  CheckCircle2,
  Lock,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SectionData {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  status: string;
  statusColor: string;
  content: string;
  details?: any; // To hold specific data like logistics photos/notes
}

export default function MyHome() {
  const [pilotMode, setPilotMode] = useState(true);
  const [manualStatus, setManualStatus] = useState({
    percentage: 15,
    label: "Incompleto",
    color: "bg-amber-100 text-amber-700",
    barColor: "bg-amber-500"
  });

  const [selectedSection, setSelectedSection] = useState<SectionData | null>(null);

  const [sections, setSections] = useState<SectionData[]>([
    {
      id: "zones",
      title: "Zonas Prohibidas",
      description: "Áreas donde tu Resi NO debe entrar.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      status: "Pendiente",
      statusColor: "text-slate-400",
      content: "No hay zonas registradas"
    },
    {
      id: "logistics",
      title: "Logística y Herramientas",
      description: "Ubicación de escoba, trapos y detergentes.",
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      status: "Pendiente",
      statusColor: "text-slate-400",
      content: "Ubicación no configurada"
    },
    {
      id: "pets",
      title: "Mascotas",
      description: "Instrucciones para el cuidado de tus amigos.",
      icon: <PawPrint className="w-5 h-5 text-purple-500" />,
      status: "Pendiente",
      statusColor: "text-slate-400",
      content: "No hay mascotas registradas"
    }
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem("residenz_digital_manual");
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        
        // Update status if we have data
        if (data.status === "active") {
          setManualStatus({
            percentage: 65,
            label: "En Progreso",
            color: "bg-blue-100 text-blue-700",
            barColor: "bg-blue-500"
          });

          // Update Sections
          setSections(prev => prev.map(section => {
            if (section.id === "logistics") {
              const { broomLocation, productsLocation, broomPhoto, productsPhoto } = data.logistics;
              return {
                ...section,
                status: "Configurado",
                statusColor: "text-green-600",
                content: `${broomLocation} (Escoba), ${productsLocation} (Productos)`,
                details: {
                  broomLocation,
                  productsLocation,
                  broomPhoto,
                  productsPhoto
                }
              };
            }
            if (section.id === "zones") {
               return {
                ...section,
                status: "Configurado",
                statusColor: "text-green-600",
                content: data.zones && data.zones.length > 0 ? data.zones.join(", ") : "Sin zonas restringidas",
                details: {
                  zones: data.zones
                }
               };
            }
            if (section.id === "pets") {
              return {
               ...section,
               status: "Configurado",
               statusColor: "text-green-600",
               content: data.pets && data.pets.length > 0 ? `${data.pets.length} mascotas registradas` : "Sin mascotas",
               details: {
                 pets: data.pets
               }
              };
           }
            return section;
          }));
        }
      } catch (e) {
        console.error("Error parsing manual data", e);
      }
    }
  }, []);

  const renderSectionDetails = (section: SectionData) => {
    if (!section.details) return <p className="text-slate-500">No hay detalles disponibles.</p>;

    if (section.id === "logistics") {
      const { broomLocation, productsLocation, broomPhoto, productsPhoto } = section.details;
      return (
        <div className="space-y-6">
          {/* Utensilios */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">1</span>
              UTENSILIOS
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Ubicación:</span>
                <Badge variant="outline" className="bg-white">{broomLocation}</Badge>
              </div>
              {broomPhoto && (
                <div className="mt-3">
                  <span className="text-sm text-slate-500 block mb-2">Foto de referencia:</span>
                  <div className="aspect-video rounded-lg overflow-hidden border border-slate-200">
                    <img src={broomPhoto} alt="Ubicación de utensilios" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Productos */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">2</span>
              PRODUCTOS
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Ubicación:</span>
                <Badge variant="outline" className="bg-white">{productsLocation}</Badge>
              </div>
              {productsPhoto && (
                <div className="mt-3">
                  <span className="text-sm text-slate-500 block mb-2">Foto de referencia:</span>
                  <div className="aspect-video rounded-lg overflow-hidden border border-slate-200">
                    <img src={productsPhoto} alt="Ubicación de productos" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (section.id === "zones") {
      return (
        <div className="space-y-4">
          {section.details.zones && section.details.zones.length > 0 ? (
            <div className="grid gap-3">
              {section.details.zones.map((zone: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="font-medium text-amber-900">{zone}</span>
                </div>
              ))}
            </div>
          ) : (
             <p className="text-slate-500 text-center py-4">No hay zonas restringidas configuradas.</p>
          )}
        </div>
      );
    }

    if (section.id === "pets") {
      return (
        <div className="space-y-4">
          {section.details.pets && section.details.pets.length > 0 ? (
            <div className="grid gap-3">
              {section.details.pets.map((pet: any, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <PawPrint className="w-5 h-5 text-purple-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-purple-900">{pet.name}</h4>
                    <p className="text-xs text-purple-700">{pet.type}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <p className="text-slate-500 text-center py-4">No hay mascotas registradas.</p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-20">
        {/* Header Hero */}
        <div className="bg-[#0F172A] text-white pt-10 pb-24 px-6 rounded-b-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="w-48 h-48" />
            </div>
            
            <div className="max-w-md mx-auto relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Mi Casa</h1>
                        <p className="text-slate-400 text-sm">Manual Digital del Hogar</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <span className="font-bold">JP</span>
                    </div>
                </div>

                <Card className="bg-white/10 backdrop-blur-md border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${pilotMode ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}`}>
                            {pilotMode ? <Lock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                        </div>
                        <div>
                            <p className="font-bold text-sm">Pilot Mode</p>
                            <p className="text-xs text-slate-400">{pilotMode ? "Activado" : "Desactivado"}</p>
                        </div>
                    </div>
                    <Switch checked={pilotMode} onCheckedChange={setPilotMode} />
                </Card>
            </div>
        </div>

        {/* Main Content - Overlapping the header */}
        <div className="max-w-md mx-auto px-6 -mt-16 relative z-20 space-y-6">
            
            {/* Status Card */}
            <Card className="p-6 shadow-xl shadow-slate-200/50 border-0 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h2 className="font-bold text-slate-900">Estado del Manual</h2>
                        <p className="text-xs text-slate-500 mt-1">Tu Resi leerá esto antes de iniciar.</p>
                    </div>
                    <Badge className={`${manualStatus.color} border-0`}>
                        {manualStatus.label}
                    </Badge>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${manualStatus.barColor} transition-all duration-1000`} style={{ width: `${manualStatus.percentage}%` }} />
                </div>
                <p className="text-right text-xs font-bold text-slate-400 mt-2">{manualStatus.percentage}% Completado</p>
            </Card>

            {/* Sections Grid */}
            <div className="grid gap-4">
                {sections.map((section) => (
                    <Card 
                      key={section.id} 
                      onClick={() => setSelectedSection(section)}
                      className="p-4 border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group active:scale-[0.98] duration-200"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                                {section.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900 text-sm">{section.title}</h3>
                                    <ChevronRight className="w-4 h-4 text-slate-300" />
                                </div>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{section.content}</p>
                                <div className="flex items-center gap-1.5 mt-3">
                                    <div className={`w-1.5 h-1.5 rounded-full ${section.status === 'Configurado' ? 'bg-green-500' : 'bg-slate-300'}`} />
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${section.statusColor}`}>
                                        {section.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-4">
                <h3 className="font-bold text-slate-900 mb-3 text-sm px-1">Acciones Rápidas</h3>
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-white border-slate-200 hover:bg-slate-50 hover:text-primary hover:border-primary/20">
                        <Camera className="w-6 h-6 text-slate-400" />
                        <span className="text-xs font-bold">Actualizar Fotos</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-white border-slate-200 hover:bg-slate-50 hover:text-primary hover:border-primary/20">
                        <Shield className="w-6 h-6 text-slate-400" />
                        <span className="text-xs font-bold">Reportar Problema</span>
                    </Button>
                </div>
            </div>

        </div>

        {/* Detail Modal */}
        <Dialog open={!!selectedSection} onOpenChange={(open) => !open && setSelectedSection(null)}>
          <DialogContent className="max-w-md w-[90%] rounded-2xl p-0 overflow-hidden bg-white">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {selectedSection?.icon}
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-slate-900">
                  {selectedSection?.title}
                </DialogTitle>
                <p className="text-xs text-slate-500">{selectedSection?.description}</p>
              </div>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {selectedSection && renderSectionDetails(selectedSection)}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <Button onClick={() => setSelectedSection(null)}>
                Cerrar
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </Layout>
  );
}
