import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ShieldCheck, UserCheck, Zap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Plans() {
  return (
    <Layout>
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">Elige tu nivel de tranquilidad</h1>
            <p className="text-lg text-slate-600">
              Desde visitas puntuales hasta la gestión integral de tu hogar. Sin contratos forzosos, cancela cuando quieras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            
            {/* On Demand */}
            <Card className="p-8 border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-slate-700">On-Demand</h3>
              </div>
              <div className="mb-6">
                 <div className="text-4xl font-bold text-primary">S/ 85</div>
                 <div className="text-sm text-slate-500">por visita única</div>
              </div>
              <p className="text-sm text-slate-600 mb-8 border-b border-slate-100 pb-8">
                Ideal para emergencias, pruebas o cuando necesitas una ayuda extra sin compromisos.
              </p>
              
              <div className="space-y-4 mb-8">
                <PlanFeature text="Limpieza estándar hotelera" />
                <PlanFeature text="Seguro básico de accidentes" />
                <PlanFeature text="Personal verificado" />
                <PlanFeature text="Insumos básicos incluidos" />
                <PlanFeature text="Personal Fijo (Sujeto a disp.)" negative />
                <PlanFeature text="Manual Digital de Preferencias" negative />
              </div>

              <Button variant="outline" className="w-full border-slate-300">
                Agendar Una Vez
              </Button>
            </Card>

            {/* Subscription - Highlighted */}
            <Card className="p-8 border-primary ring-2 ring-primary relative shadow-2xl bg-white lg:-mt-4 lg:mb-4">
              <div className="absolute top-0 inset-x-0 bg-primary h-2"></div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary">Suscripción Mensual</h3>
              </div>
              <div className="mb-6">
                 <div className="text-4xl font-bold text-primary">S/ 320</div>
                 <div className="text-sm text-slate-500">mensual (4 visitas)</div>
              </div>
              <p className="text-sm text-slate-600 mb-8 border-b border-slate-100 pb-8">
                La experiencia Residenz completa. Tu hogar en piloto automático con la misma persona siempre.
              </p>
              
              <div className="space-y-4 mb-8">
                <PlanFeature text="Todo lo de On-Demand" highlight />
                <PlanFeature text="Personal FIJO asignado" highlight />
                <PlanFeature text="Garantía Total (Cobertura S/15k)" highlight />
                <PlanFeature text="Manual Digital de Preferencias" highlight />
                <PlanFeature text="Prioridad en agendamiento" />
                <PlanFeature text="Reemplazo inmediato por baja" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                Empezar Suscripción
              </Button>
              <p className="text-center text-xs text-slate-400 mt-4">Garantía de satisfacción el primer mes</p>
            </Card>

            {/* Business */}
            <Card className="p-8 border-slate-200 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-slate-500" />
                <h3 className="font-bold text-slate-700">Empresas / Airbnb</h3>
              </div>
              <div className="mb-6">
                 <div className="text-4xl font-bold text-primary">Cotizar</div>
                 <div className="text-sm text-slate-500">soluciones a medida</div>
              </div>
              <p className="text-sm text-slate-600 mb-8 border-b border-slate-100 pb-8">
                Para gestores de propiedades, oficinas boutique y anfitriones profesionales.
              </p>
              
              <div className="space-y-4 mb-8">
                <PlanFeature text="Facturación corporativa" />
                <PlanFeature text="Reportes fotográficos" />
                <PlanFeature text="Gestión de llaves" />
                <PlanFeature text="Suministro de amenities" />
                <PlanFeature text="Protocolos personalizados" />
              </div>

              <Button variant="outline" className="w-full border-slate-300">
                Contactar Ventas
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function PlanFeature({ text, negative, highlight }: { text: string, negative?: boolean, highlight?: boolean }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      {negative ? (
        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold">✕</span>
        </div>
      ) : (
        <div className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
          highlight ? "bg-primary text-white" : "bg-green-100 text-green-700"
        )}>
          <Check className="w-3 h-3" />
        </div>
      )}
      <span className={cn(
        negative ? "text-slate-400 line-through" : "text-slate-700",
        highlight && "font-semibold text-primary"
      )}>
        {text}
      </span>
    </div>
  );
}
