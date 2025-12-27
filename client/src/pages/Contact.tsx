import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-[calc(100vh-64px)] py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-heading font-bold text-primary mb-4">Hablemos</h1>
                <p className="text-lg text-slate-600">
                  ¿Tienes dudas sobre nuestra garantía o el modelo de suscripción? Nuestro equipo de Hub Managers está listo para ayudarte.
                </p>
              </div>

              <div className="space-y-6">
                <ContactCard 
                  icon={MessageCircle} 
                  title="WhatsApp Soporte" 
                  content="Respuesta en < 5 minutos" 
                  action="Chatear Ahora"
                  active
                />
                 <ContactCard 
                  icon={Mail} 
                  title="Correo Electrónico" 
                  content="hola@residenz.pe" 
                  action="Copiar"
                />
                 <ContactCard 
                  icon={MapPin} 
                  title="Oficina Central" 
                  content="Av. Pardo y Aliaga 699, San Isidro" 
                  action="Ver Mapa"
                />
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-primary mb-2">¿Eres un profesional de la limpieza?</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Únete al 5% de talento seleccionado. Ofrecemos planilla, beneficios y capacitación constante.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">Aplicar como Staff &rarr;</Button>
              </div>
            </div>

            {/* Form */}
            <Card className="p-8 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Envíanos un mensaje</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Apellido</label>
                    <Input placeholder="Tu apellido" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input type="email" placeholder="nombre@ejemplo.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Teléfono</label>
                  <Input type="tel" placeholder="+51 999 999 999" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Mensaje</label>
                  <Textarea placeholder="¿En qué podemos ayudarte?" className="h-32" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
}

function ContactCard({ icon: Icon, title, content, action, active }: { icon: any, title: string, content: string, action: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex items-center p-4 rounded-xl border transition-all cursor-pointer",
      active 
        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
        : "bg-white border-slate-200 text-slate-700 hover:border-primary/50"
    )}>
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center mr-4",
        active ? "bg-white/20" : "bg-slate-100 text-primary"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-sm mb-0.5">{title}</h3>
        <p className={cn("text-sm", active ? "text-white/80" : "text-slate-500")}>{content}</p>
      </div>
      <Button variant="ghost" size="sm" className={cn(
        "ml-2 text-xs font-semibold", 
        active ? "text-white hover:bg-white/20 hover:text-white" : "text-primary"
      )}>
        {action}
      </Button>
    </div>
  );
}
