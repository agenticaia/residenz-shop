import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, HelpCircle, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stepVariants } from "./wizard-animations";

interface WizardStep2LogisticsProps {
  broomLocation: string | null;
  setBroomLocation: (loc: string) => void;
  broomPhoto: string | null;
  setBroomPhoto: (val: string | null) => void;
  
  productsLocation: string | null;
  setProductsLocation: (loc: string) => void;
  productsPhoto: string | null;
  setProductsPhoto: (val: string | null) => void;

  nextStep: () => void;
  prevStep: () => void;
}

export function WizardStep2Logistics({
  broomLocation,
  setBroomLocation,
  broomPhoto,
  setBroomPhoto,
  productsLocation,
  setProductsLocation,
  productsPhoto,
  setProductsPhoto,
  nextStep,
  prevStep,
}: WizardStep2LogisticsProps) {
  const [internalStep, setInternalStep] = useState(1);
  
  const handlePhotoClick = (currentPhoto: string | null, setPhoto: (val: string | null) => void) => {
    // Simulate taking a photo by toggling a placeholder
    if (currentPhoto) {
      setPhoto(null);
    } else {
      setPhoto("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200");
    }
  };

  const handleBack = () => {
    if (internalStep === 2) {
      setInternalStep(1);
    } else {
      prevStep();
    }
  };

  const handleContinue = () => {
    if (internalStep === 1) {
      setInternalStep(2);
    } else {
      nextStep();
    }
  };

  return (
    <motion.div 
      {...stepVariants.step2}
      className="flex-1 flex flex-col bg-white"
    >
      {/* Header */}
      <div className="px-4 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10 shrink-0">
        <Button variant="ghost" size="icon" onClick={handleBack} className="-ml-2">
          <ChevronLeft className="w-6 h-6 text-slate-900" />
        </Button>
        <div className="flex flex-col items-center">
          <span className="font-bold text-sm text-slate-900">Paso 2 de 5: Logística</span>
          <span className="text-[10px] text-slate-500 font-medium">Ubicación de los materiales de limpieza</span>
        </div>
        <Button variant="ghost" size="icon" className="-mr-2">
          <HelpCircle className="w-5 h-5 text-slate-400" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm text-xl">📷</div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Una foto vale más...</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ayuda a tu Resi a encontrar los insumos sin tener que preguntarte cada vez.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* UTENSILIOS */}
          {internalStep === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white text-[10px]">1</span>
                  UTENSILIOS
                </h4>
                <span className="text-[10px] font-medium text-slate-400">Escoba, Aspiradora, Mopa</span>
              </div>

              {/* Photo Area */}
              <div 
                onClick={() => handlePhotoClick(broomPhoto, setBroomPhoto)}
                className={cn(
                  "w-full aspect-[2/1] rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all gap-2 relative overflow-hidden group",
                  broomPhoto ? "border-green-500 bg-green-50" : "border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300"
                )}
              >
                {broomPhoto ? (
                  <>
                    <img src={broomPhoto} alt="Broom location" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="relative z-10 bg-white/90 p-2 rounded-full shadow-sm text-green-600">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="relative z-10 font-bold text-green-700 text-xs">Foto agregada</span>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-500 text-xs">Toca para tomar foto</span>
                  </>
                )}
              </div>

              {/* Quick Select */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">O SELECCIONA UBICACIÓN RÁPIDA:</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Cocina", "Lavandería", "Baño"].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setBroomLocation(loc)}
                      className={cn(
                        "py-2 px-1 rounded-lg text-xs font-bold border transition-all",
                        broomLocation === loc 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                      )}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* PRODUCTOS */}
          {internalStep === 2 && (
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-3"
             >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white text-[10px]">2</span>
                  PRODUCTOS
                </h4>
                <span className="text-[10px] font-medium text-slate-400">Detergentes, Trapos</span>
              </div>

              {/* Photo Area */}
              <div 
                onClick={() => handlePhotoClick(productsPhoto, setProductsPhoto)}
                className={cn(
                  "w-full aspect-[2/1] rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all gap-2 relative overflow-hidden group",
                  productsPhoto ? "border-green-500 bg-green-50" : "border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300"
                )}
              >
                {productsPhoto ? (
                  <>
                    <img src={productsPhoto} alt="Products location" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="relative z-10 bg-white/90 p-2 rounded-full shadow-sm text-green-600">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="relative z-10 font-bold text-green-700 text-xs">Foto agregada</span>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-500 text-xs">Toca para tomar foto</span>
                  </>
                )}
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">O SELECCIONA UBICACIÓN RÁPIDA:</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Cocina", "Lavandería", "Baño"].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setProductsLocation(loc)}
                      className={cn(
                        "py-2 px-1 rounded-lg text-xs font-bold border transition-all",
                        productsLocation === loc 
                          ? "border-primary bg-primary/5 text-primary" 
                          : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                      )}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
             </motion.div>
          )}
        </div>
      </div>

      <div className="p-6 border-t border-slate-100 bg-white shrink-0">
        <Button 
          onClick={handleContinue}
          className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
