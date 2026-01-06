import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle2, 
  XCircle, 
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
              <Link href="/plans">
                <Button size="lg" className="btn-residenz-primary group">
                  QUIERO MI PRIMERA VISITA BLINDADA
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="mt-[24px] mb-[16px] text-[#00BDD6] font-semibold tracking-wide">
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

          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
            {/* Columna Izquierda: Lo Normal */}
            <div className="p-10 lg:p-16 bg-slate-50 border-r border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-slate-400 mb-10 flex items-center gap-3">
                <XCircle className="w-8 h-8" />
                EL PROBLEMA ACTUAL
              </h3>
              <ul className="space-y-8">
                <ProblemItem text="Personal rota sin aviso." />
                <ProblemItem text='"Enséñame dónde está todo" cada vez.' />
                <ProblemItem text="Si rompen algo, tú asumes el costo." />
                <ProblemItem text="Supervisión constante y agotadora" />
              </ul>
              <div className="mt-12">
                <Link href="/plans">
                  <Button variant="outline" className="w-full h-14 border-primary text-primary hover:bg-primary/5 font-bold">
                    Quiero mi primera visita blindada
                  </Button>
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Residenz */}
            <div className="p-10 lg:p-16 bg-primary text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-10 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8" />
                LA EXPERIENCIA RESIDENZ
              </h3>
              <ul className="space-y-8">
                <SolutionItem text='Siempre la misma "Resi" asignada.' />
                <SolutionItem text="Manual Digital: Ya sabe tus preferencias." />
                <SolutionItem text="Si fallamos, pagamos (hasta S/15k)." />
                <SolutionItem text="Estándar Hotelero garantizado." />
              </ul>
              <div className="mt-12">
                <Link href="/plans">
                  <Button className="w-full h-14 bg-secondary text-primary hover:bg-secondary/90 font-bold">
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
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">El Detalle "Wow"</span>
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
              <Link href="/plans">
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
              <Link href="/plans">
                <Button size="lg" className="h-20 px-12 text-2xl font-bold bg-primary hover:bg-primary/90 shadow-2xl rounded-2xl w-full md:w-auto uppercase italic tracking-tighter">
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
      
      <a
        href="https://wa.me/?text=Hola%20Residenz%20soporte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a soporte por WhatsApp"
        className="whatsapp-fab"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "var(--color-accent)" }}
        >
          <path d="M19.11 17.42c-.29-.16-1.67-.82-1.93-.91-.26-.1-.45-.16-.64.13-.19.29-.74.91-.91 1.09-.17.19-.34.21-.63.08-.29-.13-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.12-.59.12-.12.29-.32.43-.48.15-.16.19-.27.29-.46.1-.19.05-.35-.03-.48-.08-.13-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.35-.01-.54-.01-.19 0-.48.07-.74.35-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.01 4.22.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.56-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.2-.55-.36zM16 3C9.37 3 4 8.37 4 15c0 2.38.75 4.59 2.03 6.41L4 29l7.71-2c1.74.96 3.73 1.52 5.86 1.52 6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.67c-1.96 0-3.78-.58-5.3-1.58l-.38-.25-4.57 1.18 1.22-4.45-.26-.41c-1.19-1.72-1.9-3.79-1.9-6.02 0-5.86 4.76-10.62 10.62-10.62S26.62 9.14 26.62 15s-4.76 10.67-10.62 10.67z"/>
        </svg>
      </a>
    </Layout>
  );
}
