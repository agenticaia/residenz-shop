import { Layout } from "@/components/Layout";
import { UserCheck, Shield, Clock, Map } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Más que una App. Somos la infraestructura de confianza para tu hogar.
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Residenz nació para elevar el estándar de servicios del hogar, transformando la informalidad en una experiencia hotelera gestionada y garantizada.
          </p>
        </div>
      </section>

      {/* Hub Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3" 
                alt="Meeting" 
                className="rounded-2xl shadow-2xl"
              />
             </div>
             <div>
               <div className="inline-block p-2 bg-secondary/20 rounded-lg text-primary mb-4">
                 <Map className="w-6 h-6" />
               </div>
               <h2 className="text-3xl font-heading font-bold text-primary mb-4">El Modelo de Hubs Locales</h2>
               <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                 A diferencia de las plataformas que simplemente conectan freelancers dispersos, Residenz opera mediante <strong>Hubs Físicos</strong> en cada distrito. 
               </p>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 Esto nos permite tener supervisión directa, garantizar llegadas rápidas, reponer suministros inmediatamente y mantener un estándar de calidad consistente que un modelo de marketplace "a control remoto" no puede ofrecer.
               </p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-slate-700">
                   <div className="w-2 h-2 rounded-full bg-primary" />
                   Supervisión de campo diaria
                 </li>
                 <li className="flex items-center gap-3 text-slate-700">
                   <div className="w-2 h-2 rounded-full bg-primary" />
                   Almacenes locales de insumos profesionales
                 </li>
                 <li className="flex items-center gap-3 text-slate-700">
                   <div className="w-2 h-2 rounded-full bg-primary" />
                   Respuesta ante emergencias en &lt; 30 min
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">El Filtro del 5%</h2>
            <p className="text-slate-600">
              Es más difícil entrar a trabajar en Residenz que en muchas corporaciones. Nuestra obsesión por la seguridad comienza aquí.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <VettingStep 
              number="01"
              title="Antecedentes Rigurosos"
              desc="Verificación cruzada de antecedentes penales, judiciales y policiales. Revisión de historial crediticio y referencias laborales verificadas."
            />
             <VettingStep 
              number="02"
              title="Evaluación Psicológica"
              desc="Entrevistas presenciales con psicólogos laborales para evaluar honestidad, manejo de estrés y vocación de servicio."
            />
             <VettingStep 
              number="03"
              title="Academia Residenz"
              desc="2 semanas de capacitación intensiva en protocolos hoteleros, uso de químicos profesionales y etiqueta en el hogar."
            />
          </div>
        </div>
      </section>

       {/* Trust Banner */}
       <section className="py-20 bg-primary text-white text-center">
         <div className="container mx-auto px-4">
           <Shield className="w-16 h-16 mx-auto mb-6 text-secondary" />
           <h2 className="text-3xl font-heading font-bold mb-4">Respaldados por una Garantía Institucional</h2>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
             No somos intermediarios. Somos responsables. Cada visita está protegida por nuestra póliza de S/15,000.
           </p>
         </div>
       </section>

    </Layout>
  );
}

function VettingStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
      <div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-slate-200 transition-colors select-none">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
