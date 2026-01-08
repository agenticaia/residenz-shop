import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle2, 
  XCircle, 
  X,
  Check,
  ArrowRight, 
  Star, 
  FileText, 
  Video, 
  Coffee 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

import { ProblemItem, SolutionItem, StepItem, Testimonial } from "@/components/home/HomeComponents";
import { getAssetUrl } from "@/lib/utils";

export default function HomePage() {
  return (
    <Layout>
      {/* SECCIÓN 1: HERO */}
      <section className="relative min-h-[700px] flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetUrl("/images/hero-clean.png")}
            alt="Residenz Professional" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6 tracking-tight">
              TU HOGAR EN PILOTO AUTOMÁTICO, <br/>
              <span className="text-secondary italic font-light">CON ESTÁNDAR DE HOTEL 5 ESTRELLAS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Personal de confianza fijo, asegurado (S/15k cobertura) y entrenado para que nunca repitas una instrucción.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Link href="/detalle-servicio">
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 group">
                  QUIERO MI PRIMERA VISITA BLINDADA
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-secondary font-medium tracking-wide">
                Prueba de fuego por solo S/49
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Personal Verificado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Seguro Incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Sin Contratos</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL PROBLEMA VS. LA SOLUCIÓN */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 uppercase tracking-tighter italic">
              ¿Por qué es tan difícil encontrar ayuda confiable?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Card Izquierda: El Problema Actual */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-[3px] border-red-500 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <X className="w-4 h-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-500 uppercase">El Problema Actual</h3>
              </div>
              
              {/* Lista */}
              <ul className="space-y-4 flex-grow mb-8">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personal rota sin aviso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">"Enséñame dónde está todo" cada vez.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Si rompen algo, tú asumes el costo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supervisión constante y agotadora.</span>
                </li>
              </ul>
              
              {/* Botón */}
               <div className="mt-auto">
                 <Link href="/detalle-servicio">
                   <Button variant="outline" className="w-full h-12 px-6 border-2 border-[#6668F2] text-[#6668F2] rounded-xl font-semibold hover:bg-[#6668F2]/10 transition-colors">
                     Quiero mi primera visita blindada
                   </Button>
                 </Link>
               </div>
             </div>
 
             {/* Card Derecha: La Experiencia Residenz */}
             <div className="bg-white rounded-2xl p-8 shadow-md border-t-[3px] border-[#6668F2] flex flex-col h-full relative overflow-hidden">
               {/* Icono decorativo de fondo */}
               <div className="absolute top-6 right-6 w-24 h-24 opacity-[0.08]">
                 <Shield className="w-full h-full text-[#6668F2]" strokeWidth={2} />
               </div>
               
               {/* Header */}
               <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="w-6 h-6 rounded-full bg-[#6668F2]/10 flex items-center justify-center">
                   <Check className="w-4 h-4 text-[#6668F2]" />
                 </div>
                 <h3 className="text-lg font-bold text-[#6668F2] uppercase">La Experiencia Residenz</h3>
               </div>
               
               {/* Lista */}
               <ul className="space-y-4 flex-grow mb-8 relative z-10">
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-[#6668F2] flex-shrink-0 mt-0.5" />
                   <span className="text-gray-800 font-medium">Siempre la misma "Resi" asignada.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-[#6668F2] flex-shrink-0 mt-0.5" />
                   <span className="text-gray-800 font-medium">Manual Digital: Ya sabe tus preferencias.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-[#6668F2] flex-shrink-0 mt-0.5" />
                   <span className="text-gray-800 font-medium">Si fallamos, pagamos (hasta S/15k).</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-[#6668F2] flex-shrink-0 mt-0.5" />
                   <span className="text-gray-800 font-medium">Estándar Hotelero garantizado.</span>
                 </li>
               </ul>
               
               {/* Botón */}
               <div className="mt-auto relative z-10">
                 <Link href="/detalle-servicio">
                   <Button className="w-full h-12 px-6 bg-[#6668F2] text-white rounded-xl font-semibold hover:bg-[#5557D9] hover:shadow-lg transition-all">
                     Agendar con Garantía
                   </Button>
                 </Link>
               </div>
             </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative group max-w-2xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <Card className="relative overflow-hidden border-0 bg-white">
                <img src={getAssetUrl("/images/amenities.png")} alt="Detalle Hotelero" className="w-full h-80 object-cover" />
                <div className="p-6 text-center">
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">Experiencia Wow</span>
                  <p className="text-slate-600 italic mt-2">No es solo limpieza, es hospitalidad en cada rincón.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: EL ANCLA DE CONFIANZA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-16 tracking-tight">
            TU HOGAR EN LAS MEJORES MANOS, <br/>
            <span className="text-secondary">GARANTIZADO.</span>
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img src={getAssetUrl("/images/warranty.png")} alt="Garantía Residenz" className="w-full h-auto" />
            </motion.div>

            <div className="text-left space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white leading-snug">
                Incluimos un Certificado de Protección en cada visita.
              </h3>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Olvídate de la responsabilidad civil o laboral. Nosotros asumimos el riesgo por ti. Si tu Resi se accidenta o algo se daña, nuestra póliza responde en 24 horas.
              </p>
              <Link href="/detalle-servicio">
                <Button className="bg-secondary text-primary hover:bg-secondary/90 px-8 h-12 rounded-full font-bold uppercase tracking-wider text-xs">
                  Quiero mi primera visita blindada
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CÓMO FUNCIONA & PRUEBA SOCIAL */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4">TU HOGAR IMPECABLE EN 3 PASOS</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
            <StepItem 
              icon={FileText} 
              title="Pide tu prueba." 
              desc="Llena tus preferencias una sola vez en nuestro Manual Digital." 
            />
            <StepItem 
              icon={Video} 
              title="Conoce a tu Resi." 
              desc="Te enviamos su perfil y video antes de que llegue para tu tranquilidad." 
            />
            <StepItem 
              icon={Coffee} 
              title="Piloto Automático." 
              desc="Llega, limpia como hotel y se va. Tú solo disfrutas de tu espacio." 
            />
          </div>

          {/* Testimonios */}
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 p-8 text-primary/5">
              <Star className="w-48 h-48 fill-current" />
            </div>
            
            <h3 className="text-center text-2xl font-heading font-bold text-primary mb-12 uppercase tracking-widest">Lo que dicen nuestros socios</h3>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <Testimonial 
                name="Juan C." 
                location="Surco" 
                text="Lo que me convenció fue el seguro. Saber que si pasa algo, ellos responden, me da paz." 
                image={getAssetUrl("/images/staff-maria.png")}
              />
              <Testimonial 
                name="María S." 
                location="Miraflores" 
                text="Odiaba repetir instrucciones. Ahora llegan y saben exactamente qué hacer. Es magia." 
                image={getAssetUrl("/images/staff-maria.png")}
              />
            </div>
          </div>

          {/* Cierre */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight">
              ¿LISTO PARA DEJAR DE PREOCUPARTE POR TU HOGAR?
            </h2>
            <div className="space-y-4">
              <Link href="/detalle-servicio">
                <Button size="lg" className="h-20 px-12 text-2xl font-bold bg-primary hover:bg-primary/90 shadow-2xl w-full md:w-auto uppercase italic tracking-tighter">
                  AGENDAR MI PRUEBA CON GARANTÍA
                </Button>
              </Link>
              <p className="text-slate-500 font-medium">
                Garantía de satisfacción o devolvemos tu dinero
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

