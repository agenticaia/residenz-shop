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
import { 
  Star, 
  ShieldCheck, 
  Check, 
  X, 
  ChevronRight,
  ShoppingCart,
  Percent,
  Minus,
  Plus,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

export default function ServiceDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [, setLocation] = useLocation();

  // Mock configuration state
  const [duration, setDuration] = useState("4");
  const [cleaners, setCleaners] = useState("1");
  const [frequency, setFrequency] = useState("1");

  const handleAddClick = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setIsAdded(true);
    setIsOpen(false);
  };

  const calculatePrice = () => {
    const base = 320;
    const factor = parseInt(duration) / 4 * parseInt(cleaners);
    return base * factor * quantity;
  };

  const calculateOldPrice = () => {
    return calculatePrice() * 1.25;
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20">
        {/* Breadcrumbs */}
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
                <Button 
                  onClick={() => setIsOpen(true)}
                  className="bg-primary hover:bg-primary/90 rounded-xl px-8 h-12 text-base font-bold shadow-lg shadow-primary/20"
                >
                  Ver Servicios
                </Button>
              </div>

              {/* Video/Hero Placeholder */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-slate-900">
                 <img 
                  src="/images/hero-clean.png" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Service Preview"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-8">Selecciona tu limpieza</h2>
                
                {/* Reactive Service Card */}
                <Card className="p-6 border-slate-100 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-primary">Paquete de Limpieza Mensual</h3>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="text-green-600 font-bold">4.85</span>
                         <span className="text-slate-400">(693K reseñas)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        {isAdded ? (
                          <>
                            <span className="text-slate-400 line-through text-sm">S/{calculateOldPrice()}</span>
                            <span className="text-xl font-bold text-primary">S/{calculatePrice()}</span>
                            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider"> • {duration} hrs x {frequency} vez/sem</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm text-slate-500 font-medium italic">Desde</span>
                            <span className="text-xl font-bold text-primary">S/320</span>
                            <span className="text-slate-400 line-through text-sm">S/400</span>
                            <span className="text-xs text-slate-400 italic"> • 4 hrs</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {isAdded ? (
                      <div className="flex items-center gap-2 bg-primary/5 p-1 rounded-xl border border-primary/20 animate-in fade-in zoom-in duration-300">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-primary hover:bg-primary/10"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-base font-bold text-primary">{quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-primary hover:bg-primary/10"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={handleAddClick}
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl h-10 px-8 transition-all duration-300"
                      >
                        Añadir
                      </Button>
                    )}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-wider hover:opacity-70 transition-opacity">
                    Ver detalles
                  </Button>
                </Card>
              </div>
            </div>

            {/* Right Sidebar: Cart */}
            <div className="space-y-6">
              <Card className="p-6 border-slate-100 shadow-xl space-y-6 sticky top-24 transition-all duration-500 overflow-hidden">
                <h3 className="font-heading font-bold text-primary text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Carrito
                </h3>
                
                {isAdded ? (
                  <div className="space-y-6 animate-in slide-in-from-right-5 duration-500">
                    <div className="flex justify-between items-start">
                       <div className="space-grow space-y-1">
                         <p className="text-sm font-bold text-primary leading-tight">Limpieza Mensual</p>
                         <p className="text-[10px] text-slate-400 font-medium italic">• {cleaners} Profesional x {duration} hrs</p>
                         <p className="text-[10px] text-slate-400 font-medium italic">• Frecuencia: {frequency} vez/semana</p>
                       </div>
                       <div className="text-right shrink-0">
                         <p className="text-sm font-bold text-primary">S/{calculatePrice()}</p>
                         <p className="text-[10px] text-slate-400 line-through">S/{calculateOldPrice()}</p>
                       </div>
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-widest hover:text-primary/70" 
                      onClick={() => setIsOpen(true)}
                    >
                      Editar Paquete
                    </Button>
                    
                    <Button 
                      onClick={() => setLocation("/checkout")}
                      className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl font-bold flex justify-between px-6 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                    >
                      <div className="text-left leading-tight">
                         <div className="text-xs opacity-70 font-normal">S/{calculatePrice()}</div>
                         <div className="text-[10px] line-through opacity-50">S/{calculateOldPrice()}</div>
                      </div>
                      <span className="flex items-center gap-2">Ver Carrito <ArrowRight className="w-4 h-4" /></span>
                    </Button>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-700">
                    <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                      <ShoppingCart className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-400 font-bold text-sm">Carrito Vacío</p>
                      <p className="text-slate-300 text-[10px] px-6">Agrega un servicio para configurar tu plan de hotel.</p>
                    </div>
                  </div>
                )}
              </Card>

              {/* Promo Card */}
              <Card className="p-4 border-slate-100 shadow-sm flex items-center gap-4 bg-green-50/50 border-l-4 border-l-green-500">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-primary leading-tight">10% Off All Cleaning</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">CÓDIGO: RESIDENZ10</p>
                </div>
              </Card>

              {/* Trust Card */}
              <Card className="p-6 border-slate-100 shadow-sm space-y-4 bg-slate-50/30">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-primary text-sm uppercase tracking-wider">Compromiso Residenz</h3>
                  <ShieldCheck className="w-5 h-5 text-primary opacity-40" />
                </div>
                <ul className="space-y-3">
                  <PromiseItem text="Personal Fijo Certificado" />
                  <PromiseItem text="Garantía de Daños S/15,000" />
                  <PromiseItem text="Protocolos de Hotel Boutique" />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Configurator Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2.5rem] gap-0 border-0 bg-white shadow-2xl">
          <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="p-8 pb-4">
              <DialogHeader className="mb-10">
                <DialogTitle className="text-3xl font-heading font-bold text-primary">Configura tu Experiencia</DialogTitle>
                <p className="text-slate-500 text-sm italic">Establece los estándares para tu hogar.</p>
              </DialogHeader>

              <div className="space-y-12">
                 {/* Duration & Cleaners */}
                 <section className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-secondary rounded-full"></div>
                    <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Duración y Personal</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Horas por visita</label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="h-14 border-slate-100 bg-slate-50/50 rounded-2xl font-semibold focus:ring-primary/20">
                          <SelectValue placeholder="Duración" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-slate-100">
                          <SelectItem value="4" className="rounded-xl">4 horas (Recomendado)</SelectItem>
                          <SelectItem value="6" className="rounded-xl">6 horas (Completo)</SelectItem>
                          <SelectItem value="8" className="rounded-xl">8 horas (Profundo)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Número de Profesionales</label>
                      <Select value={cleaners} onValueChange={setCleaners}>
                        <SelectTrigger className="h-14 border-slate-100 bg-slate-50/50 rounded-2xl font-semibold focus:ring-primary/20">
                          <SelectValue placeholder="Personal" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-slate-100">
                          <SelectItem value="1" className="rounded-xl">1 Profesional</SelectItem>
                          <SelectItem value="2" className="rounded-xl">2 Profesionales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </section>

                {/* Frequency */}
                <section className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-secondary rounded-full"></div>
                    <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Frecuencia Semanal</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FrequencyOption label="1 vez" sub="Semanal" active={frequency === "1"} onClick={() => setFrequency("1")} />
                    <FrequencyOption label="2 veces" sub="Semanal" active={frequency === "2"} onClick={() => setFrequency("2")} />
                    <FrequencyOption label="3 veces" sub="Semanal" active={frequency === "3"} onClick={() => setFrequency("3")} />
                    <FrequencyOption label="6 veces" sub="Semanal" active={frequency === "6"} onClick={() => setFrequency("6")} />
                  </div>
                </section>

                {/* Why Residenz */}
                <section className="space-y-6">
                   <div className="flex items-center justify-between mb-2">
                     <h4 className="text-lg font-bold text-primary uppercase tracking-tight">El Estándar Residenz</h4>
                     <Badge className="bg-secondary text-primary font-bold">Garantía S/15k</Badge>
                   </div>
                   <div className="rounded-[2rem] overflow-hidden border border-slate-50 shadow-sm bg-slate-50/20">
                     <ComparisonRow label="Personal Fijo asignado" resi={true} others={false} />
                     <ComparisonRow label="Manual Digital de Preferencias" resi={true} others={false} />
                     <ComparisonRow label="Seguro de Responsabilidad" resi={true} others={false} />
                     <ComparisonRow label="Entrenamiento Hotelero Real" resi={true} others={false} />
                   </div>
                </section>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-50 p-8 flex items-center justify-between z-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-bold text-primary">S/{calculatePrice() / quantity}</span>
                  <span className="text-slate-400 line-through text-sm font-medium">S/{calculateOldPrice() / quantity}</span>
                </div>
                <p className="text-[11px] text-green-600 font-bold uppercase tracking-widest flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> Ahorras S/{(calculateOldPrice() - calculatePrice()) / quantity} en este plan
                </p>
              </div>
              <Button 
                size="lg" 
                className="rounded-2xl px-14 h-16 bg-primary hover:bg-primary/95 text-white font-bold text-xl shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95" 
                onClick={handleConfirm}
              >
                Añadir al Carrito
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
    <li className="flex items-center gap-3 text-xs text-slate-500 font-medium">
      <div className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
        <Check className="w-2.5 h-2.5 stroke-[3px]" />
      </div>
      <span>{text}</span>
    </li>
  );
}

function FrequencyOption({ label, sub, active, onClick }: { label: string, sub: string, active?: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 rounded-2xl border-2 text-center cursor-pointer transition-all duration-300 transform",
        active 
          ? "border-primary bg-primary/[0.03] ring-4 ring-primary/5 scale-105 shadow-lg" 
          : "border-slate-50 bg-white hover:border-slate-200 hover:scale-[1.02]"
      )}
    >
      <div className={cn("text-base font-bold transition-colors", active ? "text-primary" : "text-slate-600")}>{label}</div>
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">{sub}</div>
    </div>
  );
}

function ComparisonRow({ label, resi, others }: { label: string, resi: boolean, others: boolean }) {
  return (
    <div className="grid grid-cols-3 py-4 border-t border-slate-50 items-center bg-white/50 first:border-t-0">
       <div className="pl-8 text-[11px] font-bold text-slate-600 leading-tight pr-4">{label}</div>
       <div className="flex justify-center">
          {resi ? (
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
               <Check className="w-3.5 h-3.5 stroke-[3px]" />
            </div>
          ) : (
            <X className="w-4 h-4 text-slate-200" />
          )}
       </div>
       <div className="flex justify-center">
          {others ? (
             <div className="w-6 h-6 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
             </div>
          ) : (
            <X className="w-5 h-5 text-slate-200" />
          )}
       </div>
    </div>
  );
}
