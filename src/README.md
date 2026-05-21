# MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para la gestión de autores y publicaciones tipo blog.

## Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- Jest
- Supertest
- Swagger / OpenAPI
- Railway
- dotenv

---

# 📂 Estructura del proyecto

```bash
MINIBLOG-API
│
├── node_modules/
│
├── src/
│   ├── controllers/
│   │   ├── authors.controller.js
│   │   └── posts.controller.js
│   │
│   ├── db/
│   │   └── index.js
│   │
│   ├── docs/
│   │   └── swagger.js
│   │
│   ├── routes/
│   │   ├── authors.routes.js
│   │   └── posts.routes.js
│   │
│   ├── sql/
│   │   ├── setup.sql
│   │   └── seed.sql
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── .env.example
├── .gitignore
├── generate-openapi.js
├── openapi.json
├── package-lock.json
└── package.json
```

---

#  Instalación local

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/CenFonnegra/miniblog-api
```

---

## 2️⃣ Entrar al proyecto

```bash
cd miniblog-api
```

---

## 3️⃣ Instalar dependencias

```bash
npm install
```

---

#  Configuración PostgreSQL

Crear una base de datos PostgreSQL llamada:

```bash
miniblog
```

---

#  Variables de entorno

Crear un archivo `.env` basado en `.env.example`

## Ejemplo:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=miniblog
DB_PASSWORD=123456789
DB_PORT=5432
PORT=3000
```

---

#  Ejecutar scripts SQL

## Crear tablas

Ejecutar:

```bash
psql -U postgres -d miniblog -f src/sql/setup.sql
```

---

## Insertar datos de ejemplo

```bash
psql -U postgres -d miniblog -f src/sql/setup.sql
```

---

#  Ejecutar proyecto

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

#  Ejecutar tests

```bash
npm test
```

---

#  Swagger / OpenAPI

Documentación disponible en:

## Local

```bash
http://localhost:3000/api-docs
```

## Producción

```bash
https://miniblog-api-production-cafb.up.railway.app/api-docs
```

---

#  Deploy en Railway

Proyecto desplegado en Railway utilizando:

- PostgreSQL cloud
- Variables de entorno
- Deploy automático desde GitHub

## URL pública

```bash
https://miniblog-api-production-cafb.up.railway.app
```

---

#  Endpoints principales

## Authors

- GET /authors
- GET /authors/:id
- POST /authors
- PUT /authors/:id
- DELETE /authors/:id

---

## Posts

- GET /posts
- GET /posts/:id
- GET /posts/author/:authorId
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

---

#  Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para:

- resolución de errores
- configuración de Railway
- documentación Swagger/OpenAPI
- debugging
- buenas prácticas backend
- explicación de conceptos técnicos

Todo el código fue comprendido, probado y adaptado manualmente.

---

# 👨‍💻 Autor

Fabian Fonnegra