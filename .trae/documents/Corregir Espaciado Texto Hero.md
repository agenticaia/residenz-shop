**Ajuste de Espaciado "Prueba de Fuego"**

Voy a corregir los márgenes del texto promocional debajo del botón principal para evitar que choque con los indicadores de confianza y darle el aire necesario.

**Cambios en `Home.tsx` (Hero):**
1.  **Margen Superior:** Aumentaré la separación con el botón mediante `gap-6` (24px) en el contenedor flex.
2.  **Margen Inferior:** Añadiré un margen inferior explícito (`mb-12` o `pb-8`) al texto "Prueba de fuego..." para garantizar que no se solape con la barra inferior de "Trust Indicators" en ninguna resolución.

**Código Resultante:**
```tsx
<div className="flex flex-col items-center gap-6"> {/* Más espacio con botón */}
  <Link ...> <Button ... /> </Link>
  <p className="text-secondary font-medium tracking-wide mb-8"> {/* Espacio inferior seguro */}
    Prueba de fuego por solo S/49
  </p>
</div>
```

¿Procedo con este ajuste de espaciado?