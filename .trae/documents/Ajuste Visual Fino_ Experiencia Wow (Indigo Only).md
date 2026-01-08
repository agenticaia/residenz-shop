**Ajustes de Diseño "Fine Tuning" - Componente Experiencia Wow**

Voy a refinar los estilos visuales del componente en `Home.tsx` para eliminar el Cyan y consolidar la identidad Indigo Residenz, además de asegurar el efecto glassmorphism.

**Acciones Específicas:**

1.  **Unificación de Color (Indigo Residenz):**
    *   Reemplazaré todos los acentos Cyan (`#00BDD6`) en iconos y etiquetas de estado por Indigo (`#6668F2`).
    *   Estableceré el fondo de los círculos de iconos a `#EEF2FF` (Indigo muy claro).
    *   Estilo de Badges (Sincronizado, Protegido, Estándar): `bg-[#EEF2FF]` con texto `text-[#6668F2]`.

2.  **Glassmorphism en Imagen:**
    *   Confirmaré que el contenedor del texto sobre la imagen tenga `backdrop-blur-md` y `bg-black/60` para lograr el efecto de cristal esmerilado solicitado.

3.  **Espaciado:**
    *   Mantendré el padding generoso (`p-8` mínimo) en el contenedor derecho para preservar la sensación de lujo.

**Código Resultante (Snippet de Ficha):**
```tsx
<div className="w-10 h-10 rounded-full bg-[#EEF2FF] ...">
  <Icon className="text-[#6668F2] ..." />
</div>
<span className="text-[#6668F2] bg-[#EEF2FF] ...">Sincronizado</span>
```

¿Procedo con estos ajustes finales?