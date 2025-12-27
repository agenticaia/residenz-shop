import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, ArrowRight, Sparkles, Home, Building2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function ServicesPage() {
  const services = [
    {
      id: "monthly",
      title: "Limpieza Mensual",
      desc: "Nuestro servicio estrella. Personal fijo, manual de preferencias y garantía total.",
      price: "S/320",
      rating: "4.85",
      icon: CalendarIcon,
      tag: "Más Popular"
    },
    {
      id: "one-time",
      title: "Visita Única",
      desc: "Limpieza profunda para ocasiones especiales o emergencias puntuales.",
      price: "S/85",
      rating: "4.70",
      icon: Sparkles
    },
    {
      id: "airbnb",
      title: "Gestión Airbnb",
      desc: "Protocolos de alta rotación, lavandería y reposición de amenities.",
      price: "Cotizar",
      rating: "4.90",
      icon: Building2
    },
    {
      id: "express",
      title: "Servicio Express",
      desc: "Retoques rápidos de 30-60 minutos para mantener el orden diario.",
      price: "S/45",
      rating: "4.80",
      icon: Clock
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">Nuestros Servicios</h1>
            <p className="text-lg text-slate-600">
              Estándares de hotelería de lujo aplicados a cada rincón de tu hogar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="p-6 flex flex-col h-full border-slate-100 hover:shadow-xl transition-all group rounded-2xl">
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  {service.tag && (
                    <Badge className="absolute top-0 right-0 bg-secondary text-primary border-0 font-bold uppercase text-[10px]">
                      {service.tag}
                    </Badge>
                  )}
                </div>
                
                <div className="flex-grow space-y-2">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Star className="w-3 h-3 fill-secondary text-secondary" />
                    <span>{service.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    {service.price !== "Cotizar" && <span className="text-xs text-slate-400">/ inicio</span>}
                  </div>
                  <Link href="/service-detail">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl font-bold">
                      Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="mt-20 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Seguro de Protección S/15,000</h3>
                <p className="text-slate-500 text-sm">Incluido automáticamente en cada uno de nuestros servicios.</p>
              </div>
            </div>
            <Link href="/service-detail">
              <Button size="lg" className="h-14 px-8 bg-primary rounded-full font-bold">
                Quiero mi primera visita blindada
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
