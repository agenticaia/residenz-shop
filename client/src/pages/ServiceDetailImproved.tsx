import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ChevronRight,
  Minus,
  Plus,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
  Percent,
  Armchair,
  PaintBucket,
  Zap,
  ArrowUp,
  GraduationCap,
  Home,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { detailsData, serviceOptions, ServiceConfig, calculateServicePrice } from "@/data/serviceData";
import { CategorySidebar } from "@/components/service-detail/CategorySidebar";
import { getAssetUrl } from "@/lib/utils";

type FlowType = 'house' | 'room' | 'mini';

export default function ServiceDetailImproved() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showIncluded, setShowIncluded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<ServiceConfig>(serviceOptions[0]);
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
  const [flowType, setFlowType] = useState<FlowType>('house');
  const [wizardStep, setWizardStep] = useState(1);
  const [currentTab, setCurrentTab] = useState<string>("house-duplex");
  const [activeSidebar, setActiveSidebar] = useState<string>("department");
  const [selectedFrequency, setSelectedFrequency] = useState<string>("Una vez por semana");
  const [selectedDuration, setSelectedDuration] = useState<string>("4 semanas");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState<string>("furnished-apt");
  const currentService = detailsData[currentServiceId] || detailsData['default'];

  // Función para abrir el modal principal
  const handleAddClick = (type: FlowType) => {
    setFlowType(type);
    setWizardStep(1);
    setIsOpen(true);
    setShowIncluded(false); // Resetear vista interna
  };

  const handleAddToCart = () => {
    // Calculate total price for URL passing
    const weeks = parseInt(selectedDuration);
    const { totalPrice, totalServices } = calculateServicePrice(selectedSize.price, selectedFrequency, weeks);

    const params = new URLSearchParams({
      distrito: "lima-moderna", 
      categoria: activeSidebar,
      servicio: currentService.title,
      id: currentServiceId,
      tamano: selectedSize.size,
      frecuencia: selectedFrequency,
      duracion: selectedDuration,
      total: totalPrice.toString(),
      items: totalServices.toString()
    });

    setIsOpen(false);
    setLocation(`/checkout?${params.toString()}`);
  };

  const handleViewDetails = (id: string = "default") => {
    setCurrentServiceId(id);
    setShowDetailsModal(true);
  };

  const toggleIncludedView = () => {
    setShowIncluded(!showIncluded);
  };

  const handleNextStep = () => {
    setWizardStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setWizardStep(prev => Math.max(1, prev - 1));
  };

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        {/* Breadcrumbs - Minimalist */}
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
            <span className="hover:text-primary cursor-pointer transition-colors">Inicio</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-semibold">Limpieza Profunda</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-6 mb-8">
          <h1 className="text-4xl font-bold mb-3 tracking-tight text-slate-900">Servicios de Limpieza</h1>
          <div className="flex items-center gap-2">
            <div className="bg-green-600 text-white rounded px-2 py-0.5 flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-bold text-sm">4.82</span>
            </div>
            <span className="text-slate-500 text-sm font-medium tracking-wide border-b border-dashed border-slate-400">1.5 M reservas</span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-3 hidden lg:block sticky top-24">
                <CategorySidebar 
                  activeSidebar={activeSidebar} 
                  setActiveSidebar={setActiveSidebar} 
                  setCurrentTab={setCurrentTab} 
                />
            </div>

            {/* Main Content - Service List */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
               
               <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                <TabsList className="sticky top-16 z-40 bg-white w-full justify-start h-auto p-0 border-b border-slate-100 rounded-none gap-8">
                  <TabsTrigger 
                    value="house-duplex"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-slate-500 data-[state=active]:text-primary text-base transition-all hover:text-slate-700"
                  >
                    Dpto / Casa
                  </TabsTrigger>
                  <TabsTrigger 
                    value="room-area"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-slate-500 data-[state=active]:text-primary text-base transition-all hover:text-slate-700"
                  >
                    Por cuarto / Área
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mini-services"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-slate-500 data-[state=active]:text-primary text-base transition-all hover:text-slate-700"
                  >
                    Mini servicio
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="house-duplex" className="space-y-12 mt-8">
                    {/* Category Header */}
                    <h2 className="text-3xl font-bold tracking-tight">Departamento</h2>

                    {/* Service Item 1 */}
                    <ServiceCard
                      title="Departamento Amoblado"
                      rating={4.81}
                      reviews="301K"
                      price={180}
                      duration="3 hrs 45 mins"
                      description={[
                        "Limpieza y remoción de manchas de habitaciones, cocina, baño y balcón.",
                        "Fregado de pisos con máquina y desempolvado de paredes y techos."
                      ]}
                      imageUrl={getAssetUrl("/images/apartment-view.png")}
                      onAdd={() => handleAddClick('house')}
                      onViewDetails={() => handleViewDetails('furnished-apt')}
                    />

                    {/* Service Item 2 */}
                    <ServiceCard
                      title="Departamento Sin Amoblar"
                      rating={4.82}
                      reviews="139K"
                      price="Desde S/ 150"
                      duration="3 hrs"
                      description={[
                        "Limpieza profunda de pisos, baños y cocina vacía.",
                        "Ideal para mudanzas (entrada/salida)."
                      ]}
                      imageUrl={getAssetUrl("/images/apartment-view.png")}
                      onAdd={() => handleAddClick('house')}
                      onViewDetails={() => handleViewDetails('unfurnished-apt')}
                    />

                    {/* Category Header - Casa/Duplex */}
                    <h2 className="text-3xl font-bold tracking-tight pt-8 border-t border-slate-100">Casa/Duplex</h2>

                    {/* Service Item - Casa Amoblada */}
                    <ServiceCard
                      title="Casa Amoblada"
                      rating={4.81}
                      reviews="198K"
                      price="Desde S/ 250"
                      duration="5 hrs 20 mins"
                      description={[
                          "Limpieza de habitaciones, sala, baño, cocina, balcón, porche y terraza.",
                          "Fregado de pisos con máquina y desempolvado de paredes y techos."
                      ]}
                      imageUrl={getAssetUrl("/images/modern-house.png")}
                      onAdd={() => handleAddClick('house')}
                      onViewDetails={() => handleViewDetails('furnished-house')}
                    />

                    {/* Service Item - Casa Sin Amoblar */}
                    <ServiceCard
                      title="Casa Sin Amoblar"
                      rating={4.82}
                      reviews="89K"
                      price="Desde S/ 200"
                      duration="5 hrs"
                      description={[
                          "Limpieza profunda de pisos, baños y cocina vacía.",
                          "Ideal para mudanzas en casas grandes."
                      ]}
                      imageUrl={getAssetUrl("/images/modern-house.png")}
                      onAdd={() => handleAddClick('house')}
                      onViewDetails={() => handleViewDetails('unfurnished-house')}
                    />
                </TabsContent>

                <TabsContent value="room-area" className="space-y-12 mt-8">
                    {/* Category Header - Por cuarto */}
                    <h2 className="text-3xl font-bold tracking-tight">Por cuarto/área</h2>

                    {/* Service Item - Limpieza de Habitación */}
                    <ServiceCard
                      title="Limpieza de Habitación"
                      rating={4.81}
                      reviews="36K"
                      price={45}
                      duration="1 hr"
                      description={[
                          "Limpieza profunda de una habitación y armarios.",
                          "Excluye baño adjunto (se cobra aparte)."
                      ]}
                      imageUrl={getAssetUrl("/images/bedroom-clean.png")}
                      onAdd={() => handleAddClick('room')}
                      onViewDetails={() => handleViewDetails('room-cleaning')}
                    />
                     <ServiceCard
                      title="Limpieza de Cocina"
                      rating={4.75}
                      reviews="12K"
                      price={80}
                      duration="2 hrs"
                      description={[
                          "Limpieza profunda de gabinetes, electrodomésticos y superficies.",
                          "Desengrase completo."
                      ]}
                      imageUrl={getAssetUrl("/images/modern-house.png")}
                      onAdd={() => handleAddClick('room')}
                      onViewDetails={() => handleViewDetails('kitchen-cleaning')}
                    />
                    <ServiceCard
                      title="Limpieza de Sala"
                      rating={4.8}
                      reviews="25K"
                      price={50}
                      duration="1.5 hrs"
                      description={[
                          "Limpieza profunda de sala, muebles y alfombras superficialmente.",
                          "Aspirado y desinfección."
                      ]}
                      imageUrl={getAssetUrl("/images/sofa-cleaning.png")}
                      onAdd={() => handleAddClick('room')}
                      onViewDetails={() => handleViewDetails('living-cleaning')}
                    />
                    <ServiceCard
                      title="Limpieza de Baño"
                      rating={4.7}
                      reviews="18K"
                      price={40}
                      duration="1 hr"
                      description={[
                          "Limpieza y desinfección de inodoro, lavabo, ducha y espejos.",
                          "Eliminación de sarro y moho."
                      ]}
                      imageUrl={getAssetUrl("/images/bedroom-clean.png")}
                      onAdd={() => handleAddClick('room')}
                      onViewDetails={() => handleViewDetails('bath-cleaning')}
                    />
                    <ServiceCard
                      title="Limpieza de Balcón"
                      rating={4.6}
                      reviews="8K"
                      price={30}
                      duration="45 mins"
                      description={[
                          "Barrido y fregado de pisos.",
                          "Limpieza de barandas y vidrios accesibles."
                      ]}
                      imageUrl={getAssetUrl("/images/apartment-view.png")}
                      onAdd={() => handleAddClick('room')}
                      onViewDetails={() => handleViewDetails('balcony-cleaning')}
                    />
                </TabsContent>

                <TabsContent value="mini-services" className="space-y-12 mt-8">
                    <h2 className="text-3xl font-bold tracking-tight">Mini servicio</h2>

                    <ServiceCard
                      title="Limpieza de Electrodomésticos"
                      rating={4.82}
                      reviews="40K"
                      price={39}
                      duration="45 mins"
                      description={[
                          "Limpieza profunda de refrigeradora, microondas o estufa.",
                          "Desengrase completo (interior y exterior)."
                      ]}
                      imageUrl={getAssetUrl("/images/modern-house.png")}
                      onAdd={() => handleAddClick('mini')}
                      onViewDetails={() => handleViewDetails('appliances-cleaning')}
                    />
                    {/* Service Item - Limpieza de Sofá */}
                    <ServiceCard
                      title="Limpieza de Sofá"
                      rating={4.85}
                      reviews="56K"
                      price={60}
                      duration="1.5 hrs"
                      description={[
                          "Lavado en seco o vapor de sofás.",
                          "Eliminación de manchas y ácaros."
                      ]}
                      imageUrl={getAssetUrl("/images/sofa-cleaning.png")}
                      onAdd={() => handleAddClick('mini')}
                      onViewDetails={() => handleViewDetails('sofa-cleaning')}
                    />

                    {/* Service Item - Limpieza de Muebles */}
                    <ServiceCard
                      title="Limpieza de Muebles"
                      rating={4.79}
                      reviews="22K"
                      price={40}
                      duration="1 hr"
                      description={[
                          "Limpieza de sillas, mesas y otros muebles tapizados.",
                          "Protección de telas."
                      ]}
                      imageUrl={getAssetUrl("/images/sofa-cleaning.png")}
                      onAdd={() => handleAddClick('mini')}
                      onViewDetails={() => handleViewDetails('furniture-cleaning')}
                    />
                    <ServiceCard
                      title="Limpieza de Techos"
                      rating={4.84}
                      reviews="37K"
                      price={199}
                      duration="2 hrs"
                      description={[
                          "Eliminación de telarañas y polvo en techos altos.",
                          "Limpieza de luminarias y ventiladores de techo."
                      ]}
                      imageUrl={getAssetUrl("/images/hero-clean.png")}
                      onAdd={() => handleAddClick('mini')}
                      onViewDetails={() => handleViewDetails('ceiling-cleaning')}
                    />
                </TabsContent>
              </Tabs>
              </div>
            </div>

            {/* Right Sidebar - Cart/Summary */}
            <div className="lg:col-span-3 hidden lg:block">
                 <div className="sticky top-24 space-y-6">
                    {/* Empty Cart State */}
                    {cart.length === 0 ? (
                        <div className="text-center py-12 border rounded-2xl border-slate-100 bg-white shadow-sm">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛒</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        <div className="p-6 border rounded-2xl border-slate-100 bg-white shadow-lg animate-in slide-in-from-right-5">
                            <h3 className="font-bold text-lg mb-4">Resumen</h3>
                             <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-slate-600">1x Depto. Amoblado</span>
                                <span className="font-bold text-sm">S/ 180</span>
                             </div>
                             <Button className="w-full bg-primary font-bold">Ir a pagar</Button>
                        </div>
                    )}

                    {/* Offers */}
                     <div className="p-4 border rounded-2xl border-slate-100 bg-white shadow-sm flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <Percent className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">Ahorra hasta S/50</p>
                            <p className="text-[10px] text-slate-500">Con tarjeta de crédito</p>
                        </div>
                     </div>

                     {/* Promise */}
                     <div className="p-6 border rounded-2xl border-slate-100 bg-white shadow-sm space-y-4">
                        <h4 className="font-bold text-sm text-slate-900">La Promesa Residenz</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-xs text-slate-600">
                                <Check className="w-4 h-4 text-slate-900" />
                                Profesionales Verificados
                            </li>
                            <li className="flex items-center gap-2 text-xs text-slate-600">
                                <Check className="w-4 h-4 text-slate-900" />
                                Productos Seguros
                            </li>
                             <li className="flex items-center gap-2 text-xs text-slate-600">
                                <Check className="w-4 h-4 text-slate-900" />
                                Garantía de Satisfacción
                            </li>
                        </ul>
                     </div>
                 </div>
            </div>

          </div>
        </div>

        {/* Configuration Modal */}
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) setShowIncluded(false); // Reset on close
            setIsOpen(open);
        }}>
          <DialogContent className="w-full sm:max-w-md p-0 overflow-hidden rounded-t-3xl sm:rounded-3xl gap-0 border-0 shadow-2xl fixed bottom-0 sm:bottom-auto translate-x-0 translate-y-0 top-auto left-0 right-0 sm:top-1/2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:-translate-y-1/2 max-h-[85vh] h-auto sm:h-auto">
            {showIncluded ? (
              // "What's included" View
              <div className="bg-white animate-in slide-in-from-right-10 duration-300">
                 <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                    <div>
                         <h2 className="text-xl font-bold text-slate-900">¿Qué incluye?</h2>
                         <p className="text-sm text-slate-500">Además de sala y cocina</p>
                    </div>
                     <Button variant="ghost" size="icon" onClick={toggleIncludedView} className="rounded-full hover:bg-slate-100">
                        <X className="w-5 h-5" />
                    </Button>
                 </div>
                 
                 <div className="p-6 max-h-[60vh] overflow-y-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 gap-4 mb-6 text-xs font-bold text-slate-900 text-center">
                         <div className="text-left pl-2">Tamaño</div>
                         <div>Habitaciones</div>
                         <div>Baños</div>
                         <div>Balcones</div>
                    </div>

                    {/* Data Rows */}
                    <div className="space-y-6">
                        {serviceOptions.map((opt, idx) => (
                             <div key={idx} className={cn(
                                 "grid grid-cols-4 gap-4 items-center text-center py-3 border-b border-slate-50 last:border-0",
                                 selectedSize.size === opt.size ? "bg-slate-50 rounded-lg -mx-2 px-2" : ""
                             )}>
                                 <div className="text-left text-sm font-bold text-slate-900">{opt.size.split(' ')[0]} Hab</div>
                                 <div className="text-sm text-slate-600">{opt.included[0].quantity}</div>
                                 <div className="text-sm text-slate-600">{opt.included[1].quantity}</div>
                                 <div className="text-sm text-slate-600">{opt.included[2].quantity}</div>
                             </div>
                        ))}
                    </div>
                 </div>
                  <div className="p-4 border-t border-slate-100 bg-slate-50">
                        <Button onClick={toggleIncludedView} variant="outline" className="w-full font-bold rounded-xl h-12 border-slate-300 hover:bg-white hover:text-primary">
                            Volver
                        </Button>
                  </div>
              </div>
            ) : (
                // Wizard Flow
                <div className="bg-white">
                    {/* Header with Back Button logic */}
                    <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                        {wizardStep > 1 && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 -ml-2" onClick={handlePrevStep}>
                                <ArrowRight className="w-4 h-4 rotate-180" />
                            </Button>
                        )}
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                {flowType === 'house' ? 'Configura tu servicio' : 'Selecciona áreas'}
                            </h2>
                            <p className="text-xs text-slate-500">Paso {wizardStep} de {flowType === 'house' ? 4 : 2}</p>
                        </div>
                    </div>

                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                        {flowType === 'house' && (
                            <>
                                {wizardStep === 1 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-bold">Selecciona el tamaño</h3>
                                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
                                                {serviceOptions.map((option) => (
                                                    <button
                                                        key={option.size}
                                                        onClick={() => setSelectedSize(option)}
                                                        className={cn(
                                                            "flex-shrink-0 min-w-[120px] p-3 rounded-xl border-2 text-left transition-all",
                                                            selectedSize.size === option.size 
                                                                ? "border-primary bg-slate-50 shadow-sm ring-1 ring-primary/10" 
                                                                : "border-slate-100 hover:border-slate-200"
                                                        )}
                                                    >
                                                        <div className={cn("font-bold text-xs mb-1", selectedSize.size === option.size ? "text-primary" : "text-slate-900")}>{option.size}</div>
                                                        <div className="text-xs text-slate-500">S/ {option.price}</div>
                                                    </button>
                                                ))}
                                            </div>
                                             <button onClick={toggleIncludedView} className="text-sm font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-primary">
                                                ¿Qué incluye mi servicio?
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {wizardStep === 2 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Seleccione días por semana</h3>
                                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
                                            {[
                                                { label: "Una vez por semana", discount: 1 },
                                                { label: "2 veces por semana", discount: 0.95 },
                                                { label: "3 veces por semana", discount: 0.90 },
                                                { label: "6 veces a la semana", discount: 0.85 }
                                            ].map((option) => (
                                                <button
                                                    key={option.label}
                                                    onClick={() => setSelectedFrequency(option.label)}
                                                    className={cn(
                                                        "flex-shrink-0 min-w-[140px] p-3 rounded-xl border-2 text-left transition-all",
                                                        selectedFrequency === option.label
                                                            ? "border-primary bg-slate-50 shadow-sm ring-1 ring-primary/10"
                                                            : "border-slate-100 hover:border-slate-200"
                                                    )}
                                                >
                                                    <div className={cn("font-bold text-sm mb-2", selectedFrequency === option.label ? "text-primary" : "text-slate-900")}>
                                                        {option.label}
                                                    </div>
                                                    <div className="text-xs text-slate-500">
                                                        S/ {Math.round(selectedSize.price * option.discount)}/servicio
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {wizardStep === 3 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Seleccione la duración del plan</h3>
                                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
                                            {["4 semanas", "12 semanas", "24 semanas"].map((dur) => {
                                                const weeks = parseInt(dur);
                                                const freqMap: Record<string, { count: number, discount: number }> = {
                                                    "Una vez por semana": { count: 1, discount: 1 },
                                                    "2 veces por semana": { count: 2, discount: 0.95 },
                                                    "3 veces por semana": { count: 3, discount: 0.90 },
                                                    "6 veces a la semana": { count: 6, discount: 0.85 }
                                                };
                                                const freqData = freqMap[selectedFrequency] || freqMap["Una vez por semana"];
                                                
                                                // Calculate price per service with 20% plan discount
                                                const pricePerService = Math.round(selectedSize.price * freqData.discount * 0.8);
                                                const totalPrice = pricePerService * weeks * freqData.count;

                                                return (
                                                    <button
                                                        key={dur}
                                                        onClick={() => setSelectedDuration(dur)}
                                                        className={cn(
                                                            "flex-shrink-0 min-w-[140px] p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between",
                                                            selectedDuration === dur
                                                                ? "border-primary bg-slate-50 shadow-sm ring-1 ring-primary/10"
                                                                : "border-slate-100 hover:border-slate-200"
                                                        )}
                                                    >
                                                        <div>
                                                            <div className={cn("font-bold text-slate-900 text-lg mb-2", selectedDuration === dur ? "text-primary" : "")}>{dur}</div>
                                                            <div className="font-bold text-slate-900 text-base mb-1">S/ {totalPrice.toLocaleString()}</div>
                                                            <div className="text-xs text-slate-500 mb-3">(S/ {pricePerService}/servicio)</div>
                                                        </div>
                                                        <div className="text-xs text-green-600 font-bold">20% de descuento</div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                {wizardStep === 4 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Resumen</h3>
                                        <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">Servicio</span>
                                                <span className="font-bold">Casa Amoblada</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">Tamaño</span>
                                                <span className="font-bold">{selectedSize.size}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">Frecuencia</span>
                                                <span className="font-bold">{selectedFrequency}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-600">Duración</span>
                                                <span className="font-bold">{selectedDuration}</span>
                                            </div>
                                            <div className="border-t border-slate-200 pt-2 flex justify-between text-base font-bold">
                                                <span>Total Estimado</span>
                                                <span>S/ {(() => {
                                                    const weeks = parseInt(selectedDuration);
                                                    const freqMap: Record<string, { count: number, discount: number }> = {
                                                        "Una vez por semana": { count: 1, discount: 1 },
                                                        "2 veces por semana": { count: 2, discount: 0.95 },
                                                        "3 veces por semana": { count: 3, discount: 0.90 },
                                                        "6 veces a la semana": { count: 6, discount: 0.85 }
                                                    };
                                                    const freqData = freqMap[selectedFrequency] || freqMap["Una vez por semana"];
                                                    const pricePerService = Math.round(selectedSize.price * freqData.discount * 0.8);
                                                    return (pricePerService * weeks * freqData.count).toLocaleString();
                                                })()}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {flowType === 'room' && (
                            <>
                                {wizardStep === 1 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Selecciona áreas</h3>
                                        <div className="space-y-4">
                                            {["Habitación", "Baño", "Cocina", "Sala"].map((area) => (
                                                <div key={area} className="flex items-center justify-between p-3 border rounded-xl">
                                                    <span className="font-medium text-slate-900">{area}</span>
                                                    <div className="flex items-center gap-3">
                                                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full"><Minus className="w-3 h-3" /></Button>
                                                        <span className="w-4 text-center font-bold">0</span>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full"><Plus className="w-3 h-3" /></Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {wizardStep === 2 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Resumen de áreas</h3>
                                        <div className="p-4 bg-slate-50 rounded-xl text-center text-slate-500">
                                            Selecciona áreas para ver el resumen
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {flowType === 'mini' && (
                            <>
                                {wizardStep === 1 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Selecciona items</h3>
                                        <div className="space-y-4">
                                            {["Electrodomésticos", "Sofá", "Muebles", "Techos"].map((item) => (
                                                <div key={item} className="flex items-center justify-between p-3 border rounded-xl">
                                                    <span className="font-medium text-slate-900">{item}</span>
                                                    <div className="flex items-center gap-3">
                                                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full"><Minus className="w-3 h-3" /></Button>
                                                        <span className="w-4 text-center font-bold">0</span>
                                                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full"><Plus className="w-3 h-3" /></Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {wizardStep === 2 && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                                        <h3 className="text-lg font-bold">Resumen de items</h3>
                                        <div className="p-4 bg-slate-50 rounded-xl text-center text-slate-500">
                                            Selecciona items para ver el resumen
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-slate-100 bg-white shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
                        <Button 
                            onClick={((flowType === 'house' && wizardStep < 4) || ((flowType === 'room' || flowType === 'mini') && wizardStep < 2)) ? handleNextStep : handleAddToCart}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl text-base shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                        >
                            {((flowType === 'house' && wizardStep < 4) || ((flowType === 'room' || flowType === 'mini') && wizardStep < 2)) ? 'Siguiente' : 'Añadir al Carrito'}
                        </Button>
                    </div>
                </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Details Modal */}
        <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
          <DialogContent className="w-full sm:max-w-md p-0 overflow-hidden rounded-t-3xl sm:rounded-3xl gap-0 border-0 shadow-2xl max-h-[90vh] h-auto sm:h-[85vh] flex flex-col fixed bottom-0 sm:bottom-auto translate-x-0 translate-y-0 top-auto left-0 right-0 sm:top-1/2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:-translate-y-1/2">
            <div className="bg-white h-full flex flex-col min-h-0">
                 <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10 shrink-0">
                    <div>
                         <DialogTitle className="text-xl font-bold text-slate-900 mb-1">
                            {currentService.title}
                         </DialogTitle>
                         <p className="text-sm text-slate-500 font-medium">
                            A partir de S/ {currentService.price} • {currentService.duration} aprox.
                         </p>
                    </div>
                     <Button variant="ghost" size="icon" onClick={() => setShowDetailsModal(false)} className="rounded-full hover:bg-slate-100 -mt-2 -mr-2">
                        <X className="w-5 h-5" />
                    </Button>
                 </div>
                 
                 <div className="flex-1 overflow-y-auto p-6 space-y-10">
                    {/* Section 1: What is included */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-900">¿Qué incluye?</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                            {currentService.included.map((item, i) => (
                                <div key={i} className="flex flex-col gap-3 group">
                                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative shadow-sm group-hover:shadow-md transition-all">
                                        <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2 bg-black/40 p-1 rounded-full">
                                             <Check className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 leading-tight text-center px-1">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: See the difference yourself */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Mira la diferencia</h3>
                        <div className="space-y-4">
                            {currentService.difference.map((item, i) => (
                                <div key={i} className="relative h-48 rounded-2xl overflow-hidden shadow-sm">
                                    <div className="absolute inset-0 flex">
                                        <div className="w-1/2 h-full relative border-r-2 border-white">
                                            <img src={item.before} className="w-full h-full object-cover grayscale brightness-90" alt="Antes" />
                                            <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm uppercase tracking-wider">Before</span>
                                        </div>
                                        <div className="w-1/2 h-full relative">
                                            <img src={item.after} className="w-full h-full object-cover" alt="Después" />
                                            <span className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm uppercase tracking-wider">After</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: What is excluded */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">¿Qué está excluido?</h3>
                        <div className="space-y-3">
                            {currentService.excluded.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-600 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: What we will need from you */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">Lo que necesitaremos de ti</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "Cubeta y agua", icon: PaintBucket },
                                { title: "Toma de corriente", icon: Zap },
                                { title: "Escalera o Taburete", icon: ArrowUp }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 rounded-2xl p-4 flex flex-col items-center text-center gap-3 h-full justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 leading-tight">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 5: Top cleaners */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">Mejores limpiadores</h3>
                        <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
                            <div className="flex-1 space-y-4 w-full">
                                {[
                                    { text: "Entrenados por más de 100 horas", icon: GraduationCap },
                                    { text: "Calificación promedio de 4.8+", icon: Star },
                                    { text: "Más de 100K hogares atendidos", icon: Home },
                                    { text: "Verificado por Residenz", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-700">
                                        <item.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                        <span className="font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 relative">
                                <img src={getAssetUrl("/images/staff-maria.png")} alt="Limpiador profesional" className="w-full h-full object-cover rounded-full border-4 border-slate-50 shadow-lg" />
                                <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold text-slate-900">Top</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 6: Damage protection */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-slate-900">Protección contra daños</h3>
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                        </div>
                        <p className="text-slate-600 text-sm">
                            Cobertura de hasta S/ 10,000 si ocurre algún daño durante el trabajo. Tu tranquilidad es nuestra prioridad.
                        </p>
                        
                        <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-4xl font-bold text-slate-900">4.81</span>
                                <div className="flex flex-col mb-1">
                                    <div className="flex text-yellow-400 text-sm">
                                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-xs text-slate-500">301K reseñas</span>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                {[
                                    { stars: 5, count: "279K", percent: "90%" },
                                    { stars: 4, count: "10K", percent: "5%" },
                                    { stars: 3, count: "5K", percent: "2%" },
                                    { stars: 2, count: "3K", percent: "1%" },
                                    { stars: 1, count: "5K", percent: "2%" }
                                ].map((rating) => (
                                    <div key={rating.stars} className="flex items-center gap-3 text-xs">
                                        <div className="flex items-center gap-1 w-8 shrink-0">
                                            <span className="font-bold">{rating.stars}</span>
                                            <Star className="w-3 h-3 text-slate-900 fill-slate-900" />
                                        </div>
                                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-900 rounded-full" style={{ width: rating.percent }}></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500 shrink-0">{rating.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </Layout>
  );
}
