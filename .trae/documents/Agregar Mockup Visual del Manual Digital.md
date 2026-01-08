**Reconstrucción Premium del Componente "Experiencia Wow"**

Voy a transformar completamente la sección visual de "Experiencia Wow" en `Home.tsx` siguiendo tu nuevo diseño detallado de "Premium Card".

**Detalles de la Implementación:**

1.  **Ubicación:** Reemplazaré la tarjeta actual (líneas ~182-193) por el nuevo componente Grid de 2 columnas.
2.  **Estructura y Estilos:**
    *   **Contenedor:** Fondo blanco, borde superior `#6668F2`, sombra suave, esquinas redondeadas (16px).
    *   **Columna Izquierda (Visual):** Imagen `amenities.png` con overlay "glassmorphism" (backdrop-blur) para la frase "No es solo limpieza...".
    *   **Columna Derecha (Contenido):**
        *   **Título:** "TU HOGAR TIENE MEMORIA" con icono `Brain` en color `#6668F2`.
        *   **Subtítulo:** Texto gris explicativo sobre las preferencias.
        *   **Lista de Fichas:** 3 elementos con iconos circulares (Aroma, Oficina, Hotel) usando fondo `#EEF2FF` e iconos `#6668F2`.
        *   **Footer:** Nota humanizadora "Dejamos el spray Residenz..." con estilo de cita y borde lateral.

**Nuevas Dependencias:**
Importaré los iconos necesarios de `lucide-react`: `Brain`, `Wind` (para aroma), `Lock` (para oficina), y `MessageSquare` (para la nota).

¿Procedo a construir este componente premium?