# Arquitectura Técnica - Residenz Ecommerce

## 1. Visión General de la Arquitectura

Residenz es un ecommerce de servicios de limpieza doméstica que combina una arquitectura moderna de aplicación web con un enfoque de negocio basado en la confianza y estandarización de servicios hoteleros. La plataforma está diseñada para ofrecer una experiencia de usuario fluida desde la landing page hasta la contratación de servicios.

## 2. Stack Tecnológico

### Frontend
- **Framework**: React 19.2.0 con TypeScript
- **Build Tool**: Vite 7.1.9
- **Estilos**: Tailwind CSS 4.1.14
- **Rutas**: Wouter 3.3.5 (enrutamiento ligero)
- **Gestión de Estado**: TanStack Query 5.60.5
- **Animaciones**: Framer Motion 12.23.24
- **Componentes UI**: Radix UI + componentes custom

### Backend
- **Runtime**: Node.js con TypeScript
- **Framework**: Express 4.21.2
- **Base de Datos**: PostgreSQL con Drizzle ORM 0.39.3
- **Autenticación**: Passport.js con estrategia local
- **Sesiones**: express-session con connect-pg-simple
- **Validación**: Zod 3.25.76

### Herramientas de Desarrollo
- **TypeScript**: 5.6.3
- **Build**: tsx para desarrollo, esbuild para producción
- **Base de Datos**: drizzle-kit para migraciones

## 3. Estructura del Proyecto

```
residenz-shop/
├── client/                    # Frontend React
│   ├── public/               # Assets estáticos
│   │   └── images/           # Imágenes del sitio
│   └── src/
│       ├── components/       # Componentes React
│       │   └── ui/          # Componentes UI base
│       ├── hooks/            # Custom hooks
│       ├── lib/              # Utilidades y configuración
│       ├── pages/            # Páginas principales
│       ├── App.tsx          # Componente principal
│       └── main.tsx         # Punto de entrada
├── server/                   # Backend Express
│   ├── index.ts             # Servidor principal
│   ├── routes.ts            # Definición de rutas
│   ├── storage.ts           # Capa de almacenamiento
│   ├── static.ts            # Servicio de archivos estáticos
│   └── vite.ts              # Integración con Vite
├── shared/                   # Código compartido
│   └── schema.ts            # Esquemas de base de datos
├── script/                   # Scripts de build
└── migrations/               # Migraciones de BD
```

## 4. Arquitectura de la Aplicación

### Diagrama de Arquitectura

```mermaid
graph TD
    A[Navegador del Cliente] --> B[Aplicación React]
    B --> C[Cliente HTTP/API]
    C --> D[Servidor Express]
    D --> E[Capa de Almacenamiento]
    E --> F[(PostgreSQL)]
    
    subgraph "Frontend Layer"
        B
        C
    end
    
    subgraph "Backend Layer"
        D
        E
    end
    
    subgraph "Data Layer"
        F
    end
```

### Flujo de Datos

1. **Cliente**: El usuario interactúa con la interfaz React
2. **API**: Las peticiones se envían al servidor Express mediante fetch/axios
3. **Procesamiento**: El servidor procesa las peticiones y valida datos
4. **Almacenamiento**: Se interactúa con la base de datos PostgreSQL
5. **Respuesta**: Los datos se devuelven al cliente para actualizar la UI

## 5. Modelo de Datos

### Esquema de Base de Datos

```mermaid
erDiagram
    USERS {
        string id PK
        string username UK
        string password
    }
```

### Tabla Principal: users

```sql
CREATE TABLE users (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
```

## 6. Rutas de la Aplicación

| Ruta | Propósito |
|------|-----------|
| `/` | Página principal con landing page |
| `/services` | Listado de servicios ofrecidos |
| `/about` | Información sobre la empresa |
| `/plans` | Planes y precios |
| `/contact` | Formulario de contacto |
| `/service-detail` | Detalle del servicio y agendamiento |
| `/checkout` | Proceso de pago y confirmación |

## 7. Componentes Principales

### Layout System
- **Layout.tsx**: Componente principal de navegación con header/footer responsive
- **Navigation**: Menú responsive con versión móvil y desktop
- **Footer**: Información de la empresa y enlaces legales

### Páginas Principales
- **Home.tsx**: Landing page con secciones de marketing
- **ServiceDetail.tsx**: Detalle de servicio y formulario de agendamiento
- **Checkout.tsx**: Proceso de contratación

### Componentes UI
- Sistema de componentes basado en Radix UI
- Componentes custom: Button, Card, Badge, etc.
- Tema consistente con colores primarios y secundarios

## 8. Características Técnicas

### Responsive Design
- Mobile-first approach con Tailwind CSS
- Breakpoints para tablet y desktop
- Menú de navegación adaptativo

### Performance
- Lazy loading de imágenes
- Code splitting con Vite
- Optimización de bundles

### Seguridad
- Validación de datos con Zod
- Autenticación con Passport.js
- Protección de rutas (pendiente de implementación)

### SEO y Metadatos
- Configuración de meta tags dinámicos
- Sitemap y robots.txt
- Open Graph tags para redes sociales

## 9. Estado Actual y Roadmap

### Implementado
- ✅ Estructura base del proyecto
- ✅ Sistema de rutas frontend/backend
- ✅ Landing page principal
- ✅ Sistema de componentes UI
- ✅ Integración con base de datos
- ✅ Configuración de build y desarrollo

### Pendiente de Implementación
- 🔲 Sistema completo de autenticación de usuarios
- 🔲 Catálogo de servicios dinámico
- 🔲 Sistema de agendamiento de citas
- 🔲 Integración con pasarela de pagos
- 🔲 Panel de administración
- 🔲 Sistema de notificaciones
- 🔲 Gestión de reservas y calendario

## 10. Configuración y Despliegue

### Variables de Entorno
```bash
DATABASE_URL=postgresql://usuario:password@host:puerto/database
NODE_ENV=development|production
PORT=5000
```

### Scripts de NPM
```bash
npm run dev          # Desarrollo completo
npm run dev:client   # Solo frontend
npm run build        # Build de producción
npm start            # Servidor de producción
npm run db:push      # Migraciones de BD
```

### Despliegue
- Build optimizado con esbuild
- Servidor Express sirve archivos estáticos
- Compatible con Vercel, Railway, Heroku
- Configuración de reverse proxy con nginx (recomendado)

## 11. Consideraciones de Escalabilidad

### Optimizaciones Futuras
- Implementar caché con Redis
- CDN para assets estáticos
- Optimización de queries de base de datos
- Implementar paginación en listados
- Sistema de logs estructurados
- Monitoreo con herramientas APM

### Arquitectura de Microservicios (Futura)
- Separar servicios de autenticación
- Servicio independiente para pagos
- Microservicio de notificaciones
- API Gateway para gestión de servicios

Esta arquitectura proporciona una base sólida para un ecommerce de servicios, con la flexibilidad necesaria para escalar según las necesidades del negocio.