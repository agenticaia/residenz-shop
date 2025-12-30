# Documentación de API y Especificación de Datos - Residenz Shop

## 1. Estado Actual del Sistema
Actualmente, la aplicación **Residenz Shop** opera con una arquitectura híbrida en transición:
- **Frontend:** Utiliza datos estáticos ("mocks") definidos en TypeScript para la mayoría de las funcionalidades de visualización de servicios (`client/src/data/serviceData.ts`).
- **Backend:** Existe una infraestructura base con Express y Drizzle ORM, pero los endpoints REST para servicios y reservas están pendientes de implementación.
- **Base de Datos:** Se ha definido el esquema inicial para usuarios (`shared/schema.ts`).

Este documento sirve como **especificación técnica** para:
1.  Documentar los contratos de datos implícitos que usa el Frontend.
2.  Definir la estructura de la API REST que debe implementarse para hacer la aplicación dinámica.

---

## 2. Modelos de Datos (Frontend Contract)
Estos modelos reflejan la estructura de datos que la UI espera recibir. Cualquier implementación futura de API debe respetar estas interfaces para garantizar compatibilidad.

### 2.1. ServiceConfig (Configuración de Servicio)
Representa las opciones de servicio disponibles (ej. tamaño del departamento).

```typescript
interface ServiceConfig {
  size: string;      // Ej: "1 Habitación"
  price: number;     // Precio base en moneda local
  duration: string;  // Duración estimada (ej: "3 hrs")
  included: IncludedItem[];
}

interface IncludedItem {
  name: string;      // Nombre del ítem (ej: "Baños")
  quantity: number;  // Cantidad incluida
}
```

### 2.2. Frequency (Frecuencia)
Lógica de precios basada en la recurrencia del servicio.

```typescript
interface FrequencyModifier {
  count: number;    // Veces por semana
  discount: number; // Factor de descuento (ej: 0.95 para 5% off)
}
// Mapa actual: "Una vez por semana", "2 veces por semana", etc.
```

### 2.3. ServiceDetail (Detalle Extendido)
Información detallada para la página de producto/servicio.

```typescript
interface ServiceDetail {
  title: string;
  price: number;
  duration: string;
  included: {
    title: string;
    icon: string; // URL del icono
  }[];
  excluded: string[]; // Lista de lo que NO incluye
}
```

---

## 3. Esquema de Base de Datos (Backend)
Definido en `shared/schema.ts` usando Drizzle ORM.

### 3.1. Tabla `users`
| Columna  | Tipo      | Restricciones          | Descripción |
|----------|-----------|------------------------|-------------|
| `id`     | UUID      | PK, Default Random     | Identificador único |
| `username`| TEXT      | Not Null, Unique       | Nombre de usuario |
| `password`| TEXT      | Not Null               | Hash de contraseña |

---

## 4. Especificación de API Propuesta (Roadmap)
A continuación se definen los endpoints REST sugeridos para reemplazar los datos estáticos del frontend.

### 4.1. Autenticación (`/api/auth`)

#### `POST /api/register`
Registrar un nuevo usuario.
- **Body:** `{ username: "...", password: "..." }`
- **Response (201):** `{ id: "uuid", username: "..." }`

#### `POST /api/login`
Iniciar sesión.
- **Body:** `{ username: "...", password: "..." }`
- **Response (200):** `{ message: "Logged in successfully" }` (Session/Cookie based)

### 4.2. Servicios (`/api/services`)

#### `GET /api/services`
Obtener la lista de servicios base disponibles.
- **Response (200):**
```json
[
  {
    "id": "service-1",
    "slug": "furnished-apt",
    "title": "Departamento Amueblado",
    "basePrice": 180
  }
]
```

#### `GET /api/services/:slug`
Obtener detalles de un servicio específico (reemplaza `detailsData`).
- **Response (200):** Objeto JSON compatible con la interfaz `ServiceDetail`.

### 4.3. Configuración y Precios (`/api/pricing`)

#### `GET /api/pricing/options`
Obtener las opciones de configuración (reemplaza `serviceOptions`).
- **Response (200):** Lista de objetos `ServiceConfig`.

#### `POST /api/pricing/calculate`
Calcular precio final (opcional, si se mueve la lógica al backend).
- **Body:** `{ serviceId: "...", frequency: "...", durationWeeks: 4 }`
- **Response (200):**
```json
{
  "pricePerService": 3400,
  "totalPrice": 13600,
  "discountApplied": 0.05
}
```

---

## 5. Notas de Implementación
- **Autenticación:** Se recomienda usar `passport` con `express-session` (infraestructura ya presente en dependencias).
- **Validación:** Usar `zod` para validar todos los inputs en el backend (schemas ya configurados en `shared/schema.ts`).
- **Migración:** El frontend debe actualizar `client/src/lib/queryClient.ts` para consumir estos endpoints en lugar de importar `serviceData.ts` directamente.
