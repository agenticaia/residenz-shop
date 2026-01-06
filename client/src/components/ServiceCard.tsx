import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  rating: number;
  reviews: string;
  price: number | string;
  duration: string;
  description: string[];
  imageUrl: string;
  onAdd: () => void;
  onViewDetails?: () => void;
  className?: string;
}

export function ServiceCard({
  title,
  rating,
  reviews,
  price,
  duration,
  description,
  imageUrl,
  onAdd,
  onViewDetails,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("flex flex-col md:flex-row gap-6 border-b border-slate-100 pb-12 last:border-0 group", className)}>
      <div className="flex-1 space-y-3">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
        
        {/* Rating Row */}
        <div className="flex items-center gap-2 text-sm">
          <div className="bg-slate-50 rounded px-1.5 py-0.5 flex items-center gap-1 border border-slate-100">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-xs text-slate-900">{rating}</span>
          </div>
          <span className="text-slate-500 text-xs">({reviews} reseñas)</span>
        </div>

        {/* Price & Duration Row */}
        <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
          <span>{typeof price === 'number' ? `S/ ${price}` : price}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">{duration}</span>
        </div>
        
        {/* Dotted Divider (Optional based on image, but keeping it clean for now) */}
        
        {/* Description List */}
        <div className="pt-2 space-y-2">
          {description.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <Button 
          variant="link" 
          className="p-0 h-auto text-primary font-bold text-sm mt-2 hover:no-underline"
          onClick={onViewDetails}
        >
          Ver detalles
        </Button>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-40 flex-shrink-0">
        <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-sm">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                <span className="text-xs">Imagen</span>
             </div>
          )}
        </div>
        
        {/* Add Button - Floating Overlay */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
          <Button 
            onClick={onAdd}
            className="bg-white text-primary border border-slate-100 hover:bg-slate-50 shadow-md rounded-lg px-8 font-bold text-sm h-9 uppercase tracking-wide hover:scale-105 transition-transform"
          >
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
