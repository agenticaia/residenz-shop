**Plan de Pivote Estratégico a Planes (2025-01-07)**

He identificado todos los puntos de cambio necesarios tras analizar el código.

**Archivos Afectados:**
1.  `client/src/components/Layout.tsx` (Navbar y Footer)
2.  `client/src/pages/Home.tsx` (Landing Page)

**Acciones Específicas:**

**1. Backups de Seguridad:**
Crearé copias exactas antes de editar:
*   `client/src/components/Layout.backup.2025-01-07.tsx`
*   `client/src/pages/Home.backup.2025-01-07.tsx`

**2. Modificaciones en Layout.tsx:**
*   **Navbar:** Ocultaré el enlace "Servicios" (`/detalle-servicio`) en la lista `navItems` comentándolo.
*   **CTAs:** Redirigiré el botón "Empezar" (Desktop y Mobile) y el botón del Footer de `/detalle-servicio` a `/plans`.

**3. Modificaciones en Home.tsx:**
*   **Hero:** Botón "QUIERO MI PRIMERA VISITA BLINDADA" -> `/plans`.
*   **Comparativo:** Botones de ambas tarjetas (Problema/Solución) -> `/plans`.
*   **Garantía:** Botón de la sección de confianza -> `/plans`.
*   **Cierre:** Botón final "AGENDAR MI PRUEBA" -> `/plans`.

**4. Documentación:**
Añadiré el bloque de comentario `CHANGELOG - PIVOTE A PLANES` al inicio de cada archivo modificado para facilitar la reversión futura.

Estoy listo para ejecutar los backups y aplicar los cambios. ¿Procedo?