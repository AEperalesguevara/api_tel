
# Agenda Telefónica - Node.js + Prisma + Express

Este proyecto es una aplicación de backend que gestiona una agenda telefónica. Utiliza **Node.js**, **Express** para las rutas y lógica del servidor, y **Prisma** para interactuar con la base de datos.

## Características

- Ver todas las entradas de la agenda telefónica.
- Ver una sola entrada por su `ID`.
- Agregar nuevas entradas a la agenda telefónica.
- Eliminar una entrada por su `ID`.
- Mostrar la cantidad de personas en la agenda y la fecha en una página `/info`.
- Middleware para manejo de errores y validación de entradas.

## Requisitos previos

Antes de ejecutar esta aplicación, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm (el gestor de paquetes de Node)
- SQLite (para la base de datos, aunque puedes usar PostgreSQL o MySQL si prefieres)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/usuario/agenda-telefonica.git
   cd agenda-telefonica
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura Prisma:

   Prisma está configurado para usar una base de datos SQLite. Si deseas usar otro tipo de base de datos, actualiza el archivo `prisma/schema.prisma` y sigue las instrucciones de Prisma para el proveedor correspondiente.

   Ejecuta las migraciones para configurar la base de datos:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Genera el cliente de Prisma:

   ```bash
   npx prisma generate
   ```

## Ejecución de la aplicación

Puedes iniciar la aplicación de dos maneras:

1. **Modo normal**:

   ```bash
   npm start
   ```

2. **Modo de desarrollo** (con `nodemon` para reiniciar automáticamente el servidor cuando haya cambios):

   ```bash
   npm run dev
   ```

## Endpoints disponibles

### 1. Obtener todas las entradas

```
GET http://localhost:3001/api/persons
```

### 2. Obtener una entrada por su ID

```
GET http://localhost:3001/api/persons/:id
```

Ejemplo:

```
GET http://localhost:3001/api/persons/1
```

### 3. Agregar una nueva entrada

```
POST http://localhost:3001/api/persons
Content-Type: application/json
```

Body de ejemplo:

```json
{
  "name": "Alice Johnson",
  "number": "111-222-3333"
}
```

Errores posibles:
- **400 Bad Request**: Si falta el nombre o número.
- **400 Bad Request**: Si el nombre ya existe.

### 4. Eliminar una entrada

```
DELETE http://localhost:3001/api/persons/:id
```

### 5. Información sobre la agenda

```
GET http://localhost:3001/info
```

Esta página muestra el número de personas en la agenda y la fecha/hora en que se solicitó la información.


## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework de backend para Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para interactuar con bases de datos.
- **Morgan**: Middleware para registro de solicitudes HTTP.
- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor en modo desarrollo.

