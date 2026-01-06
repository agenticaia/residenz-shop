import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

export function ProblemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-slate-500 font-medium text-lg leading-snug">
      <span className="text-red-500 text-2xl shrink-0 leading-none">✕</span>
      <span>{text}</span>
    </li>
  );
}

export function SolutionItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-white font-semibold text-lg leading-snug">
      <span className="text-secondary text-2xl shrink-0 leading-none">✓</span>
      <span>{text}</span>
    </li>
  );
}

export function StepItem({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="w-20 h-20 rounded-3xl bg-slate-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
        <Icon className="w-10 h-10" />
      </div>
      <h4 className="text-xl font-heading font-bold text-primary">{title}</h4>
      <p className="text-slate-600 leading-relaxed px-4">{desc}</p>
    </div>
  );
}

export function Testimonial({ name, location, text, image }: { name: string, location: string, text: string, image: string }) {
  return (
    <Card className="p-8 border border-slate-100 bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl hover:scale-[1.02] transition-transform duration-500">
      <div className="flex items-center gap-4 mb-6">
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/20" />
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-xs text-slate-400 uppercase tracking-widest">{location}</p>
        </div>
      </div>
      <p className="text-slate-600 italic leading-relaxed text-lg">"{text}"</p>
      <div className="mt-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
        ))}
      </div>
    </Card>
  );
}
