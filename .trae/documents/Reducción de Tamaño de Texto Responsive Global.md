**Corrección Global de Escala Tipográfica Responsive**

Voy a reducir el tamaño de textos y botones en la versión móvil de todo el sitio para evitar desbordamientos y mejorar la legibilidad, tal como se solicita.

**Cambios en `Plans.tsx`:**
1.  **Botones de Planes:** Ajustaré la tipografía base a `text-sm` (antes `text-lg` o `text-base`) escalando a `md:text-lg` en escritorio. Esto asegurará que textos largos como "Quiero mi primera visita blindada" quepan perfectamente.
2.  **Encabezados:** Reduciré el título principal a `text-3xl` en móvil (antes `text-4xl`).

**Cambios en `Home.tsx`:**
1.  **Revisión General:** Confirmaré que todos los encabezados H2 bajen a `text-2xl` o `text-3xl` en móvil.
2.  **Botones:** Aseguraré que todos los CTAs usen `text-sm` en móvil con `whitespace-normal` para permitir saltos de línea sin romper el diseño.

**Código Clave (Botones):**
```tsx
className="... text-sm md:text-lg whitespace-normal leading-tight h-auto py-3 ..."
```

¿Procedo con esta reducción tipográfica global?