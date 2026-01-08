**Refactorización Interactiva de Tarjetas de Planes**

Voy a transformar la sección de Planes en `Plans.tsx` para que las tarjetas sean interactivas y comuniquen mejor la propuesta de valor de "Carga Mental Cero".

**Cambios Visuales y de Interacción:**
1.  **Estado Inicial Limpio:** Eliminaré los bordes fijos (especialmente en la tarjeta central) e iniciaré todas las tarjetas con `border-transparent`.
2.  **Micro-interacciones:**
    *   **Hover:** Al pasar el mouse, la tarjeta se elevará (`-translate-y-1`), ganará una sombra profunda (`shadow-lg`) y un borde Indigo (`border-[#6668F2]`).
    *   **Transición:** Aplicaré `duration-300 ease-in-out` para suavidad.
3.  **Botones:** Actualizaré todos los botones a estilo píldora (`rounded-full`) con estados hover reactivos.

**Actualización de Contenido (Copywriting):**
1.  **Plan On-Demand:** Integraré el beneficio "Limpieza base + Configuración de zonas prohibidas".
2.  **Plan Suscripción (Destacado):** Destacaré "Manual Digital Completo + Carga mental delegada".
3.  **Plan Empresas:** Enfatizaré "Gestión total: 0 instrucciones repetidas jamás".

**Código de Estilo Unificado:**
```tsx
className="p-8 border-2 border-transparent hover:border-[#6668F2] hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white rounded-xl"
```

¿Procedo a aplicar esta refactorización en `Plans.tsx`?