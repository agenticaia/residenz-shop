import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ShieldCheck, UserCheck, Zap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { PlanConfigModal } from "@/components/plans/PlanConfigModal";

export default function Plans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState<'on-demand' | 'subscription' | 'mini'>('on-demand');

  const handlePlanSelect = (type: 'on-demand' | 'subscription' | 'mini') => {
    setSelectedPlanType(type);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <PlanConfigModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planType={selectedPlanType} 
      />
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Elige tu nivel de tranquilidad</h1>
            <p className="text-base md:text-lg text-slate-600">
              Desde visitas puntuales hasta la gestión integral de tu hogar. Sin contratos forzosos, cancela cuando quieras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto">
            
            {/* On Demand */}
            <Card className="flex flex-col h-full p-6 md:p-8 border-2 border-transparent hover:border-[#6668F2] hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-slate-700 text-xl">On-Demand</h3>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                 <span className="text-base font-bold text-primary">S/</span>
                 <span className="text-4xl font-bold text-primary">85</span>
              </div>
              <div className="text-sm text-slate-500 -mt-4 mb-6">por visita única</div>

              <p className="text-base text-slate-600 mb-8 border-b border-slate-100 pb-8">
                Ideal para emergencias, pruebas o cuando necesitas una ayuda extra sin compromisos.
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <PlanFeature text="Limpieza base + Configuración de zonas prohibidas" highlight />
                <PlanFeature text="Limpieza estándar hotelera" />
                <PlanFeature text="Seguro básico de accidentes" />
                <PlanFeature text="Personal verificado" />
                <PlanFeature text="Insumos básicos incluidos" />
              </div>

              <div className="mt-auto pt-4">
                <Button 
                  onClick={() => handlePlanSelect('on-demand')}
                  className="w-full bg-[#6668F2] hover:bg-[#5557D9] text-white text-base font-bold rounded-full h-[56px] py-4 px-8 shadow-md transition-all"
                >
                  Agendar Una Vez
                </Button>
              </div>
            </Card>

            {/* Subscription - Highlighted */}
            <Card className="flex flex-col h-full p-8 border-2 border-transparent hover:border-[#6668F2] hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white rounded-xl shadow-md lg:-mt-4 lg:mb-4 relative">
              <div className="absolute top-0 inset-x-0 bg-primary h-2 rounded-t-xl"></div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary text-xl">Suscripción Mensual</h3>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                 <span className="text-base font-bold text-primary">S/</span>
                 <span className="text-4xl font-bold text-primary">320</span>
              </div>
              <div className="text-sm text-slate-500 -mt-4 mb-6">mensual (4 visitas)</div>

              <p className="text-base text-slate-600 mb-8 border-b border-slate-100 pb-8">
                La experiencia Residenz completa. Tu hogar en piloto automático con la misma persona siempre.
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <PlanFeature text="Manual Digital Completo + Carga mental delegada" highlight />
                <PlanFeature text="Todo lo de On-Demand" />
                <PlanFeature text="Personal FIJO asignado" highlight />
                <PlanFeature text="Garantía Total (Cobertura S/15k)" highlight />
                <PlanFeature text="Prioridad en agendamiento" />
                <PlanFeature text="Reemplazo inmediato por baja" />
              </div>

              <div className="mt-auto pt-4">
                <Button 
                  onClick={() => handlePlanSelect('subscription')}
                  className="w-full bg-[#6668F2] hover:bg-[#5557D9] text-white text-base font-bold rounded-full h-[56px] py-4 px-8 shadow-md transition-all"
                >
                  Quiero mi primera visita blindada
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">Garantía de satisfacción el primer mes</p>
              </div>
            </Card>

            {/* Business */}
            <Card className="flex flex-col h-full p-6 md:p-8 border-2 border-transparent hover:border-[#6668F2] hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-slate-500" />
                <h3 className="font-bold text-slate-700 text-xl">Empresas / Airbnb</h3>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                 <span className="text-4xl font-bold text-primary">Cotizar</span>
              </div>
              <div className="text-sm text-slate-500 -mt-4 mb-6">soluciones a medida</div>

              <p className="text-base text-slate-600 mb-8 border-b border-slate-100 pb-8">
                Para gestores de propiedades, oficinas boutique y anfitriones profesionales.
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <PlanFeature text="Gestión total: 0 instrucciones repetidas jamás" highlight />
                <PlanFeature text="Facturación corporativa" />
                <PlanFeature text="Reportes fotográficos" />
                <PlanFeature text="Gestión de llaves" />
                <PlanFeature text="Suministro de amenities" />
              </div>

              <div className="mt-auto pt-4">
                <Link href="/contact">
                  <Button className="w-full bg-[#6668F2] hover:bg-[#5557D9] text-white text-base font-bold rounded-full h-[56px] py-4 px-8 shadow-md transition-all">
                    Contactar Ventas
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function PlanFeature({ text, negative, highlight }: { text: string, negative?: boolean, highlight?: boolean }) {
  return (
    <div className="flex items-start gap-3 text-base">
      {negative ? (
        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold">✕</span>
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full bg-[#6668F2]/10 text-[#6668F2] flex items-center justify-center shrink-0">
          <Check className="w-3 h-3" />
        </div>
      )}
      <span className={cn(
        negative ? "text-slate-400 line-through" : "text-slate-700",
        highlight && "font-semibold text-[#6668F2]"
      )}>
        {text}
      </span>
    </div>
  );
}
