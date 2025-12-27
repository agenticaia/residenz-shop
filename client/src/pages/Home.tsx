import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, MapPin, Calendar, CheckCircle2, Home, Sparkles, Building2, UserCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] lg:h-[80vh] flex flex-col justify-center bg-slate-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-clean.png" 
            alt="Residenz Professional" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
          {/* Hero Content */}
          <div className="text-white space-y-6 max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm mb-4 px-4 py-1.5 rounded-full uppercase tracking-wider text-xs font-semibold">
                Gestión Hotelera para el Hogar
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Gestión hotelera <br/> para tu hogar.
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mt-4 leading-relaxed font-light">
                Personal fijo, estándares de hotel y garantía de S/15,000. Olvídate de la rotación y la informalidad.
              </p>
            </motion.div>
          </div>

          {/* Service Selection Card (Urban Company Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mr-0"
          >
            <Card className="p-6 shadow-2xl border-0 bg-white/95 backdrop-blur-md rounded-2xl">
              <h3 className="text-lg font-heading font-semibold mb-4 text-primary">¿Qué necesitas hoy?</h3>
              
              <Tabs defaultValue="subscription" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-14 bg-slate-100 p-1 rounded-xl mb-6">
                  <TabsTrigger 
                    value="subscription" 
                    className="h-full rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <div className="text-left">
                        <div className="text-sm font-semibold">Suscripción</div>
                        <div className="text-[10px] opacity-70 font-normal">Personal Fijo</div>
                      </div>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="onetime" 
                    className="h-full rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <div className="text-left">
                        <div className="text-sm font-semibold">Visita Única</div>
                        <div className="text-[10px] opacity-70 font-normal">Prueba/Emergencia</div>
                      </div>
                    </div>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="subscription" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Ubicación</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input 
                        placeholder="Ingresa tu distrito (ej. Miraflores)" 
                        className="pl-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-base"
                      />
                    </div>
                  </div>
                  <Button size="lg" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Ver Planes y Disponibilidad
                  </Button>
                </TabsContent>

                <TabsContent value="onetime" className="space-y-4">
                   <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Ubicación</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input 
                        placeholder="Ingresa tu distrito (ej. San Isidro)" 
                        className="pl-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-base"
                      />
                    </div>
                  </div>
                  <Button size="lg" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Agendar Visita Única
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span>Garantía de S/15,000 incluida</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SERVICE ICONS NAV */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <ServiceIcon icon={Home} label="Hogar Completo" active />
            <ServiceIcon icon={Sparkles} label="Solo Baños/Cocina" />
            <ServiceIcon icon={Shield} label="Planes Blindados" />
            <ServiceIcon icon={Building2} label="Empresas/Airbnb" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>4.9/5 Calificación Promedio</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>S/15,000 Cobertura de Seguro</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-green-600" />
            <span>100% Personal Verificado</span>
          </div>
        </div>
      </section>

      {/* BENTO GRID - WHY RESIDENZ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">¿Por qué Residenz?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Elevamos el estándar del servicio doméstico a nivel hotelero. Seguridad, calidad y procesos estandarizados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Warranty */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl shadow-lg border border-slate-100 bg-slate-50">
              <div className="absolute top-0 right-0 p-8 z-10">
                <Shield className="w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-colors" />
              </div>
              <div className="p-8 relative z-20 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">Tu Escudo Legal y Financiero</h3>
                  <p className="text-slate-600 max-w-md">
                    A diferencia de apps informales, incluimos una póliza de responsabilidad civil de hasta S/15,000 por daños o accidentes. Tú descansas, nosotros respondemos.
                  </p>
                </div>
                <div className="mt-8">
                  <img src="/images/warranty.png" alt="Certificate" className="w-32 h-auto rounded shadow-sm object-cover" />
                </div>
              </div>
            </div>

            {/* Card 2: Hotel Standard */}
            <div className="md:col-span-1 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative group">
              <img src="/images/amenities.png" alt="Hotel Amenities" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-xl font-heading font-bold mb-2">El Toque Hotelero</h3>
                <p className="text-white/80 text-sm">
                  Aroma exclusivo, doblado de toallas perfecto y protocolos fijos. No es limpieza, es hospitalidad.
                </p>
              </div>
            </div>

            {/* Card 3: Staff Vetting */}
            <div className="md:col-span-1 bg-primary text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
              <div>
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-heading font-bold mb-2">Top 5% de Talento</h3>
                 <p className="text-white/80 text-sm">
                   Nuestro proceso de selección es brutalmente estricto. Antecedentes, psicológico y técnico. Solo las mejores entran.
                 </p>
              </div>
              <div className="mt-6 flex -space-x-3">
                 <img src="/images/staff-maria.png" className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Staff" />
                 <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary text-primary flex items-center justify-center text-xs font-bold">+50</div>
              </div>
            </div>

            {/* Card 4: Hubs */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Infraestructura Local</h3>
                <p className="text-slate-600 mb-4">
                  Operamos mediante Hubs Locales. Supervisión real en campo y respuesta rápida ante cualquier eventualidad.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                  Conocer más <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block w-1/3 h-32 bg-slate-100 rounded-lg relative overflow-hidden">
                {/* Abstract map representation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1d2939_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Flexibilidad para tu estilo de vida</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Elige entre visitas puntuales o la tranquilidad total de una suscripción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {/* One Time */}
            <Card className="p-8 border-slate-200 hover:border-slate-300 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">Visita Única</h3>
                <p className="text-slate-500 text-sm">Prueba el servicio sin compromisos</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">S/ 85</span>
                <span className="text-slate-500"> / visita</span>
              </div>
              <ul className="space-y-3 mb-8">
                <FeatureItem text="Limpieza estándar hotelera" />
                <FeatureItem text="Seguro básico incluido" />
                <FeatureItem text="Personal verificado" />
                <FeatureItem text="Insumos básicos" />
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                Agendar Ahora
              </Button>
            </Card>

            {/* Subscription */}
            <Card className="p-8 border-primary ring-1 ring-primary relative bg-white shadow-xl scale-105 z-10">
              <div className="absolute top-0 right-0 bg-secondary text-primary px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                Recomendado
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">Suscripción Mensual</h3>
                <p className="text-slate-500 text-sm">Piloto automático y personal fijo</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">S/ 320</span>
                <span className="text-slate-500"> / mes (4 visitas)</span>
              </div>
              <ul className="space-y-3 mb-8">
                <FeatureItem text="Misma Resi Fija siempre" checked />
                <FeatureItem text="Garantía Total (S/15k)" checked />
                <FeatureItem text="Manual Digital de Preferencias" checked />
                <FeatureItem text="Acceso a servicios Express" checked />
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Empezar Suscripción
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ServiceIcon({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
        active 
          ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" 
          : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-primary"
      )}>
        <Icon className="w-7 h-7" />
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors",
        active ? "text-primary font-bold" : "text-slate-500 group-hover:text-primary"
      )}>
        {label}
      </span>
    </div>
  );
}

function FeatureItem({ text, checked }: { text: string, checked?: boolean }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-600">
      <CheckCircle2 className={cn("w-5 h-5 shrink-0", checked ? "text-green-600" : "text-slate-400")} />
      <span>{text}</span>
    </li>
  );
}
