import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { stepVariants, iconVariants } from "./wizard-animations";

interface WizardStep1SuccessProps {
  nextStep: () => void;
  onClose: () => void;
}

export function WizardStep1Success({ nextStep, onClose }: WizardStep1SuccessProps) {
  return (
    <motion.div 
      initial={stepVariants.step1.initial}
      animate={stepVariants.step1.animate}
      exit={stepVariants.step1.exit}
      className="flex-1 flex flex-col bg-slate-50"
    >
      {/* Status Bar Fake */}
      <div className="px-6 py-3 flex justify-between text-xs font-medium text-slate-400 shrink-0">
        <span>10:30 AM</span>
        <span>100%</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
          <motion.div 
            {...iconVariants}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4 shrink-0"
          >
            <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">¡Suscripción Confirmada!</h2>
            <p className="text-slate-500">Tu servicio ha sido agendado exitosamente.</p>
          </div>

          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-600 uppercase tracking-wider">
              <span>Configuración</span>
              <span>25%</span>
            </div>
            <Progress value={25} className="h-2 bg-slate-200" />
          </div>

          <Card className="w-full bg-white border-l-4 border-l-amber-500 shadow-lg p-6 text-left space-y-4 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <ShieldCheck className="w-24 h-24 text-amber-500" />
            </div>
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse"></span>
              Acción Requerida
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              Para que tu <span className="font-bold text-primary">"Piloto Automático"</span> funcione y no tengas que repetir instrucciones, necesitamos saber dónde guardas las cosas clave.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <div className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-slate-500 animate-spin" />
              Tiempo estimado: 2 min
            </div>
          </Card>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 shrink-0">
        <Button 
          onClick={nextStep}
          className="w-full h-14 text-lg font-bold bg-[#0F172A] hover:bg-[#1E293B] shadow-xl shadow-slate-900/10"
        >
          ACTIVAR MANUAL DIGITAL
        </Button>
        <button onClick={onClose} className="w-full mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest">
          Hacerlo más tarde
        </button>
      </div>
    </motion.div>
  );
}
