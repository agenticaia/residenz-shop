# Agentes y Prompts para Residenz

## Code Review
Revisá este PR buscando:
- Memory leaks y problemas de performance
- Casos borde sin manejar
- Violaciones de principios SOLID
- Inconsistencias con el estilo del repo

Ejemplo (Residenz):
Revisá `src/pages/resi/ResiVisitCheckin.tsx` buscando:
- Memory leaks en geolocation y timeouts
- Casos borde cuando no hay selfie o permisos de ubicación
- Single Responsibility en manejo de UI vs API
- Consistencia con hooks y componentes shadcn

## Migración de Código
Migrá este componente de React 18 a React 19:
- Convertí useEffect innecesarios a server components donde corresponda
- Usá APIs nuevas (use, useOptimistic)
- Mantené funcionalidad exacta
- Explicá cada cambio importante

Ejemplo:
Migrá un Class Component a Function Component:
- Convertí lifecycle methods a hooks
- Usá useState/useEffect apropiadamente
- Mantené funcionalidad
- Explicá cambios

## Documentación
Generá documentación profesional para una función:
- JSDoc (@param, @returns, @throws, @example)
- README con ejemplos
- Diagrama Mermaid
- Edge cases cubiertos

Ejemplo:
Generá documentación para `uploadPaymentProof()`:
- Parámetros y ejemplos
- Flujo de subida y creación de FinancialRecord
- Edge cases: archivo inválido, auth faltante

## Optimización de Performance
Optimizá una función O(n²):
- Reducí complejidad a O(n) u O(n log n)
- Usá estructuras (Set, Map, WeakMap)
- Explicá la ganancia y agregá benchmark

Ejemplo:
Optimizá búsqueda de bookings:
- Evitá doble iteración
- Map para lookup O(1)
- Comparativa con 1000 elementos

## Testing
Escribí tests:
- Unit tests con Vitest/Jest
- Casos éxito y error
- Edge cases (null/undefined)
- Mocks para dependencias externas
- Coverage mínimo 80%

Ejemplo:
Tests para `validateFinancialRecord()`:
- Validar → booking CONFIRMED
- Rechazar → sin cambio de booking
- Error de Supabase
- Mock de functions.invoke

## Debugging
Este código tiene un bug: [describir]

Analizá:
1. Qué pasa
2. Por qué
3. Cómo solucionarlo
4. Prevención futura

Ejemplo:
Duplicación de estado de booking:
- Edge Function y cliente ambos actualizan
- Solución: centralizar en servidor

## Refactoring General
Refactorizá aplicando:
1. SOLID
2. Early returns
3. Extracción de funciones pequeñas
4. Nombres descriptivos
5. Manejo de errores robusto
6. TS con tipos estrictos

Ejemplo:
Refactorizá `handleCheckin()` separando: validar input, obtener geo, subir selfie, invocar API, actualizar UI.

## Seguridad
Revisá vulnerabilidades:
- Inyección SQL/NoSQL
- XSS
- CSRF
- Exposición de datos sensibles
- Validación insuficiente
- Dependencias con CVEs

Ejemplo:
Revisá `landlord-validate-qr`:
- Verificación HMAC
- Idempotencia
- Logs sin secretos

## API Design
Diseñá un endpoint REST:
- Método HTTP correcto
- Path RESTful
- Body validado
- Responses y códigos
- Errores consistentes
- OpenAPI/Swagger

Ejemplo:
POST `/api/payments/{id}/validate` con cuerpo `{status, notes}` y spec OpenAPI.

## SQL / Queries
Optimizá una query SQL:
- Reducí runtime
- Usá índices
- Evitá N+1
- Explicá plan de ejecución

Ejemplo:
Indices para `financial_records(status, client_id)` y `bookings(scheduled_at)`.

## Git / Commits
Generá un commit siguiendo Conventional Commits:
- Tipo + scope
- Descripción en imperativo
- Body con “por qué”
- Breaking changes si aplica

Ejemplo:
`feat(payments): validar comprobantes y mover booking a CONFIRMED`

## Prompts Específicos
Validar Integración:
- Verificá que BD coincida
- Flujos consistentes
- Race conditions
- Sin duplicación de lógica

Mantener Compatibilidad:
- Códigos existentes
- URLs actuales
- Estructura BD
- Responses API existentes

Documentar Flujos Complejos:
- Secuencia actores
- Estados y transiciones
- Casos de uso
- Edge cases

## Tips
1. Sé específico
2. Da contexto
3. Iterá
4. Validá
5. Aprendé

## Recursos
- https://www.conventionalcommits.org/
- https://en.wikipedia.org/wiki/SOLID
- https://restfulapi.net/
- https://use-the-index-luke.com/
- https://react.dev/learn
