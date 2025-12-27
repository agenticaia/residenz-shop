import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  ShieldCheck, 
  Clock, 
  Check, 
  X, 
  Info,
  ChevronRight,
  ShoppingCart,
  Percent,
  Calendar,
  UserCheck,
  Pause,
  RefreshCw,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Layout>
      <div className="bg-white min-h-screen pb-20">
        <div className="border-b border-slate-100 bg-white sticky top-16 z-30 py-4 hidden md:block">
          <div className="container mx-auto px-4 flex items-center gap-6">
             <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="hover:text-primary cursor-pointer">Inicio</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">Limpieza Mensual</span>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">Paquetes de Limpieza Mensual</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded text-sm font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.84</span>
                  </div>
                  <span className="text-slate-500 text-sm">(358K reservas completadas)</span>
                </div>
                <Button 
                  onClick={() => setIsOpen(true)}
                  className="bg-primary hover:bg-primary/90 rounded-xl px-8 h-12 text-base font-bold shadow-lg shadow-primary/20"
                >
                  Configurar Servicio
                </Button>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-slate-900">
                 <img 
                  src="/images/hero-clean.png" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  alt="Service Video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-8">Personaliza tu experiencia</h2>
                <Card className="p-6 border-slate-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-primary">Suscripción: Limpieza Recurrente</h3>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="text-green-600 font-bold">4.85</span>
                         <span className="text-slate-400">(693K reseñas)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-slate-400 line-through text-sm">S/400</span>
                        <span className="text-xl font-bold text-primary">Desde S/320</span>
                      </div>
                    </div>
                    <Button onClick={() => setIsOpen(true)} variant="outline" className="border-primary text-primary hover:bg-primary/5 font-bold">Añadir</Button>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 text-center space-y-4 border-slate-100 shadow-sm">
                <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300"><ShoppingCart className="w-8 h-8" /></div>
                <p className="text-slate-500 font-medium">Tu carrito está vacío</p>
              </Card>
              <Card className="p-6 border-slate-100 shadow-sm space-y-4">
                <h3 className="font-heading font-bold text-primary">La Promesa Residenz</h3>
                <ul className="space-y-3">
                  <PromiseItem text="Profesionales Verificados" />
                  <PromiseItem text="Gestión sin Fricciones" />
                  <PromiseItem text="Precios Transparentes" />
                  <PromiseItem text="Garantía de S/15,000" />
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2rem] gap-0 border-0 bg-white">
          <div className="max-h-[90vh] overflow-y-auto">
            
            {/* 1. Header with Top-rated Professionals */}
            <div className="p-8 border-b border-slate-100 bg-slate-50 relative">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-heading font-bold text-primary leading-tight">Profesionales mejor valorados</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      100% Personal Verificado
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Star className="w-5 h-5 text-secondary fill-secondary" />
                      Calificación promedio 4.8+
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Zap className="w-5 h-5 text-primary" />
                      100+ Horas de Entrenamiento
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img src="/images/staff-maria.png" alt="Staff" className="w-full h-auto rounded-2xl shadow-xl" />
                </div>
              </div>
            </div>

            <div className="p-8 space-y-12">
              {/* 2. How it works Timeline */}
              <section className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-primary">Cómo funciona:</h3>
                <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                  <TimelineStep number="1" title="Selecciona la Duración" desc="Elige la duración de cada visita según el tamaño de tu casa y carga de trabajo." />
                  <TimelineStep number="2" title="Selecciona Número de Profesionales" desc="Elige el número de personas basado en tus necesidades." />
                  <TimelineStep number="3" title="Selecciona Días por Semana" desc="Elige de 1 a 6 veces por semana. ¡Más días = más ahorros!" />
                  <TimelineStep number="4" title="Selecciona Duración del Plan" desc="Elige desde 4 semanas hasta 24 semanas." />
                  <TimelineStep number="5" title="Selecciona Combinación de Día y Hora" desc="Selecciona tu horario preferido y enviaremos a la misma persona siempre." />
                  <TimelineStep number="6" title="Completa el Pago" desc="Paga de forma segura usando cualquiera de las opciones disponibles." />
                </div>
                
                <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl flex items-center gap-4">
                  <div className="bg-primary text-white p-2 rounded-lg"><Check className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-primary">¡Reserva Completada!</p>
                    <p className="text-sm text-slate-600">¡Tu reserva está lista! Disfruta la conveniencia de tener a la misma persona siempre.</p>
                  </div>
                </div>
              </section>

              {/* 3. Cleaning Materials / Tools */}
              <section className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-primary">Nuestros materiales de limpieza</h3>
                <div className="grid gap-6">
                  <MaterialItem title="Máquina de Vapor" desc="Elimina manchas de grasa de estufas, filtros de campana, azulejos y hornos microondas." image="/images/hero-clean.png" />
                  <MaterialItem title="Máquina de Fregado" desc="Elimina manchas difíciles de agua de azulejos de baño, lechada, bañeras, lavabos y grifos." image="/images/hero-clean.png" />
                  <MaterialItem title="Desengrasante" desc="Descompone aceites, grasas y manchas pesadas de electrodomésticos de cocina, pisos y paredes." image="/images/hero-clean.png" />
                  <MaterialItem title="Desincrustante" desc="Ayuda a eliminar depósitos minerales y sarro de los baños." image="/images/hero-clean.png" />
                </div>
              </section>

              {/* 4. Subscription Benefits Grid */}
              <section className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-primary">Beneficios de la suscripción</h3>
                <div className="grid grid-cols-2 gap-4">
                  <BenefitCard icon={UserCheck} title="Misma persona siempre" desc="Misma 'Resi' en cada visita para tu total tranquilidad." />
                  <BenefitCard icon={RefreshCw} title="Reprograma Gratis" desc="Cambia o cancela servicios sin cargos adicionales." />
                  <BenefitCard icon={Pause} title="Pausa cuando quieras" desc="Pausa tu plan o salta visitas sin costo cuando estés fuera." />
                  <BenefitCard icon={Calendar} title="Disponible Viernes" desc="Incluso los días de mayor demanda están a tu disposición." />
                </div>
              </section>

              {/* 5. Flexibility Section */}
              <section className="space-y-6 bg-slate-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-heading font-bold text-primary">Flexibilidad total. Sin cargos extra.</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-primary/10 rounded-md mt-1"><RefreshCw className="w-4 h-4 text-primary" /></div>
                      <div>
                        <p className="font-bold text-primary">Cambia de profesional</p>
                        <p className="text-sm text-slate-600">Cambia de 'Resi' en cualquier momento si no estás satisfecho.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-primary/10 rounded-md mt-1"><Pause className="w-4 h-4 text-primary" /></div>
                      <div>
                        <p className="font-bold text-primary">Pausa tu suscripción</p>
                        <p className="text-sm text-slate-600">Gratis cuando estés fuera de casa por viaje o vacaciones.</p>
                      </div>
                    </div>
                  </div>
                  <img src="/images/staff-maria.png" alt="App Preview" className="rounded-2xl shadow-lg border-4 border-white" />
                </div>
              </section>

              {/* 6. Subscription Policy (Scrollable Text) */}
              <section className="space-y-4 text-slate-600 text-sm">
                <h3 className="text-xl font-heading font-bold text-primary">Política de Suscripción</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-primary mb-1">Renovación y pagos</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Una vez suscrito, tu plan se renovará automáticamente cada mes a menos que se cancele.</li>
                      <li>El pago se deducirá mensualmente, excluyendo descuentos de primera reserva.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">Saltar o reprogramar gratis</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Si no necesitas el servicio, el servicio saltado se añadirá al final de tu periodo de suscripción.</li>
                      <li>Reprogramar no garantiza la misma persona para el servicio movido.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">Cancelación de suscripción</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cancela tu suscripción y obtén un reembolso total por los servicios no utilizados restantes.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 7. FAQs */}
              <section className="space-y-6">
                <h3 className="text-3xl font-heading font-bold text-primary">FAQs</h3>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <FAQItem value="item-1" q="¿Cuál es la nacionalidad del personal?" a="Nuestro personal es 100% local, cuidadosamente seleccionado, con calificación 4.8+ y más de 100 horas de entrenamiento." />
                  <FAQItem value="item-2" q="¿Cómo puedo reservar a mi profesional preferido?" a="El sistema asignará automáticamente a la persona que atendió tu primera visita para todos los servicios futuros sin cargos extra." />
                  <FAQItem value="item-3" q="¿Cómo puedo cambiar de profesional?" a="En caso de insatisfacción, puedes cambiar fácilmente desde tu cuenta en la sección 'Mi Plan'." />
                  <FAQItem value="item-4" q="¿Cuál es la cobertura del seguro?" a="Nuestros servicios están totalmente asegurados con una póliza de hasta S/15,000 por daños causados durante el servicio." />
                  <FAQItem value="item-5" q="¿Qué pasa si no estoy disponible algunos días?" a="Puedes reprogramar o cancelar fácilmente. Para viajes largos, puedes pausar tu plan y reservaremos a tu 'Resi' hasta tu regreso." />
                </Accordion>
              </section>

              {/* 8. Rating Distribution & Reviews */}
              <section className="space-y-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-heading font-bold text-primary flex items-center gap-2">
                    <Star className="w-8 h-8 fill-secondary text-secondary" />
                    4.85
                  </div>
                  <div className="flex-grow space-y-1.5">
                    <RatingBar stars={5} count="650K" percent={90} />
                    <RatingBar stars={4} count="20K" percent={5} />
                    <RatingBar stars={3} count="10K" percent={3} />
                    <RatingBar stars={2} count="4K" percent={1} />
                    <RatingBar stars={1} count="8K" percent={1} />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-heading font-bold text-primary">Todas las reseñas</h4>
                    <Button variant="link" className="text-primary font-bold">Filtrar</Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Más detalladas</Badge>
                    <Badge variant="outline" className="text-slate-500">En mi área</Badge>
                    <Badge variant="outline" className="text-slate-500">Usuarios frecuentes</Badge>
                  </div>

                  <div className="space-y-8 mt-8">
                    <ReviewItem name="Qadija" date="Dic 21, 2025" text="Cuando Delia entra en mi casa puedo relajarme porque es muy honesta en su trabajo. Es la mejor trabajadora que he conocido, eficiente y muy limpia." />
                    <ReviewItem name="Nouf" date="Dic 21, 2025" text="Rose y Sandra son las mejores! No hace falta repetir dos veces, recuerdan todas mis preferencias, haciendo el trabajo muy rápido y perfectamente." />
                    <ReviewItem name="Ameen Daniels" date="Dic 21, 2025" text="Lourdes es un absoluto encanto. Su limpieza es consistentemente profunda, organizada y profesional." />
                  </div>
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">S/320</span>
                  <span className="text-slate-400 line-through text-sm">S/400</span>
                </div>
                <p className="text-[10px] text-green-600 font-bold">4 servicios incluidos</p>
              </div>
              <Button size="lg" className="rounded-xl px-12 h-14 bg-primary font-bold text-lg shadow-xl shadow-primary/20" onClick={() => setIsOpen(false)}>
                Listo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

function PromiseItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
      <Check className="w-4 h-4 text-primary shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function TimelineStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 relative">
      <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0 z-10">{number}</div>
      <div className="space-y-1">
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function MaterialItem({ title, desc, image }: { title: string, desc: string, image: string }) {
  return (
    <div className="flex gap-6 items-center group">
      <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
        <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={title} />
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Icon className="w-5 h-5" /></div>
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-primary leading-tight">{title}</h4>
        <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FAQItem({ q, a, value }: { q: string, a: string, value: string }) {
  return (
    <AccordionItem value={value} className="border border-slate-100 rounded-2xl px-6 bg-white shadow-sm overflow-hidden">
      <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-4">{q}</AccordionTrigger>
      <AccordionContent className="text-slate-600 leading-relaxed pb-4">{a}</AccordionContent>
    </AccordionItem>
  );
}

function RatingBar({ stars, count, percent }: { stars: number, count: string, percent: number }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium">
      <div className="flex items-center gap-1 w-6 text-slate-400"><span>{stars}</span><Star className="w-3 h-3 fill-current" /></div>
      <div className="flex-grow h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-slate-900 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="w-10 text-slate-400 text-right">{count}</div>
    </div>
  );
}

function ReviewItem({ name, date, text }: { name: string, date: string, text: string }) {
  return (
    <div className="space-y-3 border-b border-slate-100 pb-8 last:border-0">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-xs text-slate-400">{date} • Por 1 profesional</p>
        </div>
        <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
          <span>5</span> <Star className="w-2.5 h-2.5 fill-current" />
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed italic">"{text}"</p>
    </div>
  );
}
