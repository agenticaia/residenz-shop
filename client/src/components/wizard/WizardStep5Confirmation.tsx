import { motion } from "framer-motion";
import { Smartphone, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stepVariants } from "./wizard-animations";

interface WizardStep5ConfirmationProps {
  handleFinish: () => void;
}

export function WizardStep5Confirmation({ handleFinish }: WizardStep5ConfirmationProps) {
  return (
    <motion.div 
      {...stepVariants.step3}
      className="flex-1 flex flex-col bg-[#0F172A] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[100px]" />
      </div>

      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="min-h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8 relative shrink-0">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-pulse" />
            <Smartphone className="w-32 h-32 text-white/90 relative z-10" strokeWidth={1} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F172A] p-2 rounded-full border border-white/20 shadow-2xl">
                <Lock className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2 tracking-tight">Pilot Mode Activated</h2>
          <p className="text-slate-400 max-w-xs mx-auto leading-relaxed mb-8">
            Tu Resi no podrá iniciar el servicio sin antes desbloquear y leer tu Manual Digital.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-xs border border-white/10 shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Seguridad Activada</p>
                <p className="text-xs text-slate-400">Instrucciones encriptadas</p>
              </div>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#0F172A] border-t border-white/10 relative z-10 shrink-0">
        <Button 
          onClick={handleFinish}
          className="w-full h-14 text-lg font-bold rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl"
        >
          Finalizar Configuración
        </Button>
      </div>
    </motion.div>
  );
}
