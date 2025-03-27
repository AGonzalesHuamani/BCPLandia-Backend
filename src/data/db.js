const data = {
  users: [
    { id: 1, name: "Diana", age: 25 },
    { id: 2, name: "Jackeline", age: 30 },
  ],
  stories: [
    { id: 1, title: "Juana y su viaje soñado", userId: 1 },
    { id: 2, title: "Ana y su casa propia ", userId: 2 },
    { id: 3, title: "Lucia y su negocio de postres ", userId: 3 },
    { id: 4, title: "Maria y su Educacion Univsesitaria ", userId: 4 },
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
          explanation: "Riesgo de perdida pero control de gasto.",
        },
        {
          answer: "Tarjeta de crédito",
          explanation: "Pago seguro, pero necesitas saldo en cuenta.",
        },
        {
          answer: "Tarjeta de débito",
          explanation: "Opción válida si pagas a fin de mes sin intereses.",
        },
        {
          answer: "Yape",
          explanation: "Puedes usar Yape, es rápido y seguro.",
        },
      ],
    },
  ],
  financial_actions: [
    {
      id: 1,
      name: "Tarjeta de crédito",
      url: "",
    },
    {
      id: 2,
      name: "Tarjeta de débito",
      url: "",
    },
    {
        id: 3,
        name: "Yape",
        url: "",
      },
  ],
  user_wallet: [
    {
      userId: 1,
      totalCoints: 0,
    },
  ],
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
