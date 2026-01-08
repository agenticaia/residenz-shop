**Igualación de Tamaño CTA Cierre vs Hero**

Voy a ajustar el botón de cierre ("AGENDAR MI PRUEBA...") para que tenga exactamente las mismas dimensiones visuales y tipografía que el botón del Hero, respetando su borde `rounded-xl` específico.

**Cambios en `Home.tsx` (Botón Cierre):**
*   **Tipografía:** Ajustaré de `text-lg md:text-2xl` a `text-sm md:text-xl` (igual que el Hero).
*   **Padding:** Unificaré a `px-6` y `py-4` para mantener consistencia.
*   **Borde:** Mantendré `rounded-xl` como se solicitó.

**Código Resultante:**
```tsx
<Button className="h-auto min-h-[56px] py-4 px-6 text-sm md:text-xl font-bold whitespace-normal leading-tight rounded-xl ...">
  AGENDAR MI PRUEBA CON GARANTÍA
</Button>
```

¿Procedo con esta igualación de tamaño?