const { ConnectionGeminiChat } = require("../service/gemini-chat");


const conversationHistory = [];

exports.postResponseChat = async(req, res) => {
    const userMessage = req.body?.message;

    if (!userMessage) {
        res.status(400).json({ error: 'Message is required' });
        return;
    }



    try {
        const connectionGemini = await ConnectionGeminiChat(userMessage, conversationHistory);
        const result = await connectionGemini.sendMessage(userMessage);
        const response = result.response;
        const modelReply = response.text();

        conversationHistory.push(
            { role: 'user', parts: [{ text: userMessage }] },
            { role: 'model', parts: [{ text: modelReply }] }
        );

        res.json({ response: modelReply });
    } catch (error) {
        console.error('Error communicating with Gemini:', error);
        if (error instanceof Error && error.message.includes("SAFETY")) {
            res.status(400).json({
                message:
                    "It seems your question contains a sensitive topic. Could you please rephrase it in a more general or softer way so I can assist you better?",
            });
        } else {
            res.status(500).json({ error: "Error processing the request" });
        }
    }
};
