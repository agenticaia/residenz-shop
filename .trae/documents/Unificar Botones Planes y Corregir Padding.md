**Unificación de Botones de Planes y Ajuste de Texto**

Voy a estandarizar los botones de las tarjetas de planes y corregir el problema de legibilidad en el botón de suscripción.

**Cambios en `Plans.tsx`:**

1.  **Unificación de Estilo (Solid Indigo):**
    *   Convertiré los botones "Agendar Una Vez" y "Contactar Ventas" (actualmente `outline`) al estilo sólido del botón central (`bg-primary text-white`), para que todos tengan la misma jerarquía visual fuerte.

2.  **Corrección de Botón Suscripción (Padding y Texto):**
    *   Solucionaré el texto apretado ("no tiene margenes ni pudding") cambiando la altura fija por `h-auto` con `py-3` y `px-6`.
    *   Añadiré `whitespace-normal` y `leading-tight` para que el texto respire y se adapte si es largo, evitando que toque los bordes.

**Código de Botón Unificado:**
```tsx
<Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-auto min-h-[48px] py-3 px-6 whitespace-normal leading-tight transition-colors">
  {/* Texto del Botón */}
</Button>
```

¿Procedo con esta estandarización?