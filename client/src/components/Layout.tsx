import { Link, useLocation } from "wouter";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/detalle-servicio" },
    { label: "Sobre Nosotros", href: "/about" },
    { label: "Planes", href: "/plans" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary">Residenz</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary font-semibold" : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/detalle-servicio">
              <Button size="sm" className="font-bold bg-primary hover:bg-primary/90 rounded-full px-6" asChild>
                <span>Empezar</span>
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-base font-medium text-gray-700 p-2 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/detalle-servicio">
                <Button className="w-full bg-primary font-bold rounded-xl h-12" asChild><span>Empezar Ahora</span></Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span className="font-heading font-bold text-xl">Residenz</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Gestión hotelera para tu hogar. Personal fijo, estándares de hotel y garantía institucional.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4 text-secondary">Compañía</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/plans" className="hover:text-white transition-colors">Planes y Precios</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4 text-secondary">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantía de S/15k</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4 text-secondary">Atención</h4>
              <Link href="/detalle-servicio">
                <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full w-full" asChild>
                  <span>Agendar Prueba</span>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 Residenz Home Management S.A.C.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
