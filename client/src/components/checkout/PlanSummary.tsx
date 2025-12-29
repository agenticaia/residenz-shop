import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Minus, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanSummaryProps {
  servicio: string;
  duracion: string;
  frecuencia: string;
  itemsCount: string;
  tamano: string;
  total: string;
  quantity: number;
  setQuantity: (val: number) => void;
  isLoggedIn: boolean;
  onPayClick: () => void;
}

export function PlanSummary({
  servicio,
  duracion,
  frecuencia,
  itemsCount,
  tamano,
  total,
  quantity,
  setQuantity,
  isLoggedIn,
  onPayClick
}: PlanSummaryProps) {
  return (
    <Card className="p-6 border-slate-100 shadow-sm space-y-6">
      <div className="flex items-start gap-3 border-b border-slate-50 pb-4">
         <div className="p-2 bg-slate-100 rounded-lg text-slate-600 mt-1">
           <Calendar className="w-5 h-5" />
         </div>
         <div className="flex-grow">
           <h4 className="font-bold text-primary leading-tight">{servicio} ({duracion})</h4>
           <p className="text-xs text-slate-400 mt-0.5">{frecuencia} • {itemsCount} servicios</p>
         </div>
      </div>

      <div className="flex items-center justify-between">
         <div className="space-y-0.5">
           <p className="text-sm font-bold text-primary">{tamano}</p>
           <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase italic">Servicio Profesional</p>
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
          <span className="font-medium text-primary">{total}</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-slate-50">
          <span className="text-lg">Monto a pagar</span>
          <span className="text-xl">{total}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
        <div className="w-5 h-5 rounded bg-primary text-white flex items-center justify-center shrink-0">
          <Check className="w-3 h-3" />
        </div>
        <p className="text-[11px] text-slate-600 leading-tight">Evitar llamar antes de llegar a la ubicación</p>
      </div>
      
      <Button 
        onClick={onPayClick}
        className={cn(
          "w-full h-14 text-lg font-bold rounded-xl shadow-lg transition-all",
          isLoggedIn 
            ? "bg-primary hover:bg-primary/90 shadow-primary/20" 
            : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
        )}
      >
        {isLoggedIn ? "PAGAR AHORA" : "Ir a Pagar"}
      </Button>
    </Card>
  );
}
