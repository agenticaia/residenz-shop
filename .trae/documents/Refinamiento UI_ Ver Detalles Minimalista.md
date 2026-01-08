**Refinamiento UI: Enlaces de Detalles Minimalistas**

Transformaré los botones secundarios de "Ver detalles" en enlaces de texto discretos para limpiar la interfaz y potenciar el CTA principal.

**Cambios en `Plans.tsx`:**
1.  **Eliminación de Botones Outline:** Retiraré los botones con borde que compiten visualmente.
2.  **Implementación de Enlaces de Texto:**
    *   Diseño: Texto color Indigo (`#6668F2`) centrado, tamaño `text-sm`.
    *   Iconografía: Añadiré un icono `Info` o `ChevronRight` pequeño (14px) para indicar interactividad.
    *   Interacción: `hover:underline` para feedback visual clásico de enlace.
3.  **Ubicación:** Se colocarán debajo del botón principal "Agendar/Cotizar" en todas las tarjetas (On-Demand, Suscripción, Empresas), manteniendo la consistencia estructural.

**Resultado Visual:**
Una tarjeta limpia donde la acción "Agendar" es el único bloque de color pesado, y "Ver detalles" es una opción secundaria clara pero sutil.

¿Procedo con este cambio de estilo?