**Corrección Integral de Responsividad (Hero y Layout Global)**

Voy a reestructurar la sección Hero y estandarizar los contenedores para asegurar que el sitio se vea consistente en todos los tamaños (móvil, tablet y pantallas grandes), replicando la experiencia fluida de la resolución 1013px.

**Cambios Estratégicos:**

1.  **Refactorización del Hero (Flexbox vs Absolute):**
    *   Cambiaré la estructura del Hero para usar **Flexbox** en lugar de posicionamiento absoluto para los "Trust Indicators".
    *   **Beneficio:** Esto evita que el texto se solape con los iconos en pantallas pequeñas (móvil/tablet vertical) y garantiza que el footer del Hero siempre esté al final, sin importar la altura de la pantalla.
    *   Altura mínima: Ajustaré a `min-h-[calc(100vh-64px)]` para cubrir la pantalla sin forzar scroll innecesario o cortes.

2.  **Estandarización de Contenedores (Max-Widths):**
    *   Unificaré el ancho máximo de todas las secciones principales (Problema, Wow, Garantía, Pasos) a `max-w-6xl` (aprox. 1150px).
    *   Actualmente varían entre `5xl`, `6xl` y `7xl`, lo que causa "saltos" visuales en pantallas grandes. La unificación creará una alineación vertical perfecta.

3.  **Ajustes de Grid y Padding:**
    *   Aseguraré que los grids pasen de 1 columna a 2 columnas en el punto de quiebre adecuado (`md` o `lg` según el contenido) para evitar tarjetas aplastadas.

**Código Resultante (Estructura Hero):**
```tsx
<section className="relative min-h-[calc(100vh-64px)] flex flex-col">
  <div className="flex-grow flex items-center justify-center">
    {/* Contenido Central */}
  </div>
  <div className="w-full ...">
    {/* Trust Indicators (Flujo natural, no absolute) */}
  </div>
</section>
```

¿Procedo con esta reestructuración responsiva?