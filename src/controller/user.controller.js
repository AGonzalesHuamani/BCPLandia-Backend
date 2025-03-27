const data = require("../data/db")
const userController = {
  getUsers: (req, res) => {
    res.json(data.users);
  },
  getMiniStoriesByStoryId: (req, res) => {
    const { storyId } = req.params; // Obtener el parámetro de la URL
    const storyIdNumber = parseInt(storyId, 10); // Convertir a número

    // Filtrar las minihistorias que coincidan con el storyId
    const miniStories = data.miniStories.filter(miniStory => miniStory.storyId === storyIdNumber);

    // Verificar si se encontraron minihistorias
    if (miniStories.length === 0) {
      return res.status(404).json({ message: `No se encontraron minihistorias para storyId ${storyId}` });
    }

    res.json(miniStories);
  },
};

module.exports = userController;
