import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { detailsData } from "@/data/serviceData";
import { getAssetUrl } from "@/lib/utils";
import {
  Award,
  ArrowUp,
  Check,
  GraduationCap,
  Home,
  PaintBucket,
  ShieldCheck,
  Star,
  X,
  Zap,
} from "lucide-react";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
}

export function ServiceDetailsModal({ isOpen, onClose, serviceId }: ServiceDetailsModalProps) {
  const currentService = detailsData[serviceId] || detailsData['default'];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-full sm:max-w-md p-0 overflow-hidden rounded-t-3xl sm:rounded-3xl gap-0 border-0 shadow-2xl max-h-[90vh] h-auto sm:h-[85vh] flex flex-col fixed bottom-0 sm:bottom-auto translate-x-0 translate-y-0 top-auto left-0 right-0 sm:top-1/2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:-translate-y-1/2">
        <div className="bg-white h-full flex flex-col min-h-0">
          <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10 shrink-0">
            <div>
              <DialogTitle className="text-xl font-bold text-slate-900 mb-1">
                {currentService.title}
              </DialogTitle>
              <p className="text-sm text-slate-500 font-medium">
                A partir de S/ {currentService.price} • {currentService.duration} aprox.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-slate-100 -mt-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-10">
            {/* Section 1: What is included */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">¿Qué incluye?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                {currentService.included.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 group">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm group-hover:shadow-md transition-all">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/40 p-1 rounded-full">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-tight text-center px-1">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: What is excluded */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">¿Qué está excluido?</h3>
              <div className="space-y-3">
                {currentService.excluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: What we will need from you */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Lo que necesitaremos de ti</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Cubeta y agua", icon: PaintBucket },
                  { title: "Toma de corriente", icon: Zap },
                  { title: "Escalera o Taburete", icon: ArrowUp },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center text-center gap-3 h-full justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Top cleaners */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Mejores limpiadores</h3>
              <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
                <div className="flex-1 space-y-4 w-full">
                  {[
                    { text: "Entrenados por más de 100 horas", icon: GraduationCap },
                    { text: "Calificación promedio de 4.8+", icon: Star },
                    { text: "Más de 100K hogares atendidos", icon: Home },
                    { text: "Verificado por Residenz", icon: ShieldCheck },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <item.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <span className="font-medium text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                  <img
                    src={getAssetUrl("/images/staff-maria.png")}
                    alt="Limpiador profesional"
                    className="w-full h-full object-cover rounded-full border-4 border-slate-50 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-slate-900">Top</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Damage protection */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Protección contra daños</h3>
                <ShieldCheck className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-slate-600 text-sm">
                Cobertura de hasta S/ 10,000 si ocurre algún daño durante el trabajo. Tu tranquilidad es nuestra prioridad.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-slate-900">4.81</span>
                  <div className="flex flex-col mb-1">
                    <div className="flex text-yellow-400 text-sm">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">301K reseñas</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { stars: 5, count: "279K", percent: "90%" },
                    { stars: 4, count: "10K", percent: "5%" },
                    { stars: 3, count: "5K", percent: "2%" },
                    { stars: 2, count: "3K", percent: "1%" },
                    { stars: 1, count: "5K", percent: "2%" },
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 w-8 shrink-0">
                        <span className="font-bold">{rating.stars}</span>
                        <Star className="w-3 h-3 text-slate-900 fill-slate-900" />
                      </div>
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-900 rounded-full"
                          style={{ width: rating.percent }}
                        ></div>
                      </div>
                      <span className="w-8 text-right text-slate-500 shrink-0">
                        {rating.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
