import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  ChevronRight, 
  Minus, 
  Plus, 
  Tag, 
  Lock,
  Calendar,
  Check
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Simple Checkout Header */}
        <div className="bg-white border-b border-slate-100 py-4 mb-8">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-heading font-bold text-xl text-primary">Checkout</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              Ahorrando S/136 en este pedido
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left side: Auth & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Card */}
              <Card className="p-8 border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                     <Lock className="w-5 h-5" />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-primary">Cuenta</h3>
                     <p className="text-sm text-slate-500">Para agendar el servicio, por favor inicia sesión o regístrate</p>
                   </div>
                </div>
                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-lg font-bold rounded-xl shadow-lg shadow-primary/20">
                  Iniciar Sesión / Registrarse
                </Button>
              </Card>

              {/* Preferences Placeholder */}
              <Card className="p-8 border-slate-100 shadow-sm opacity-50 pointer-events-none">
                 <h3 className="font-bold text-lg text-primary mb-4">Manual Digital de Preferencias</h3>
                 <p className="text-sm text-slate-500 italic">Inicia sesión para configurar tus instrucciones personalizadas.</p>
              </Card>
            </div>

            {/* Right side: Summary & Plan Details */}
            <div className="space-y-6">
              {/* Plan Summary Card */}
              <Card className="p-6 border-slate-100 shadow-sm space-y-6">
                <div className="flex items-start gap-3 border-b border-slate-50 pb-4">
                   <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mt-1">
                     <Calendar className="w-5 h-5" />
                   </div>
                   <div className="flex-grow">
                     <h4 className="font-bold text-primary leading-tight">Limpieza Semanal (4 semanas)</h4>
                     <p className="text-xs text-slate-400 mt-0.5">Suscripción Mensual • 4 servicios</p>
                   </div>
                </div>

                <div className="flex items-center justify-between">
                   <div className="space-y-0.5">
                     <p className="text-sm font-bold text-primary">Paquete de Limpieza</p>
                     <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase italic">1 Profesional x 4 hrs</p>
                   </div>
                   <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-primary"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </Button>
                      <span className="w-6 text-center text-sm font-bold">{quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-primary"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                   </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-50">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Total de ítems</span>
                    <span className="font-medium text-primary">S/544 <span className="text-slate-400 line-through font-normal text-xs ml-1">S/680</span></span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-slate-50">
                    <span className="text-lg">Monto a pagar</span>
                    <span className="text-xl">S/544</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                  <div className="w-5 h-5 rounded bg-primary text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">Evitar llamar antes de llegar a la ubicación</p>
                </div>
                
                <Button variant="link" className="w-full text-primary font-bold text-xs uppercase tracking-widest">
                  Editar Paquete
                </Button>
              </Card>

              {/* Coupons Card */}
              <Card className="p-4 border-slate-100 shadow-sm flex items-center gap-4 bg-white hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Tag className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-primary">Cupones y Ofertas</p>
                  <p className="text-[10px] text-slate-400">Inicia sesión para ver ofertas disponibles</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </Card>

              {/* Trust Seal */}
              <div className="text-center space-y-4 px-6 pt-4">
                 <div className="flex justify-center items-center gap-2">
                   <ShieldCheck className="w-5 h-5 text-primary opacity-50" />
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Pago 100% Seguro</span>
                 </div>
                 <div className="flex justify-center gap-4 opacity-30 grayscale">
                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
