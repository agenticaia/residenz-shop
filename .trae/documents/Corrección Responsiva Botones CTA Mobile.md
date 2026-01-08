**Corrección Responsiva de Botones CTA (Mobile)**

Voy a adaptar los botones principales para que se visualicen correctamente en dispositivos móviles, evitando desbordamientos y cortes de texto.

**Cambios en `Home.tsx`:**

1.  **Botón Hero ("QUIERO MI PRIMERA VISITA..."):**
    *   **Tipografía:** Reduciré el tamaño de fuente en móvil a `text-sm` (o `text-base` según quepa) escalando a `md:text-xl` en escritorio.
    *   **Dimensiones:** Cambiaré la altura fija `h-[56px]` por `h-auto min-h-[56px]` con padding vertical `py-4`.
    *   **Layout:** Añadiré `whitespace-normal` y `leading-tight` para permitir que el texto se acomode en dos líneas si es necesario sin romperse.

2.  **Botón Cierre ("AGENDAR MI PRUEBA..."):**
    *   **Tipografía:** Ajustaré a `text-lg` en móvil y mantendré `md:text-2xl` en escritorio.
    *   **Dimensiones:** Ajustaré a `h-auto min-h-[56px]` en móvil y `md:h-20` en escritorio.
    *   **Padding:** Reduciré el padding lateral en móvil a `px-6`.

**Código Resultante (Ejemplo Hero):**
```tsx
<Button className="h-auto min-h-[56px] py-4 px-6 text-sm md:text-xl whitespace-normal leading-tight rounded-full ...">
  QUIERO MI PRIMERA VISITA BLINDADA
</Button>
```

¿Procedo con esta adaptación responsiva?