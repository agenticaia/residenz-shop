**Implementación de Atmósfera Visual (Glow Indigo)**

Voy a añadir el efecto de resplandor etéreo solicitado para recuperar la estética de la versión anterior.

**Detalles Técnicos:**
1.  **Glow Externo:** Aplicaré la sombra personalizada `shadow-[0_0_50px_-12px_rgba(102,104,242,0.5)]` al contenedor principal de la tarjeta. Esto creará el halo de luz Indigo alrededor del componente, elevándolo visualmente.
2.  **Atmósfera Interna (Imagen):** Añadiré una capa sutil de color Indigo (`bg-indigo-900/10` mezclado) sobre la imagen izquierda para integrar mejor la fotografía con la paleta de colores y potenciar el efecto de profundidad.

**Código a modificar en `Home.tsx`:**
```tsx
<div className="bg-white rounded-[16px] shadow-[0_0_50px_-12px_rgba(102,104,242,0.5)] overflow-hidden border border-slate-100">
  {/* ... */}
</div>
```

¿Procedo con este ajuste de atmósfera?