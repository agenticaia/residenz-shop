**Reubicación de Botón de Contacto al Footer**

Voy a mover el botón de contacto de la página de Planes al Footer global, haciéndolo contextual según la página actual.

**Cambios en `Plans.tsx`:**
1.  **Eliminar:** Quitaré el bloque de "Contáctanos" que añadí al final de la página en el paso anterior, limpiando el diseño.

**Cambios en `Layout.tsx`:**
1.  **Lógica Condicional:** Modificaré la sección de "Atención" en el Footer.
    *   Si el usuario **NO** está en `/plans` -> Muestra "Agendar Prueba" (redirige a Planes).
    *   Si el usuario **ESTÁ** en `/plans` -> Muestra "Contáctanos" (redirige a Contacto).
2.  **Estilo:** Ambos botones compartirán el mismo estilo Cyan (`#00BDD6`) y forma (`rounded-xl`).

**Resultado:** El Footer actuará como un navegador inteligente, ofreciendo siempre la siguiente acción lógica según el contexto del usuario.

¿Procedo con esta reubicación?