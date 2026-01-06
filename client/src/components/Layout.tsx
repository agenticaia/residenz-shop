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
    { label: "Sobre Nosotros", href: "/about" },
    { label: "Planes", href: "/plans" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary truncate">Residenz</span>
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
            <Link href="/plans">
              <Button size="sm" className="font-bold bg-primary hover:bg-primary/90 rounded-[var(--button-radius)] px-6" asChild>
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
              <Link href="/plans">
                <Button className="w-full bg-primary font-bold rounded-[var(--button-radius)] h-12" asChild><span>Empezar Ahora</span></Button>
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

            {location === "/plans" && (
              <div>
                <h4 className="font-heading font-semibold mb-4 text-secondary">Contáctanos</h4>
                <a
                  href="https://wa.me/?text=Hola%20Residenz%20soporte"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar a soporte por WhatsApp"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm hover:shadow-lg transition-all"
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
              </div>
            )}

            {location !== "/plans" && (
              <div>
                <h4 className="font-heading font-semibold mb-4 text-secondary">Atención</h4>
                <Link href="/plans">
                  <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-[var(--button-radius)] w-full" asChild>
                    <span>Agendar Prueba</span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 Residenz Home Management S.A.C.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
