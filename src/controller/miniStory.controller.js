const data = require("../data/db");

const miniStoryController = {
  viewAnswerExplanation: (req, res) => {
    const { userId, miniStoryId, answer } = req.body;

    const miniStory = data.miniStories.find(ms => ms.id === miniStoryId);
    if (!miniStory) {
      return res.status(404).json({ message: "MiniHistoria no encontrada" });
    }

    const selectedOption = miniStory.options.find(opt => opt.answer === answer);
    if (!selectedOption) {
      return res.status(404).json({ message: "Respuesta no encontrada" });
    }

    let userWallet = data.user_wallet.find(wallet => wallet.userId === userId);
    if (!userWallet) {
      return res.status(404).json({ message: "Usuario no encontrado en la billetera" });
    }

    if (!userWallet.viewedAnswers) {
      userWallet.viewedAnswers = new Set();
    }

    if (userWallet.viewedAnswers.has(answer)) {
      return res.json({
        // message: "Ya has visto esta respuesta antes.",
        totalCoints: userWallet.totalCoints,
        explanation: selectedOption.explanation
      });
    }

    userWallet.totalCoints += selectedOption.coins;
    userWallet.viewedAnswers.add(answer);

    res.json({
      message: `Ganaste ${userWallet.totalCoints} monedas"`,
      totalCoints: userWallet.totalCoints,
      explanation: selectedOption.explanation
    });
  }
};

module.exports = miniStoryController;