import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { DigitalManualWizard } from "@/components/DigitalManualWizard";
import { 
  ShieldCheck, 
  ChevronRight, 
  Tag
} from "lucide-react";
import { useState } from "react";
import { useCheckoutParams } from "@/hooks/useCheckoutParams";
import { AccountCard } from "@/components/checkout/AccountCard";
import { PlanSummary } from "@/components/checkout/PlanSummary";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  
  const { 
    servicio, 
    duracion, 
    frecuencia, 
    tamano, 
    total, 
    itemsCount 
  } = useCheckoutParams();

  return (
    <Layout>
      <DigitalManualWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
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
              <AccountCard 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                setShowWizard={setShowWizard} 
              />
            </div>

            {/* Right side: Summary & Plan Details */}
            <div className="space-y-6">
              {/* Plan Summary Card */}
              <PlanSummary 
                servicio={servicio}
                duracion={duracion}
                frecuencia={frecuencia}
                itemsCount={itemsCount}
                tamano={tamano}
                total={total}
                quantity={quantity}
                setQuantity={setQuantity}
                isLoggedIn={isLoggedIn}
                onPayClick={() => isLoggedIn ? setShowWizard(true) : alert("Por favor inicia sesión primero")}
              />

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