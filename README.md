# 🏦 BCP Landia - Backend

Bienvenido al backend de **BCP Landia**

🚀 **Características principales del backend:**  
- Gestión de historias y mini historias con información educativa.  
- Integración con el chatbot de IA **Gemini** para responder preguntas y brindar asesoría bancaria.  
- API desarrollada con **JavaScript y Express.js**.

---
## Requisitos

Asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>
npm install
```

Si usas yarn:

```bash
yarn install
```

---

## 🛠️ Tecnologías Utilizadas  

- **Node.js** con **Express.js** (Framework para el servidor)  
- **Chatbot con IA de Gemini**  
- **dotenv** (Para manejar variables de entorno)  

---

## 🛠️ Manejo de datos

Este proyecto no utiliza una base de datos tradicional ni un ORM. En su lugar, los datos se almacenan en un archivo `db.js`, donde se manejan como un objeto JavaScript estático.

### 📂 Estructura de los datos
```javascript
const data = {
  users: [
    { id: 1, name: "Diana", age: 25 },
    { id: 2, name: "Jackeline", age: 30 },
  ],
};

module.exports = data;
```

---

## ✅ ¿Por qué este enfoque?
Sencillez y facilidad de uso para proyectos pequeños o pruebas.

No requiere configuración de bases de datos externas.

Facilita la modificación rápida de datos sin dependencias adicionales.

## ⚠️ Limitaciones
Los datos no son persistentes; se reinician al reiniciar el servidor.

No es escalable para grandes aplicaciones.

No permite operaciones avanzadas como autenticación o relaciones complejas entre datos.

## 🚀 Futuras mejoras
A futuro, se planea implementar:

✅ Una base de datos real (PostgreSQL, MongoDB, MySQL, etc.).

✅ Un ORM como Prisma o Sequelize para manejar datos de manera más eficiente.

✅ Un sistema de autenticación con JWT o OAuth para permitir logins seguros.

✅ Un backend más escalable con una arquitectura modular y desacoplada.


---


## 🏗️ Arquitectura del Proyecto

📂 **bcplandia-backend**  
├── 📂 **src**  
│   ├── 📂 **controller** → Controladores de lógica de negocio  
│   ├── 📂 **data** → Archivos con información de historias y preguntas  
│   ├── 📂 **routes** → Definición de rutas de la API  
│   ├── 📂 **service** → Servicios externos como IA de Gemini  
│   ├── 📄 **index.js** → Archivo principal del servidor  
├── 📄 **.env** → Variables de entorno  
├── 📄 **package.json** → Dependencias y scripts  
└── 📄 **README.md** → Este documento  
