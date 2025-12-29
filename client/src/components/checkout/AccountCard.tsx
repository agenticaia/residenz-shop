import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lock, Settings, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccountCardProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setShowWizard: (value: boolean) => void;
}

export function AccountCard({ isLoggedIn, setIsLoggedIn, setShowWizard }: AccountCardProps) {
  return (
    <div className="space-y-6">
      {/* Account Card */}
      <Card className="p-8 border-slate-100 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
           <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", isLoggedIn ? "bg-green-500" : "bg-slate-100 text-slate-500")}>
             {isLoggedIn ? <Check className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
           </div>
           <div>
             <h3 className="font-bold text-lg text-primary">{isLoggedIn ? "Sesión Iniciada" : "Cuenta"}</h3>
             <p className="text-sm text-slate-500">
               {isLoggedIn ? "Juan Carlos Perez (juan.perez@example.com)" : "Para agendar el servicio, por favor inicia sesión o regístrate"}
             </p>
           </div>
        </div>
        {!isLoggedIn && (
          <Button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-lg font-bold rounded-xl shadow-lg shadow-primary/20"
          >
            Iniciar Sesión / Registrarse
          </Button>
        )}
      </Card>

      {/* Preferences Placeholder - Digital Manual */}
      <Card 
        onClick={() => isLoggedIn && setShowWizard(true)}
        className={cn(
          "p-8 border-slate-100 shadow-sm transition-all duration-300",
          isLoggedIn ? "opacity-100 cursor-pointer hover:border-primary/50 hover:shadow-md bg-white" : "opacity-50 pointer-events-none bg-slate-50"
        )}
      >
         <div className="flex justify-between items-start mb-4">
           <h3 className="font-bold text-lg text-primary flex items-center gap-2">
             <Settings className="w-5 h-5" />
             Manual Digital de Preferencias
           </h3>
           {isLoggedIn && (
             <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
               Pendiente
             </Badge>
           )}
         </div>
         <p className="text-sm text-slate-500 mb-6">
           {isLoggedIn 
             ? "Configura las reglas de tu hogar, zonas prohibidas y ubicación de utensilios para tu Piloto Automático." 
             : "Inicia sesión para configurar tus instrucciones personalizadas."
           }
         </p>
         {isLoggedIn && (
           <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 font-bold">
             Configurar Manual Digital
           </Button>
         )}
      </Card>

      {/* Payment Method Placeholder (Only shows if logged in) */}
      {isLoggedIn && (
        <Card className="p-8 border-slate-100 shadow-sm">
          <h3 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Método de Pago
          </h3>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <p className="text-sm text-slate-500 mb-4">Selecciona un método de pago para completar tu suscripción</p>
            <Button className="w-full bg-black text-white hover:bg-slate-800 h-12 rounded-lg font-bold">
              Agregar Tarjeta
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
