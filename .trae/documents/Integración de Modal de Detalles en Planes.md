**Recuperación y Refactorización del Modal de Detalles**

Voy a extraer la lógica del modal de detalles de `ServiceDetailImproved.tsx` para crear un componente reutilizable y lo integraré en la página de Planes.

**Pasos de Implementación:**

1.  **Crear Componente Reutilizable (`ServiceDetailsModal.tsx`):**
    *   Ubicación: `client/src/components/plans/ServiceDetailsModal.tsx`.
    *   Lógica: Recibirá `isOpen`, `onClose` y `serviceId` como props.
    *   Contenido: Renderizará la información detallada (Qué incluye, Diferencias, Exclusiones, Requisitos, etc.) consumiendo `detailsData` de `serviceData.ts`.
    *   Principio SOLID: Abierto/Cerrado (extensible para cualquier servicio) y Responsabilidad Única (solo muestra detalles).

2.  **Integrar en `Plans.tsx`:**
    *   Añadiré un botón "Ver detalles" (variant: outline) en cada una de las 3 tarjetas.
    *   Manejaré el estado local para abrir el modal con el ID de servicio correspondiente:
        *   On-Demand -> `furnished-apt` (Estándar).
        *   Suscripción -> `furnished-apt` (Estándar recurrente).
        *   Empresas -> `default` (Genérico).

3.  **Limpieza (Opcional/Recomendado):**
    *   Si es posible dentro del scope, actualizaré `ServiceDetailImproved.tsx` para usar este nuevo componente y eliminar la duplicación de código, cumpliendo estrictamente con la instrucción "No dupliques código".

¿Procedo con la creación del componente y la integración?