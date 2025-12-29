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
  ArrowRight,
  Zap
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
  const [planDuration, setPlanDuration] = useState("4");

  const handleAddClick = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setIsAdded(true);
    setIsOpen(false);
  };

  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      "1": 136,
      "2": 135,
      "3": 133,
      "6": 131
    };
    
    const pricePerService = basePrices[frequency] || 136;
    const totalServices = parseInt(planDuration);
    return pricePerService * totalServices * quantity;
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
                  src={getAssetUrl("/images/hero-clean.png")}
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
                {/* Select Duration of Visit */}
                <section className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-6 bg-secondary rounded-full"></div>
                    <h4 className="text-xl font-heading font-bold text-primary">Duration of Cleaning Visit:</h4>
                  </div>
                  <div className="space-y-4">
                    <div 
                      onClick={() => setDuration("2")}
                      className={cn(
                        "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                        duration === "2" ? "border-primary bg-primary/5 shadow-md" : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <h5 className="font-bold text-lg text-primary">2 hours</h5>
                      <p className="text-sm text-slate-500 mt-1">Ideal for small apartments and specific tasks</p>
                    </div>
                    <div 
                      onClick={() => setDuration("4")}
                      className={cn(
                        "p-6 rounded-2xl border-2 cursor-pointer transition-all",
                        duration === "4" ? "border-primary bg-primary/5 shadow-md" : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <h5 className="font-bold text-lg text-primary">4 hours</h5>
                      <p className="text-sm text-slate-500 mt-1">Ideal for large apartments, townhouses, or villas</p>
                    </div>
                  </div>
                </section>

                {/* Select Number of Cleaners */}
                <section className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="text-lg font-bold text-primary">Select number of cleaners</h4>
                    <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                  </div>
                  <p className="text-sm text-slate-600">1 cleaner</p>
                </section>

                {/* Select days per week */}
                <section className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="text-lg font-bold text-primary">Select days per week</h4>
                    <ChevronRight className="w-5 h-5 text-slate-400 -rotate-90" />
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                    <FrequencyOption 
                      label="Once every week" 
                      sub="S/136/service" 
                      active={frequency === "1"} 
                      onClick={() => setFrequency("1")} 
                    />
                    <FrequencyOption 
                      label="2 times a week" 
                      sub="S/135/service" 
                      active={frequency === "2"} 
                      onClick={() => setFrequency("2")} 
                    />
                    <FrequencyOption 
                      label="3 times a week" 
                      sub="S/133/service" 
                      active={frequency === "3"} 
                      onClick={() => setFrequency("3")} 
                    />
                    <FrequencyOption 
                      label="6 times a week" 
                      sub="S/131/service" 
                      active={frequency === "6"} 
                      onClick={() => setFrequency("6")} 
                    />
                  </div>
                </section>

                {/* Select duration of plan */}
                <section className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="text-lg font-bold text-primary">Select duration of plan</h4>
                    <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                    <PlanOption 
                      label="4 weeks" 
                      price={`S/${136 * 4}`}
                      sub="(S/136/service)"
                      discount="20% off"
                      active={planDuration === "4"} 
                      onClick={() => setPlanDuration("4")} 
                    />
                    <PlanOption 
                      label="12 weeks" 
                      price={`S/${136 * 12}`}
                      sub="(S/136/service)"
                      discount="20% off"
                      active={planDuration === "12"} 
                      onClick={() => setPlanDuration("12")} 
                    />
                    <PlanOption 
                      label="24 weeks" 
                      price={`S/${136 * 24}`}
                      sub="(S/136/service)"
                      discount="20% off"
                      active={planDuration === "24"} 
                      onClick={() => setPlanDuration("24")} 
                    />
                  </div>
                </section>

                {/* Why choose Residenz */}
                <section className="space-y-10 pt-8 border-t border-slate-100">
                   <div className="text-center">
                     <h4 className="text-3xl font-heading font-bold text-primary">Why choose Residenz</h4>
                   </div>
                   
                   <div className="relative">
                     {/* Comparison Table */}
                     <div className="grid grid-cols-3 mb-8 items-end">
                       <div className="col-span-1"></div>
                       <div className="flex flex-col items-center gap-2">
                         <div className="bg-primary text-white p-2 rounded-xl">
                           <ShieldCheck className="w-8 h-8" />
                         </div>
                         <span className="font-bold text-primary">Residenz</span>
                       </div>
                       <div className="flex flex-col items-center gap-2 pb-2">
                         <span className="font-bold text-slate-400">Others</span>
                       </div>
                     </div>

                     <div className="space-y-0 rounded-[2rem] overflow-hidden border border-slate-50">
                       <ComparisonRow label="2-hour cleaning" resi={true} others="Minimum 4 hour booking" />
                       <ComparisonRow label="Same cleaner always" resi={true} others={false} />
                       <ComparisonRow label="Trained professionals" resi="100+ hours of extensive training" others={false} />
                       <ComparisonRow label="Deep cleaning tools" resi={true} others={false} />
                       <ComparisonRow label="Free skip, pause, reschedule & cancellation" resi={true} others={false} />
                     </div>
                   </div>

                   {/* Testimonial/Hero Section inside modal */}
                   <div className="bg-slate-50 rounded-[2.5rem] p-8 mt-12 overflow-hidden relative">
                     <div className="relative z-10 space-y-4 max-w-[60%]">
                       <h5 className="text-2xl font-bold text-primary leading-tight">Top-rated professional cleaners</h5>
                       <div className="space-y-2">
                         <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                           <ShieldCheck className="w-4 h-4 text-primary" />
                           <span>100% Verified professionals</span>
                         </div>
                         <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                           <Star className="w-4 h-4 text-primary fill-primary" />
                           <span>Average 4.8+ ratings</span>
                         </div>
                         <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                           <Zap className="w-4 h-4 text-primary" />
                           <span>Trained for 100+ Hours</span>
                         </div>
                       </div>
                     </div>
                     <img 
                       src="/images/staff-maria.png" 
                       className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                       alt="Staff"
                     />
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
        "p-4 rounded-2xl border-2 text-center cursor-pointer transition-all duration-300 min-w-[140px] flex-shrink-0",
        active 
          ? "border-primary bg-primary/[0.03] ring-2 ring-primary/10 shadow-md" 
          : "border-slate-100 bg-white hover:border-slate-200"
      )}
    >
      <div className={cn("text-sm font-bold whitespace-nowrap", active ? "text-primary" : "text-slate-600")}>{label}</div>
      <div className="text-[10px] text-slate-400 font-bold mt-1 whitespace-nowrap">{sub}</div>
    </div>
  );
}

function PlanOption({ label, price, sub, discount, active, onClick }: { label: string, price: string, sub: string, discount: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 min-w-[160px] flex-shrink-0",
        active 
          ? "border-primary bg-primary/[0.03] ring-2 ring-primary/10 shadow-md" 
          : "border-slate-100 bg-white hover:border-slate-200"
      )}
    >
      <div className={cn("text-sm font-bold", active ? "text-primary" : "text-slate-600")}>{label}</div>
      <div className="text-base font-bold text-primary mt-1">{price}</div>
      <div className="text-[10px] text-slate-400 font-medium">{sub}</div>
      <div className="text-[10px] text-green-600 font-bold uppercase mt-1">{discount}</div>
    </div>
  );
}

function ComparisonRow({ label, resi, others }: { label: string, resi: boolean | string, others: boolean | string }) {
  return (
    <div className="grid grid-cols-3 py-6 border-t border-slate-50 items-center bg-white first:border-t-0">
       <div className="pl-8 text-sm font-bold text-slate-700 leading-tight pr-4">{label}</div>
       <div className="flex flex-col items-center px-4">
          {typeof resi === "boolean" ? (
            resi ? (
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                 <Check className="w-5 h-5 stroke-[3px]" />
              </div>
            ) : (
              <X className="w-6 h-6 text-slate-200" />
            )
          ) : (
            <div className="flex flex-col items-center text-center gap-1">
               <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-1">
                 <Check className="w-5 h-5 stroke-[3px]" />
               </div>
               <span className="text-[10px] font-medium text-slate-500">{resi}</span>
            </div>
          )}
       </div>
       <div className="flex flex-col items-center px-4">
          {typeof others === "boolean" ? (
             others ? (
               <div className="w-8 h-8 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
               </div>
             ) : (
               <div className="w-8 h-8 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5" />
               </div>
             )
          ) : (
            <div className="flex flex-col items-center text-center">
               <div className="w-8 h-8 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mb-1">
                  <X className="w-5 h-5" />
               </div>
               <span className="text-[10px] font-medium text-slate-400 leading-tight">{others}</span>
            </div>
          )}
       </div>
    </div>
  );
}
