# Resumen de Cambios - Refactorización de Flujo de Conversión

Este documento detalla los archivos creados y modificados para implementar el nuevo flujo de "Modal de Configuración" en la página de Planes, eliminando la navegación intermedia.

## Archivos Creados

### 1. `client/src/components/plans/PlanConfigModal.tsx`
**Rol:** Orquestador Principal.
**Funcionalidad:**
*   Gestiona el estado de apertura/cierre del modal.
*   Determina qué selector mostrar (Hogar o Áreas) según el `planType` recibido.
*   Calcula precios preliminares.
*   Ejecuta la navegación final a `/checkout` inyectando los parámetros de configuración en la URL.

### 2. `client/src/components/plans/HomeSizeSelector.tsx`
**Rol:** Selector Visual de Tamaño.
**Funcionalidad:**
*   Renderiza las opciones de tamaño de hogar ("1 Habitación", "2 Habitaciones", etc.) como tarjetas seleccionables.
*   Muestra detalles clave (precio, duración, inclusiones) y destaca la selección activa con estilos visuales (borde morado, icono de check).

### 3. `client/src/components/plans/AreaSelector.tsx`
**Rol:** Selector Granular.
**Funcionalidad:**
*   Permite al usuario incrementar/decrementar la cantidad de áreas específicas (Cocina, Baño, Sala, Balcón).
*   Calcula y muestra el subtotal por tipo de área.

## Archivos Modificados

### 1. `client/src/pages/Plans.tsx`
**Cambio:** Integración del Modal.
**Detalles:**
*   Se importó el nuevo componente `PlanConfigModal`.
*   Se añadieron estados locales (`isModalOpen`, `selectedPlanType`) para controlar el modal.
*   Se reemplazaron los componentes `<Link href="/detalle-servicio">` por botones nativos que ejecutan `handlePlanSelect(...)`.
*   Esto elimina efectivamente la redirección a la página antigua de detalles, manteniendo al usuario en un flujo continuo hasta el checkout.
