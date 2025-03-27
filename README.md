# 🏦 BCP Landia - Backend

Bienvenido al backend de **BCP Landia**

🚀 **Características principales del backend:**  
- Gestión de historias y mini historias con información educativa.  
- Integración con el chatbot de IA **Gemini** para responder preguntas y brindar asesoría bancaria.  
- API desarrollada con **JavaScript y Express.js**.

---

## 🛠️ Tecnologías Utilizadas  

- **Node.js** con **Express.js** (Framework para el servidor)  
- **Chatbot con IA de Gemini**  
- **dotenv** (Para manejar variables de entorno)  

---
## 🛠️ Manejo de Datos  

## 🛠️ Manejo de datos

Este proyecto no utiliza una base de datos tradicional ni un ORM. En su lugar, los datos se almacenan en un archivo `db.js`, donde se manejan como un objeto JavaScript estático.

### 📂 Estructura de los datos

```javascript
const data = {
  users: [
    { id: 1, name: "Diana", age: 25 },
    { id: 2, name: "Jackeline", age: 30 },
  ],
  stories: [
    { id: 1, title: "Juana y su viaje soñado", userId: 1 },
    { id: 2, title: "Ana y su casa propia ", userId: 2 },
    { id: 3, title: "Lucia y su negocio de postres ", userId: 3 },
    { id: 4, title: "Maria y su Educación Universitaria ", userId: 4 },
  ],
  miniStories: [
    {
      id: 1,
      storyId: 1,
      content: "Aprende a elegir la mejor forma de pago para cada compra",
      question: "Vas al mercado y gastas S/150 soles ¿Cómo quieres pagar?",
      options: [
        {
          answer: "Efectivo",
          explanation: "Riesgo de pérdida pero control de gasto.",
          coins: 1,
        },
        {
          answer: "Tarjeta de crédito",
          explanation: "Pago seguro, pero necesitas saldo en cuenta.",
          coins: 1,
        },
        {
          answer: "Tarjeta de débito",
          explanation: "Opción válida si pagas a fin de mes sin intereses.",
          coins: 1,
        },
        {
          answer: "Yape",
          explanation: "Puedes usar Yape, es rápido y seguro.",
          coins: 1,
        },
      ],
    },
  ],
  financial_actions: [
    { id: 1, name: "Tarjeta de crédito", url: "" },
    { id: 2, name: "Tarjeta de débito", url: "" },
    { id: 3, name: "Yape", url: "" },
  ],
  user_wallet: [{ userId: 1, totalCoints: 0 }],
  rewards: [
    {
      id: 1,
      type: "coins",
      value: 50,
      description: "Recompensa por abrir cuenta de ahorros",
    },
    {
      id: 2,
      type: "coins",
      value: 100,
      description: "Recompensa por invertir en fondos indexados",
    },
    {
      id: 3,
      type: "discount",
      value: 10,
      description: "10% de descuento en cursos de educación financiera",
    },
  ],
};

module.exports = data;
✅ ¿Por qué este enfoque?
Sencillez y facilidad de uso para proyectos pequeños o pruebas.

No requiere configuración de bases de datos externas.

Facilita la modificación rápida de datos sin dependencias adicionales.

⚠️ Limitaciones
Los datos no son persistentes; se reinician al reiniciar el servidor.

No es escalable para grandes aplicaciones.

No permite operaciones avanzadas como autenticación o relaciones complejas entre datos.

🚀 Futuras mejoras
A futuro, se planea implementar:

✅ Una base de datos real (PostgreSQL, MongoDB, MySQL, etc.).

✅ Un ORM como Prisma o Sequelize para manejar datos de manera más eficiente.

✅ Un sistema de autenticación con JWT o OAuth para permitir logins seguros.

✅ Un backend más escalable con una arquitectura modular y desacoplada.


---
## 🚀 Instalación y Configuración  

1. **Clonar el repositorio:**  
   ```bash
   git clone https://github.com/tu-usuario/bcplandia-backend.git
   cd bcplandia-backend
   
---

🏗️ Arquitectura del Proyecto
📂 bcplandia-backend
┣ 📂 src
┃ ┣ 📂 controller → Controladores de lógica de negocio
┃ ┃ ┣ 📄 gemini.chat.controller.js
┃ ┃ ┣ 📄 miniStory.controller.js
┃ ┃ ┗ 📄 user.controller.js
┃ ┣ 📂 data → Archivos con información de historias y preguntas
┃ ┃ ┗ 📄 db.js
┃ ┣ 📂 routes → Definición de rutas de la API
┃ ┃ ┣ 📄 gemini.chat.route.js
┃ ┃ ┣ 📄 miniStory.route.js
┃ ┃ ┣ 📄 user.route.js
┃ ┃ ┗ 📄 index.js
┃ ┣ 📂 service → Servicios externos como IA de Gemini
┃ ┃ ┗ 📄 gemini-chat.js
┃ ┗ 📄 index.js → Archivo principal del servidor
┣ 📄 .env → Variables de entorno
┣ 📄 .gitignore
┣ 📄 package.json → Dependencias y scripts
┣ 📄 package-lock.json
┗ 📄 README.md → Este documento
