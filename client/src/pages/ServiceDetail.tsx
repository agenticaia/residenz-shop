import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  ShieldCheck, 
  Clock, 
  Check, 
  X, 
  Info,
  ChevronRight,
  ShoppingCart,
  Percent,
  Calendar,
  UserCheck,
  Pause,
  RefreshCw,
  Zap,
  Minus,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

export default function ServiceDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [, setLocation] = useLocation();

  const handleAdd = () => {
    setIsAdded(true);
    setIsOpen(false);
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20">
        <div className="border-b border-slate-100 bg-white sticky top-16 z-30 py-4 hidden md:block">
          <div className="container mx-auto px-4 flex items-center gap-6">
             <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="hover:text-primary cursor-pointer">Inicio</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">Limpieza Mensual</span>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">Paquetes de Limpieza Mensual</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded text-sm font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.84</span>
                  </div>
                  <span className="text-slate-500 text-sm">(358K reservas completadas)</span>
                </div>
                {!isAdded && (
                  <Button 
                    onClick={() => setIsOpen(true)}
                    className="bg-primary hover:bg-primary/90 rounded-xl px-8 h-12 text-base font-bold shadow-lg shadow-primary/20"
                  >
                    Configurar Servicio
                  </Button>
                )}
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-slate-900">
                 <img 
                  src="/images/hero-clean.png" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Service Video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-8">Selecciona tu limpieza</h2>
                
                <Card className="p-6 border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-primary">Suscripción: Limpieza Mensual</h3>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="text-green-600 font-bold">4.85</span>
                         <span className="text-slate-400">(693K reseñas)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-slate-400 line-through text-sm">S/400</span>
                        <span className="text-xl font-bold text-primary">S/320</span>
                        <span className="text-xs text-slate-400"> • 4 hrs</span>
                      </div>
                    </div>
                    
                    {isAdded ? (
                      <div className="flex items-center gap-2 bg-primary/5 p-1 rounded-xl border border-primary/20">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-primary"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-base font-bold text-primary">{quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-primary"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={() => setIsOpen(true)}
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary/5 font-bold rounded-xl h-10 px-6"
                      >
                        Añadir
                      </Button>
                    )}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-wider">
                    Ver detalles
                  </Button>
                </Card>
              </div>
            </div>

            {/* Right Sidebar: Cart */}
            <div className="space-y-6">
              <Card className="p-6 border-slate-100 shadow-xl space-y-6 sticky top-24">
                <h3 className="font-heading font-bold text-primary text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Carrito
                </h3>
                
                {isAdded ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                       <div className="space-y-0.5">
                         <p className="text-sm font-bold text-primary leading-tight">Limpieza Mensual</p>
                         <p className="text-[10px] text-slate-400 font-medium italic underline decoration-secondary decoration-2 underline-offset-2">• 1 Profesional x 4 hrs</p>
                       </div>
                       <div className="text-right">
                         <p className="text-sm font-bold text-primary">S/{320 * quantity}</p>
                         <p className="text-[10px] text-slate-400 line-through">S/{400 * quantity}</p>
                       </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-widest" onClick={() => setIsOpen(true)}>Editar</Button>
                    
                    <Button 
                      onClick={() => setLocation("/checkout")}
                      className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl font-bold flex justify-between px-6 shadow-xl shadow-primary/20"
                    >
                      <div className="text-left leading-tight">
                         <div className="text-xs opacity-70 font-normal">S/{320 * quantity}</div>
                         <div className="text-[10px] line-through opacity-50">S/{400 * quantity}</div>
                      </div>
                      <span className="flex items-center gap-1">Ver Carrito <ChevronRight className="w-4 h-4" /></span>
                    </Button>
                  </div>
                ) : (
                  <div className="py-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <p className="text-slate-400 font-medium text-sm">No hay ítems en tu carrito</p>
                  </div>
                )}
              </Card>

              <Card className="p-4 border-slate-100 shadow-sm flex items-center gap-4 bg-green-50/50">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-primary">10% Off All Packages</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">RESI2025</p>
                </div>
              </Card>

              <Card className="p-6 border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-primary">UC Promise</h3>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <ul className="space-y-3">
                  <PromiseItem text="Profesionales Verificados" />
                  <PromiseItem text="Gestión sin Fricciones" />
                  <PromiseItem text="Precios Transparentes" />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2rem] gap-0 border-0 bg-white">
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="p-8 pb-4">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-2xl font-heading font-bold text-primary">Configura tu Limpieza</DialogTitle>
              </DialogHeader>

              <div className="space-y-10">
                 <section className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Duración y Personal</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Select defaultValue="4">
                      <SelectTrigger className="h-12 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 horas por visita</SelectItem>
                        <SelectItem value="6">6 horas por visita</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="1">
                      <SelectTrigger className="h-12 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Personal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Profesional</SelectItem>
                        <SelectItem value="2">2 Profesionales</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </section>

                <section className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Frecuencia</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <FrequencyOption label="1 vez" sub="Semanal" active />
                    <FrequencyOption label="2 veces" sub="Semanal" />
                    <FrequencyOption label="3 veces" sub="Semanal" />
                    <FrequencyOption label="6 veces" sub="Semanal" />
                  </div>
                </section>

                <section className="space-y-6">
                   <h4 className="text-lg font-bold text-primary uppercase tracking-tight">¿Por qué elegir Residenz?</h4>
                   <div className="rounded-2xl overflow-hidden border border-slate-100">
                     <ComparisonRow label="Personal Fijo siempre" resi={true} others={false} />
                     <ComparisonRow label="Garantía de S/15,000" resi={true} others={false} />
                     <ComparisonRow label="Entrenamiento Hotelero" resi={true} others={false} />
                   </div>
                </section>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">S/320</span>
                  <span className="text-slate-400 line-through text-sm">S/400</span>
                </div>
                <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Ahorras S/80 hoy</p>
              </div>
              <Button size="lg" className="rounded-xl px-12 h-14 bg-primary font-bold text-lg shadow-xl shadow-primary/20" onClick={handleAdd}>
                Listo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

function PromiseItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
      <Check className="w-4 h-4 text-primary shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function FrequencyOption({ label, sub, active }: { label: string, sub: string, active?: boolean }) {
  return (
    <div className={cn(
      "p-3 rounded-xl border text-center cursor-pointer transition-all",
      active 
        ? "border-primary bg-primary/5 ring-1 ring-primary shadow-sm" 
        : "border-slate-100 bg-white hover:border-slate-300"
    )}>
      <div className={cn("text-sm font-bold", active ? "text-primary" : "text-slate-600")}>{label}</div>
      <div className="text-[10px] text-slate-400 font-medium">{sub}</div>
    </div>
  );
}

function ComparisonRow({ label, resi, others }: { label: string, resi: boolean, others: boolean }) {
  return (
    <div className="grid grid-cols-3 py-3 border-t border-slate-50 items-center bg-white">
       <div className="pl-6 text-[11px] font-bold text-slate-600">{label}</div>
       <div className="flex justify-center">
          {resi ? (
            <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center">
               <Check className="w-3 h-3" />
            </div>
          ) : (
            <X className="w-4 h-4 text-slate-200" />
          )}
       </div>
       <div className="flex justify-center">
          {others ? (
             <div className="w-5 h-5 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3" />
             </div>
          ) : (
            <X className="w-4 h-4 text-slate-200" />
          )}
       </div>
    </div>
  );
}
