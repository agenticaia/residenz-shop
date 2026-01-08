**Refactorización de Sección Garantía y Confianza**

Voy a transformar la sección oscura actual ("Sección 3") en un bloque dividido de alta confianza que comunica seguridad legal y validación personal.

**Detalles de Implementación:**
1.  **Estructura:**
    *   Mantendré el contenedor `bg-slate-900` con padding generoso.
    *   Implementaré un Grid de 2 columnas centrado verticalmente (`items-center`).

2.  **Columna Izquierda (Respaldo Legal):**
    *   Encabezado con icono `Shield` grande en Indigo (`#6668F2`).
    *   Título "RESPALDO LEGAL Y LABORAL" en blanco.
    *   Destacado "S/ 15,000" en tipografía grande.
    *   Texto explicativo sobre la cobertura de accidentes y 0% responsabilidad.

3.  **Columna Derecha (Validación Humana):**
    *   **Imagen:** Reutilizaré `/images/staff-maria.png` en un diseño circular con borde.
    *   **Sello QR:** Añadiré un elemento visual superpuesto con el icono `QrCode` y un check de validación.
    *   **Copy:** Título "Conoce y valida a tu Experta" y subtítulo sobre la bio verificada.

4.  **Dependencias:**
    *   Importaré el icono `QrCode` de `lucide-react`.

**Código Propuesto (Esqueleto):**
```tsx
<section className="py-24 bg-slate-900 relative overflow-hidden">
  {/* Fondo decorativo existente */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
      {/* Col Izq: Seguro */}
      <div className="space-y-6">
        <Shield className="w-16 h-16 text-[#6668F2]" />
        <h2 className="text-3xl font-bold text-white">RESPALDO LEGAL Y LABORAL</h2>
        <div className="text-5xl font-extrabold text-white">S/ 15,000</div>
        <p className="text-slate-300 text-lg">Cubrimos cualquier accidente...</p>
      </div>
      
      {/* Col Der: Validación */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center gap-6">
         <div className="relative">
            <img src="/images/staff-maria.png" className="w-24 h-24 rounded-full border-2 border-[#6668F2]" />
            <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-lg">
               <QrCode className="w-6 h-6 text-[#6668F2]" />
            </div>
         </div>
         <div>
            <h3 className="text-white font-bold text-xl">Conoce y valida...</h3>
            <p className="text-slate-400">Bio verificada...</p>
         </div>
      </div>
    </div>
  </div>
</section>
```

¿Procedo con esta refactorización?