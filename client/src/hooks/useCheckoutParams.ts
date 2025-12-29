import { useSearch } from "wouter";

export function useCheckoutParams() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  
  const servicio = params.get('servicio') || "Limpieza Semanal";
  const duracion = params.get('duracion') || "4 semanas";
  const frecuencia = params.get('frecuencia') || "Suscripción Mensual";
  const tamano = params.get('tamano') || "Paquete de Limpieza";
  const totalParam = params.get('total');
  const total = totalParam ? `S/${parseInt(totalParam).toLocaleString()}` : "S/544";
  const itemsCount = params.get('items') || "4";

  return {
    servicio,
    duracion,
    frecuencia,
    tamano,
    total,
    itemsCount
  };
}
