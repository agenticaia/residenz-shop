import { useState } from "react";
import { Link } from "wouter";
import { 
  ChevronDown, 
  Search, 
  ShoppingBag, 
  User, 
  ShieldCheck, 
  Sparkles, 
  X,
  Bath,
  Utensils,
  Home,
  Sofa,
  Shirt,
  Wind,
  Droplets,
  Bug
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { getAssetUrl } from "@/lib/utils";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Categories data
  const categories = [
    { id: "cleaning", title: "Limpieza y Control", icon: Sparkles, color: "#4F46E5" }, // Indigo
    { id: "spa", title: "Salón y Spa", icon: User, color: "#EC4899" }, // Pink
    { id: "plumbing", title: "Plomería", icon: Droplets, color: "#0EA5E9" }, // Sky
    { id: "ac", title: "Aire Acondicionado", icon: Wind, color: "#14B8A6" }, // Teal
    { id: "laundry", title: "Lavandería", icon: Shirt, color: "#8B5CF6" }, // Violet
    { id: "pest", title: "Control de Plagas", icon: Bug, color: "#F59E0B" }, // Amber
  ];

  // Modal sub-services data
  const subServices = [
    { id: "bathroom", title: "Baño", icon: Bath, color: "#8B5CF6" },
    { id: "kitchen", title: "Cocina", icon: Utensils, color: "#F97316" },
    { id: "full-house", title: "Casa Completa", icon: Home, color: "#10B981" },
    { id: "sofa", title: "Sofás", icon: Sofa, color: "#6366F1" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 h-[64px] bg-white border-b border-[#e0e0e0] flex items-center px-4 md:px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Logo & Location */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-black text-white p-1 rounded-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-bold text-[14px] text-black tracking-tight">RESIDENZ</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
              <div className="text-[14px] font-medium text-[#1a1a1a] group-hover:text-primary transition-colors truncate max-w-[200px]">
                16/16px Dadar, Bombay
              </div>
              <ChevronDown className="w-4 h-4 text-[#666666] group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]">
                <Search className="w-4 h-4" />
              </div>
              <Input 
                placeholder="Buscar 'Servicio de limpieza'" 
                className="w-full h-[48px] bg-[#f5f5f5] border-0 rounded-[24px] pl-12 pr-4 text-[14px] focus-visible:ring-1 focus-visible:ring-black/10 focus-visible:bg-white transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="text-[#666666] hover:text-black transition-colors relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
            </button>
            <button className="text-[#666666] hover:text-black transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[400px] w-full overflow-hidden bg-slate-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetUrl("/images/hero-clean.png")} 
            alt="Equipo de limpieza profesional" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 h-full relative z-10 flex flex-col justify-center">
          <div className="max-w-xl animate-in slide-in-from-left-10 duration-700 fade-in">
            <h1 className="text-white text-[32px] md:text-[40px] font-bold leading-tight mb-4 drop-shadow-lg">
              Servicios a domicilio <br/> a tu puerta
            </h1>
            <p className="text-white/90 text-[16px] md:text-[18px] font-medium max-w-md leading-relaxed mb-8">
              Expertos verificados, precios transparentes y garantía de satisfacción total en cada servicio.
            </p>
            <Link href="/detalle-servicio">
              <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 font-bold text-sm shadow-xl transition-transform hover:scale-105">
                Explorar Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="bg-[#f5f5f5] py-12 md:py-16 min-h-[calc(100vh-464px)]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-8 px-2">Categorías</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Dialog key={category.id} open={category.id === "cleaning" ? isModalOpen : false} onOpenChange={category.id === "cleaning" ? setIsModalOpen : undefined}>
                <DialogTrigger asChild>
                  <div 
                    className="bg-white rounded-[12px] p-8 flex flex-col items-center justify-center gap-4 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[180px] group border border-transparent hover:border-black/5"
                    onClick={() => category.id !== "cleaning" && console.log(`Clicked ${category.title}`)}
                  >
                    <div 
                      className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
                      style={{ backgroundColor: `${category.color}15` }} // 15 = approx 8% opacity hex
                    >
                      <category.icon 
                        className="w-[40px] h-[40px] transition-colors" 
                        style={{ color: category.color }} 
                      />
                    </div>
                    <span className="text-[16px] font-semibold text-[#1a1a1a] text-center group-hover:text-primary transition-colors">
                      {category.title}
                    </span>
                  </div>
                </DialogTrigger>

                {/* MODAL LIMPIEZA Y CONTROL - Only renders for cleaning category */}
                {category.id === "cleaning" && (
                  <DialogContent className="max-w-[600px] p-0 gap-0 bg-white rounded-[16px] overflow-hidden border-0 shadow-2xl max-h-[90vh] flex flex-col">
                    <div className="p-6 sm:p-8 overflow-y-auto">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between mb-8">
                        <DialogTitle className="text-[24px] font-bold text-[#1a1a1a]">Limpieza</DialogTitle>
                        {/* Close button is handled by DialogClose or default X, but we can customize if needed */}
                      </div>

                      {/* Modal Section */}
                      <div className="mb-2">
                        <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-6">Limpieza</h4>
                        
                        {/* Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                          {subServices.map((sub) => (
                            <Link href="/detalle-servicio" key={sub.id}>
                              <div className="bg-[#f5f5f5] rounded-[8px] p-4 flex flex-col items-center cursor-pointer hover:bg-[#e8e8e8] hover:shadow-md transition-all group w-[120px] h-[140px] justify-center">
                                <div className="w-[64px] h-[64px] mb-3 flex items-center justify-center">
                                  <sub.icon 
                                    className="w-[40px] h-[40px] text-gray-600 group-hover:scale-110 transition-transform duration-300" 
                                    style={{ color: sub.color }}
                                  />
                                </div>
                                <span className="text-[12px] font-semibold text-[#1a1a1a] text-center leading-[1.4]">
                                  {sub.title}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Modal Footer/Banner (Optional addition for visual flair) */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 text-center border-t border-primary/10 shrink-0">
                      <p className="text-xs font-medium text-primary">Garantía de satisfacción del 100% en todos los servicios</p>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
