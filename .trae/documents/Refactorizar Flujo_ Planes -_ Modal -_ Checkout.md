**Paso 0: Visualización y Verificación**
Antes de iniciar los cambios, levantaré una nueva instancia del servidor de desarrollo para asegurar que tengas un enlace de **Preview** funcional y puedas revisar el estado actual del sitio.

---

**Refactorización del Flujo de Conversión (Plan Principal)**

Una vez verificado el sitio, procederé con la optimización del flujo:

1.  **Arquitectura de Componentes (SOLID):**
    *   Crearé `PlanConfigModal.tsx` como orquestador.
    *   Extraeré la lógica de selección (Tarjetas de tamaño y Contadores de área) que actualmente vive en `ServiceDetailImproved.tsx` para reutilizarla en el nuevo modal, asegurando consistencia visual (bordes redondeados, acento morado).

2.  **Integración en `Plans.tsx`:**
    *   Sustituiré la navegación actual por la apertura del `PlanConfigModal`.
    *   El modal adaptará su contenido según si el plan es "Hogar Completo" (Suscripción/On-Demand) o "Por Área".

3.  **Conexión con Checkout:**
    *   Configuraré la redirección final a `/checkout` con los parámetros de configuración en la URL, permitiendo que el resumen de compra se actualice automáticamente.

¿Procedo primero con el preview y luego con la refactorización?