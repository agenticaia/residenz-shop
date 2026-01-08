**Corrección Final de Botones en Planes**

Voy a solucionar las inconsistencias restantes en los botones de la página de Planes.

**Cambios en `Plans.tsx`:**

1.  **Botón On-Demand:**
    *   Eliminaré la propiedad `variant="outline"` y las clases de borde gris.
    *   Aplicaré el estilo sólido Indigo unificado: `bg-primary text-white`.

2.  **Botón Suscripción:**
    *   Reemplazaré las clases actuales (que causan el desbordamiento de texto) por el conjunto responsivo unificado.
    *   Reduciré ligeramente el tamaño de fuente a `text-sm md:text-base` para asegurar que el texto largo ("Quiero mi primera visita blindada") quepa cómodamente con el padding adecuado.

**Resultado:** Los tres botones serán visualmente idénticos (sólidos, píldora, Indigo) y el texto se leerá correctamente en todos.

¿Procedo con esta corrección?