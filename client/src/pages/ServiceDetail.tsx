import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
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
  Clock, 
  Check, 
  X, 
  Info,
  ChevronRight,
  ShoppingCart,
  Percent
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20">
        {/* Header / Sub-nav (Similar to Urban Company) */}
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
            
            {/* Left Content: Service Info & Selection */}
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
                  Configurar Servicio
                </Button>
              </div>

              {/* Video/Carousel Placeholder (Urban Company style) */}
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
                <div className="absolute bottom-6 inset-x-0 px-8 flex justify-between items-center text-white">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                  <span className="text-sm font-medium">Todo lo que tu hogar necesita</span>
                </div>
              </div>

              {/* Choice Section */}
              <div className="pt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-8">Personaliza tu experiencia</h2>
                
                <Card className="p-6 border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-primary">Suscripción: Limpieza Recurrente</h3>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="text-green-600 font-bold">4.85</span>
                         <span className="text-slate-400">(693K reseñas)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-slate-400 line-through text-sm">S/400</span>
                        <span className="text-xl font-bold text-primary">Desde S/320</span>
                      </div>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> 4 horas por visita
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsOpen(true)}
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/5 font-bold"
                    >
                      Añadir
                    </Button>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-wider">
                    Ver detalles del plan
                  </Button>
                </Card>
              </div>
            </div>

            {/* Right Sidebar: Cart & Promise */}
            <div className="space-y-6">
              {/* Empty Cart State */}
              <Card className="p-8 text-center space-y-4 border-slate-100 shadow-sm">
                <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <p className="text-slate-500 font-medium">Tu carrito está vacío</p>
              </Card>

              {/* Offers */}
              <Card className="p-4 border-slate-100 shadow-sm flex items-center gap-4 bg-green-50/50">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-primary">10% de Descuento Extra</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">CÓDIGO: RESI2025</p>
                </div>
              </Card>

              {/* Residenz Promise (Urban Company style) */}
              <Card className="p-6 border-slate-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-heading font-bold text-primary">La Promesa Residenz</h3>
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <ul className="space-y-3">
                  <PromiseItem text="Profesionales Verificados" />
                  <PromiseItem text="Gestión sin Fricciones" />
                  <PromiseItem text="Precios Transparentes" />
                  <PromiseItem text="Garantía de S/15,000" />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Dialog (The Modal from Screenshots) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2rem] gap-0 border-0">
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="p-8 pb-4">
              <DialogHeader className="mb-8">
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl font-heading font-bold text-primary">Configura tu Limpieza Mensual</DialogTitle>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-secondary fill-current" />
                  <span className="text-sm font-bold text-primary">4.84 (73K reseñas)</span>
                  <span className="text-slate-400 text-sm">| Desde S/320/servicio</span>
                </div>
              </DialogHeader>

              <div className="space-y-10">
                {/* Step 1: Duration */}
                <section className="space-y-4">
                  <h4 className="text-lg font-bold text-primary flex items-center justify-between">
                    Selecciona Requerimientos
                    <Info className="w-4 h-4 text-slate-400" />
                  </h4>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Duración por visita*</label>
                    <Select defaultValue="4">
                      <SelectTrigger className="h-12 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Selecciona duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 horas</SelectItem>
                        <SelectItem value="6">6 horas</SelectItem>
                        <SelectItem value="8">8 horas (Día completo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 pt-4">
                    <label className="text-xs font-bold text-slate-500 uppercase">Número de profesionales</label>
                    <Select defaultValue="1">
                      <SelectTrigger className="h-12 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Selecciona personal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Profesional (La misma siempre)</SelectItem>
                        <SelectItem value="2">2 Profesionales (Equipo fijo)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </section>

                {/* Step 2: Frequency */}
                <section className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Frecuencia Semanal</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <FrequencyOption label="1 vez" sub="S/320/mes" active />
                    <FrequencyOption label="2 veces" sub="S/600/mes" />
                    <FrequencyOption label="3 veces" sub="S/850/mes" />
                    <FrequencyOption label="6 veces" sub="S/1600/mes" />
                  </div>
                </section>

                {/* Step 3: Plan Duration */}
                <section className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase tracking-tight">Duración del Plan</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PlanDurationOption label="4 semanas" price="S/320" discount="10% off" active />
                    <PlanDurationOption label="12 semanas" price="S/860" discount="20% off" />
                    <PlanDurationOption label="24 semanas" price="S/1600" discount="30% off" />
                  </div>
                </section>

                {/* Why Residenz Comparison Table (Inspired by Yammak) */}
                <section className="pt-8 border-t border-slate-100">
                  <h4 className="text-2xl font-heading font-bold text-primary text-center mb-10 italic underline decoration-secondary decoration-4 underline-offset-8">¿Por qué elegir Residenz?</h4>
                  
                  <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                    <div className="grid grid-cols-3 bg-slate-50 py-4 text-center">
                       <div></div>
                       <div className="flex flex-col items-center">
                          <div className="bg-primary text-white p-1.5 rounded-lg mb-2">
                             <ShieldCheck className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-primary">Residenz</span>
                       </div>
                       <div className="flex flex-col items-center justify-center opacity-40">
                          <span className="text-xs font-bold text-slate-500">Otros</span>
                       </div>
                    </div>

                    <ComparisonRow label="Personal Fijo siempre" resi={true} others={false} />
                    <ComparisonRow label="Garantía de S/15,000" resi={true} others={false} />
                    <ComparisonRow label="100+ horas de entrenamiento" resi={true} others={false} />
                    <ComparisonRow label="Insumos Profesionales" resi={true} others={false} />
                    <ComparisonRow label="Cancelación Flexible" resi={true} others={false} />
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Modal Action */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">S/320</span>
                  <span className="text-slate-400 line-through text-sm">S/400</span>
                </div>
                <p className="text-[10px] text-green-600 font-bold uppercase">Ahorras S/80 este mes</p>
              </div>
              <Button size="lg" className="rounded-xl px-12 h-14 bg-primary font-bold text-lg shadow-xl shadow-primary/20">
                Confirmar Plan
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

function PlanDurationOption({ label, price, discount, active }: { label: string, price: string, discount: string, active?: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-2xl border cursor-pointer transition-all relative",
      active 
        ? "border-primary bg-primary/5 ring-1 ring-primary shadow-md" 
        : "border-slate-100 bg-white hover:border-slate-300"
    )}>
      <div className="flex justify-between items-start mb-2">
        <span className={cn("text-xs font-bold", active ? "text-primary" : "text-slate-500")}>{label}</span>
        <Badge variant="outline" className="text-[9px] h-4 px-1 bg-green-50 border-green-200 text-green-700 font-bold uppercase">{discount}</Badge>
      </div>
      <div className={cn("text-lg font-bold", active ? "text-primary" : "text-slate-700")}>{price}</div>
      <div className="text-[9px] text-slate-400 font-medium">Costo por servicio</div>
    </div>
  );
}

function ComparisonRow({ label, resi, others }: { label: string, resi: boolean, others: boolean }) {
  return (
    <div className="grid grid-cols-3 py-4 border-t border-slate-50 items-center">
       <div className="pl-6 text-xs font-bold text-slate-600">{label}</div>
       <div className="flex justify-center">
          {resi ? (
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
               <Check className="w-4 h-4" />
            </div>
          ) : (
            <X className="w-5 h-5 text-slate-200" />
          )}
       </div>
       <div className="flex justify-center">
          {others ? (
             <div className="w-6 h-6 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
             </div>
          ) : (
            <div className="w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
               <X className="w-4 h-4 text-slate-300" />
            </div>
          )}
       </div>
    </div>
  );
}
