# Goboxful Backend

Este es el backend del sistema de envíos de Goboxful, construido con [NestJS](https://nestjs.com/) y [MongoDB Atlas](https://www.mongodb.com/atlas).

## 📦 Tecnologías

- [NestJS](https://nestjs.com/) — Framework para Node.js
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Base de datos NoSQL
- [JWT](https://jwt.io/) — Autenticación basada en tokens

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/goboxful-backend.git
cd goboxful-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con las siguientes variables:

```
PORT=3001
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/goboxfulDB
JWT_SECRET=tu_secreto
```

4. Inicia el servidor de desarrollo:

```bash
npm run start:dev
```

## 🛠 Endpoints principales

- `POST /auth/register` — Registro de usuario
- `POST /auth/login` — Login con JWT
- `GET /orders/history` — Historial de órdenes (requiere JWT)
- `POST /orders` — Crear nueva orden (requiere JWT)

## 🔒 Seguridad

- Autenticación con JWT
- Rutas protegidas mediante `AuthGuard`
- Validación básica con DTOs

## 📁 Estructura

```
src/
├── auth/          # Módulo de autenticación
├── orders/        # Módulo de órdenes
├── users/         # Módulo de usuarios
├── common/        # Pipes, guards, filtros
└── main.ts        # Entry point
```


## 🧪 Testing

```bash
npm run test
```


