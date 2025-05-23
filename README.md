# 📚 API de Gestión de Libros

API RESTful creada con **Node.js**, **Express** y **MongoDB** para gestionar una colección de libros. Permite crear, leer, actualizar y eliminar (CRUD) libros.

## 🚀 Tecnologías usadas

* Node.js  
* Express  
* MongoDB + Mongoose  
* TypeScript  

## 📦 Instalación

```bash
git clone https://github.com/NICKYTOMBA88/T.P-N-2.git
cd TRABAJO PRACTICO-N2
npm install
```

## ⚙️ Configuración

Crear un archivo `.env` en la raíz con el contenido:

```env
PORT=3000
URI_DB=tu_uri_de_mongodb
```

## ▶️ Ejecución

```bash
npm run dev
```

Servidor corriendo en:

```
http://localhost:3000/api/books
```

## 📬 Endpoints

| Método | Ruta              | Descripción                    |
|--------|-------------------|--------------------------------|
| GET    | /api/books        | Obtener todos los libros       |
| GET    | /api/books/:id    | Obtener un libro por ID        |
| POST   | /api/books        | Crear un nuevo libro           |
| DELETE | /api/books/:id    | Eliminar un libro por ID       |
| PATCH  | /api/books/:id    | Actualizar un libro por ID     |

## 📘 Esquema del Libro

```json
{
  "title": "string",
  "author": "string",
  "publishedYear": number,
  "genre": "string",
  "available": true
}
```

## ✅ Autor

* Nicolas Gimenez
