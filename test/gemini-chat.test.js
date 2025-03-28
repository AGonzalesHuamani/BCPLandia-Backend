const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { ConnectionGeminiChat } = require("../src/service/gemini-chat");
// const { ConnectionGeminiChat } = require("../service/gemini-chat");

dotenv.config();

jest.mock("@google/generative-ai"); // Mockeamos el módulo para evitar llamadas reales

describe("ConnectionGeminiChat", () => {
  beforeEach(() => {
    process.env.GEMINI_API_KEY = "test_api_key";
  });

  test("debe lanzar un error si no hay API key", async () => {
    delete process.env.GEMINI_API_KEY; // Simula que falta la clave
    await expect(ConnectionGeminiChat("Hola", [])).rejects.toThrow(
      "La clave de API GEMINI_API_KEY no está definida en el archivo .env"
    );
  });

  test("debe lanzar un error si el mensaje está vacío", async () => {
    await expect(ConnectionGeminiChat("", [])).rejects.toThrow("Not exist message");
  });

  test("debe llamar a la API de Gemini correctamente", async () => {
    const mockStartChat = jest.fn().mockResolvedValue({ response: "Hola, ¿cómo te ayudo?" });
    GoogleGenerativeAI.mockImplementation(() => ({
      getGenerativeModel: jest.fn().mockReturnValue({
        startChat: mockStartChat,
      }),
    }));

    const response = await ConnectionGeminiChat("¿Qué es una tarjeta de crédito?", []);
    expect(mockStartChat).toHaveBeenCalled();
    expect(response).toBeDefined();
  });

  test("debe manejar errores en la API", async () => {
    GoogleGenerativeAI.mockImplementation(() => {
      throw new Error("Error processing message");
    });

    await expect(ConnectionGeminiChat("Hola", [])).rejects.toThrow("Error processing message");
  });
});
