import { getAssetUrl } from "@/lib/utils";

export interface IncludedItem {
  name: string;
  quantity: number;
}

export interface ServiceConfig {
  size: string;
  price: number;
  duration: string;
  included: IncludedItem[];
}

export const serviceOptions: ServiceConfig[] = [
  {
    size: "1 Habitación",
    price: 3499,
    duration: "3 hrs",
    included: [
      { name: "Habitaciones", quantity: 1 },
      { name: "Baños", quantity: 1 },
      { name: "Balcones", quantity: 1 },
    ],
  },
  {
    size: "2 Habitaciones",
    price: 3899,
    duration: "4 hrs",
    included: [
      { name: "Habitaciones", quantity: 2 },
      { name: "Baños", quantity: 2 },
      { name: "Balcones", quantity: 2 },
    ],
  },
  {
    size: "3 Habitaciones",
    price: 4799,
    duration: "5 hrs",
    included: [
      { name: "Habitaciones", quantity: 3 },
      { name: "Baños", quantity: 3 },
      { name: "Balcones", quantity: 3 },
    ],
  },
  {
    size: "4 Habitaciones",
    price: 5699,
    duration: "6 hrs",
    included: [
      { name: "Habitaciones", quantity: 4 },
      { name: "Baños", quantity: 4 },
      { name: "Balcones", quantity: 4 },
    ],
  },
];

export const freqMap: Record<string, { count: number, discount: number }> = {
  "Una vez por semana": { count: 1, discount: 1 },
  "2 veces por semana": { count: 2, discount: 0.95 },
  "3 veces por semana": { count: 3, discount: 0.90 },
  "6 veces a la semana": { count: 6, discount: 0.85 }
};

export function calculateServicePrice(
  basePrice: number, 
  frequency: string, 
  durationWeeks: number
): { pricePerService: number, totalPrice: number, totalServices: number } {
  const freqData = freqMap[frequency] || freqMap["Una vez por semana"];
  const pricePerService = Math.round(basePrice * freqData.discount * 0.8); // 20% base discount applied in logic? Preserving original logic.
  const totalServices = durationWeeks * freqData.count;
  const totalPrice = pricePerService * totalServices;
  
  return { pricePerService, totalPrice, totalServices };
}

export const detailsData: Record<string, {
  title: string;
  price: string | number;
  duration: string;
  included: { title: string; icon: string }[];
  difference: { before: string; after: string }[];
  excluded: string[];
}> = {
  'furnished-apt': {
    title: "Departamento Amueblado",
    price: 180,
    duration: "3 hrs 45 mins",
    included: [
        { title: "Lavado de pisos de habitaciones", icon: getAssetUrl("/images/bedroom-clean.png") },
        { title: "Limpieza exterior de gabinetes y muebles", icon: getAssetUrl("/images/sofa-cleaning.png") },
        { title: "Limpieza de techos y ventiladores", icon: getAssetUrl("/images/hero-clean.png") },
        { title: "Aspirado de sofá y colchones", icon: getAssetUrl("/images/sofa-cleaning.png") },
        { title: "Puertas, ventanas y espejos", icon: getAssetUrl("/images/apartment-view.png") },
        { title: "Interruptores y accesorios", icon: getAssetUrl("/images/modern-house.png") },
    ],
    difference: [
        { before: getAssetUrl("/images/bedroom-clean.png"), after: getAssetUrl("/images/hero-clean.png") },
        { before: getAssetUrl("/images/sofa-cleaning.png"), after: getAssetUrl("/images/modern-house.png") }
    ],
    excluded: [
        "Remoción de manchas de pegamento/pintura/calcomanías",
        "Limpieza de terrazas y áreas inaccesibles",
        "Limpieza húmeda de paredes y techos"
    ]
  },
  'unfurnished-apt': {
    title: "Departamento Sin Amoblar",
    price: "Desde S/ 150",
    duration: "3 hrs",
    included: [
        { title: "Limpieza profunda de pisos", icon: "/images/bedroom-clean.png" },
        { title: "Desinfección de baños completa", icon: "/images/apartment-view.png" },
        { title: "Limpieza de cocina (interior/exterior)", icon: "/images/modern-house.png" },
        { title: "Vidrios interiores", icon: "/images/apartment-view.png" }
    ],
    difference: [
        { before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }
    ],
    excluded: ["Muebles (ya que está vacío)", "Áreas exteriores"]
  },
  'furnished-house': {
    title: "Casa Amoblada",
    price: "Desde S/ 250",
    duration: "5 hrs 20 mins",
    included: [
        { title: "Todas las habitaciones y salas", icon: "/images/bedroom-clean.png" },
        { title: "Cocina y baños completos", icon: "/images/modern-house.png" },
        { title: "Terraza y porche", icon: "/images/apartment-view.png" },
        { title: "Ventanas accesibles", icon: "/images/hero-clean.png" }
    ],
    difference: [
         { before: "/images/sofa-cleaning.png", after: "/images/modern-house.png" },
         { before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }
    ],
    excluded: ["Jardinería", "Limpieza de fachada alta"]
  },
  'unfurnished-house': {
    title: "Casa Sin Amoblar",
    price: "Desde S/ 200",
    duration: "5 hrs",
    included: [
        { title: "Pisos y zócalos", icon: "/images/bedroom-clean.png" },
        { title: "Baños y cocina a fondo", icon: "/images/modern-house.png" },
        { title: "Puertas y marcos", icon: "/images/apartment-view.png" }
    ],
    difference: [
         { before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }
    ],
    excluded: ["Muebles", "Garaje (opcional)"]
  },
  'room-cleaning': {
    title: "Limpieza de Habitación",
    price: 45,
    duration: "1 hr",
    included: [
        { title: "Tendendido de cama", icon: "/images/bedroom-clean.png" },
        { title: "Desempolvado de superficies", icon: "/images/sofa-cleaning.png" },
        { title: "Aspirado de pisos/alfombras", icon: "/images/hero-clean.png" }
    ],
    difference: [{ before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }],
    excluded: ["Baño interno (adicional)", "Ordenamiento de closet"]
  },
  'kitchen-cleaning': {
    title: "Limpieza de Cocina",
    price: 80,
    duration: "2 hrs",
    included: [
        { title: "Limpieza exterior de gabinetes", icon: "/images/modern-house.png" },
        { title: "Electrodomésticos (exterior)", icon: "/images/sofa-cleaning.png" },
        { title: "Fregadero y grifería", icon: "/images/apartment-view.png" },
        { title: "Pisos y zócalos", icon: "/images/bedroom-clean.png" }
    ],
    difference: [{ before: "/images/modern-house.png", after: "/images/hero-clean.png" }],
    excluded: ["Interior de refrigeradora (adicional)", "Vajilla acumulada"]
  },
  'living-cleaning': {
    title: "Limpieza de Sala",
    price: 50,
    duration: "1.5 hrs",
    included: [
        { title: "Aspirado de alfombras", icon: "/images/sofa-cleaning.png" },
        { title: "Limpieza de muebles", icon: "/images/sofa-cleaning.png" },
        { title: "Vidrios interiores", icon: "/images/apartment-view.png" }
    ],
    difference: [{ before: "/images/sofa-cleaning.png", after: "/images/modern-house.png" }],
    excluded: ["Lavado profundo de tapiz (es otro servicio)"]
  },
  'bath-cleaning': {
    title: "Limpieza de Baño",
    price: 40,
    duration: "1 hr",
    included: [
        { title: "Desinfección de inodoro", icon: "/images/bedroom-clean.png" },
        { title: "Limpieza de ducha/bañera", icon: "/images/hero-clean.png" },
        { title: "Espejos y lavabo", icon: "/images/apartment-view.png" }
    ],
    difference: [{ before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }],
    excluded: ["Tuberías internas"]
  },
  'balcony-cleaning': {
    title: "Limpieza de Balcón",
    price: 30,
    duration: "45 mins",
    included: [
        { title: "Barrido y trapeado", icon: "/images/apartment-view.png" },
        { title: "Limpieza de barandas", icon: "/images/modern-house.png" }
    ],
    difference: [{ before: "/images/apartment-view.png", after: "/images/modern-house.png" }],
    excluded: ["Vidrios exteriores de difícil acceso"]
  },
  'appliances-cleaning': {
    title: "Limpieza de Electrodomésticos",
    price: 39,
    duration: "45 mins",
    included: [
        { title: "Refrigeradora (interior)", icon: "/images/modern-house.png" },
        { title: "Microondas", icon: "/images/sofa-cleaning.png" }
    ],
    difference: [{ before: "/images/modern-house.png", after: "/images/hero-clean.png" }],
    excluded: ["Reparaciones"]
  },
  'sofa-cleaning': {
    title: "Limpieza de Sofá",
    price: 60,
    duration: "1.5 hrs",
    included: [
        { title: "Aspirado profundo", icon: "/images/sofa-cleaning.png" },
        { title: "Lavado con máquina", icon: "/images/sofa-cleaning.png" },
        { title: "Eliminación de olores", icon: "/images/hero-clean.png" }
    ],
    difference: [{ before: "/images/sofa-cleaning.png", after: "/images/modern-house.png" }],
    excluded: ["Reparación de tapiz", "Manchas permanentes"]
  },
  'furniture-cleaning': {
    title: "Limpieza de Muebles",
    price: 40,
    duration: "1 hr",
    included: [
        { title: "Sillas y mesas", icon: "/images/sofa-cleaning.png" },
        { title: "Desempolvado", icon: "/images/bedroom-clean.png" }
    ],
    difference: [{ before: "/images/sofa-cleaning.png", after: "/images/modern-house.png" }],
    excluded: ["Restauración de madera"]
  },
  'ceiling-cleaning': {
    title: "Limpieza de Techos",
    price: 199,
    duration: "2 hrs",
    included: [
        { title: "Eliminación de telarañas", icon: "/images/hero-clean.png" },
        { title: "Limpieza de luminarias", icon: "/images/apartment-view.png" }
    ],
    difference: [{ before: "/images/modern-house.png", after: "/images/hero-clean.png" }],
    excluded: ["Pintura"]
  },
  'default': {
     title: "Servicio de Limpieza",
     price: "Consultar",
     duration: "Variable",
     included: [
        { title: "Limpieza profesional", icon: "/images/bedroom-clean.png" },
        { title: "Insumos y equipos", icon: "/images/sofa-cleaning.png" }
     ],
     difference: [
         { before: "/images/bedroom-clean.png", after: "/images/hero-clean.png" }
     ],
     excluded: ["Materiales industriales"]
  }
};
