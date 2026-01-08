import { motion } from "framer-motion";
import { ChevronLeft, HelpCircle, PawPrint, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { stepVariants } from "./wizard-animations";

interface Pet {
  name: string;
  type: string;
}

interface WizardStep4PetsProps {
  pets: Pet[];
  newPetName: string;
  setNewPetName: (val: string) => void;
  newPetType: string;
  setNewPetType: (val: string) => void;
  addPet: () => void;
  removePet: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function WizardStep4Pets({
  pets,
  newPetName,
  setNewPetName,
  newPetType,
  setNewPetType,
  addPet,
  removePet,
  nextStep,
  prevStep,
}: WizardStep4PetsProps) {
  return (
    <motion.div 
      {...stepVariants.step2}
      className="flex-1 flex flex-col bg-white"
    >
      <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10 shrink-0">
        <Button variant="ghost" size="icon" onClick={prevStep} className="-ml-2">
          <ChevronLeft className="w-6 h-6 text-slate-900" />
        </Button>
        <span className="font-bold text-sm text-slate-900">Paso 4 de 5: Mascotas</span>
        <Button variant="ghost" size="icon" className="-mr-2">
          <HelpCircle className="w-5 h-5 text-slate-400" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-xl shadow-sm text-purple-500">
              <PawPrint className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900">Amigos en casa</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registra tus mascotas para que nuestro equipo sepa cómo interactuar con ellas.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 space-y-2">
              <Input 
                  placeholder="Nombre (ej. Firulais)" 
                  value={newPetName}
                  onChange={(e) => setNewPetName(e.target.value)}
                  className="h-12"
              />
              <div className="flex gap-2">
                  {["Perro", "Gato", "Otro"].map(type => (
                      <button
                          key={type}
                          onClick={() => setNewPetType(type)}
                          className={cn(
                              "flex-1 py-2 text-xs font-bold rounded-lg border transition-all",
                              newPetType === type 
                                  ? "bg-purple-100 border-purple-300 text-purple-700" 
                                  : "bg-white border-slate-200 text-slate-500"
                          )}
                      >
                          {type}
                      </button>
                  ))}
              </div>
            </div>
            <Button onClick={addPet} className="h-12 w-12 shrink-0 bg-slate-900 mt-0">
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-2 mt-4">
            {pets.length === 0 ? (
              <p className="text-center text-slate-400 py-8 text-sm italic">No has registrado mascotas.</p>
            ) : (
              pets.map((pet, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <PawPrint className="w-4 h-4" />
                      </div>
                      <div>
                          <p className="font-bold text-slate-700">{pet.name}</p>
                          <p className="text-xs text-slate-500">{pet.type}</p>
                      </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removePet(idx)} className="text-red-400 hover:text-red-600 hover:bg-red-50">
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
          className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
