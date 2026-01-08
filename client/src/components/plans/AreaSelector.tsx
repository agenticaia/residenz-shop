import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

// Define available areas
const areas = [
  { id: 'bedroom', label: 'Habitaciones', price: 45 },
  { id: 'bathroom', label: 'Baños', price: 40 },
  { id: 'living', label: 'Sala', price: 50 },
  { id: 'kitchen', label: 'Cocina', price: 80 },
  { id: 'balcony', label: 'Balcón', price: 30 },
];

interface AreaSelectorProps {
  quantities: Record<string, number>;
  onChange: (id: string, delta: number) => void;
}

export function AreaSelector({ quantities, onChange }: AreaSelectorProps) {
  return (
    <div className="space-y-3">
      {areas.map((area) => (
        <div key={area.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-white hover:shadow-sm transition-shadow">
          <div>
            <div className="font-bold text-slate-900">{area.label}</div>
            <div className="text-sm text-[#6668F2] font-medium">S/ {area.price}</div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-slate-200"
              onClick={() => onChange(area.id, -1)}
              disabled={!quantities[area.id]}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-6 text-center font-bold text-lg">{quantities[area.id] || 0}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-slate-200 hover:border-[#6668F2] hover:text-[#6668F2]"
              onClick={() => onChange(area.id, 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
