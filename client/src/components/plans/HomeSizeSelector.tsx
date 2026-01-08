import { cn } from "@/lib/utils";
import { serviceOptions } from "@/data/serviceData";
import { Check } from "lucide-react";

interface HomeSizeSelectorProps {
  selectedSize: string;
  onSelect: (size: string) => void;
}

export function HomeSizeSelector({ selectedSize, onSelect }: HomeSizeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {serviceOptions.map((option) => (
        <div
          key={option.size}
          onClick={() => onSelect(option.size)}
          className={cn(
            "cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md relative",
            selectedSize === option.size
              ? "border-[#6668F2] bg-[#6668F2]/5 shadow-sm"
              : "border-slate-100 bg-white hover:border-slate-200"
          )}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-slate-900">{option.size}</span>
            {selectedSize === option.size && (
              <div className="bg-[#6668F2] rounded-full p-1 absolute top-4 right-4">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div className="text-sm text-slate-500 mb-2">{option.duration} aprox</div>
          <div className="font-bold text-[#6668F2] text-xl">S/ {option.price}</div>
          
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
            {option.included.map((item, idx) => (
              <div key={idx} className="text-sm text-slate-600 flex justify-between">
                <span>{item.name}</span>
                <span className="font-medium bg-slate-100 px-2 rounded-full text-slate-900">{item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
