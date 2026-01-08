Voy a unificar la identidad visual de los botones siguiendo tus instrucciones precisas.

**Plan de Ejecución:**

1.  **Definir Token de Diseño Global**:
    *   Editaré `client/src/index.css` para añadir la variable `--button-radius: 12px;` en el bloque `:root`.

2.  **Actualizar Componente Base `Button`**:
    *   Modificaré `client/src/components/ui/button.tsx` para que utilice `rounded-[var(--button-radius)]` en lugar de `rounded-md` tanto en los estilos base como en las variantes de tamaño (`sm`, `lg`).

3.  **Limpiar Anulaciones Manuales (Refactorización)**:
    *   Recorreré los siguientes archivos para eliminar clases como `rounded-full`, `rounded-xl`, `rounded-2xl`, `rounded-[30px]`, etc., en los componentes `<Button />`, permitiendo que hereden el nuevo radio de 12px por defecto:
        *   `client/src/pages/Home.tsx`
        *   `client/src/pages/Category.tsx`
        *   `client/src/pages/ServiceDetailImproved.tsx`
        *   `client/src/pages/Services.tsx`
        *   `client/src/components/Layout.tsx`
        *   `client/src/components/checkout/AccountCard.tsx`

Esto garantizará que **todos** los botones del sitio (incluidos los de tarjetas y modales) tengan exactamente la misma forma de 12px, eliminando inconsistencias y estilos tipo "píldora".