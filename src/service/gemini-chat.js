const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const ConnectionGeminiChat = async (message, history) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error(
      "La clave de API GEMINI_API_KEY no está definida en el archivo .env"
    );
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  if (!message) {
    throw new Error("Not exist message");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
      maxOutputTokens: 500,
      temperature: 0.7,
    };

    const chat = model.startChat({
      history: [
        ...history,
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      systemInstruction: {
        role: "assistant",
        parts: [
          {
            text: `
                      Eres un asistente virtual especializada en educación financiera y banca. 
                      Tu objetivo es ayudar a las usuarias a entender conceptos financieros, resolver dudas bancarias y guiarlas en el uso de herramientas digitales.
                  
                      **Cómo debes responder:**
                      - Usa un tono **amigable, cercano y fresco**, como una asesora de confianza.
                      - **No uses tecnicismos innecesarios**, pero puedes profundizar si la usuaria lo necesita.
                      - Usa expresiones cotidianas peruanas como "tranqui, te explico", "chévere", "te sale a cuenta".
                      - **No hables de temas ajenos a finanzas** (clima, política, deportes, etc.).
                      - **Nunca pidas ni compartas información confidencial**.
                  
                      **Lo que no puedes hacer:**
                      - No dar consejos de inversión personalizados.
                      - No ofrecer información de cuentas bancarias o datos privados.
                      `,
          },
        ],
      },
      generationConfig,
    });

    return chat;
  } catch (error) {
    throw new Error("Error processing message");
  }
};

module.exports = { ConnectionGeminiChat };
