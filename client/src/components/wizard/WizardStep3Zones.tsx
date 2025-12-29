import { motion } from "framer-motion";
import { ChevronLeft, HelpCircle, AlertTriangle, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { stepVariants } from "./wizard-animations";

interface WizardStep3ZonesProps {
  restrictedZones: string[];
  newZone: string;
  setNewZone: (val: string) => void;
  addZone: () => void;
  removeZone: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function WizardStep3Zones({
  restrictedZones,
  newZone,
  setNewZone,
  addZone,
  removeZone,
  nextStep,
  prevStep,
}: WizardStep3ZonesProps) {
  return (
    <motion.div 
      {...stepVariants.step2}
      className="flex-1 flex flex-col bg-white"
    >
      <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10 shrink-0">
        <Button variant="ghost" size="icon" onClick={prevStep} className="-ml-2">
          <ChevronLeft className="w-6 h-6 text-slate-900" />
        </Button>
        <span className="font-bold text-sm text-slate-900">Paso 3 de 5: Zonas Prohibidas</span>
        <Button variant="ghost" size="icon" className="-mr-2">
          <HelpCircle className="w-5 h-5 text-slate-400" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl shadow-sm text-amber-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900">¿Áreas restringidas?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Indica qué habitaciones o áreas NO deben ser limpiadas o accedidas.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Ej. Oficina Principal" 
              value={newZone}
              onChange={(e) => setNewZone(e.target.value)}
              className="h-12 text-lg"
              onKeyDown={(e) => e.key === 'Enter' && addZone()}
            />
            <Button onClick={addZone} className="h-12 w-12 shrink-0 bg-slate-900">
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-2">
            {restrictedZones.length === 0 ? (
              <p className="text-center text-slate-400 py-8 text-sm italic">No has agregado zonas prohibidas aún.</p>
            ) : (
              restrictedZones.map((zone, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-medium text-slate-700">{zone}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeZone(idx)} className="text-red-400 hover:text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-slate-100 bg-white shrink-0">
        <Button 
          onClick={nextStep}
          className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
