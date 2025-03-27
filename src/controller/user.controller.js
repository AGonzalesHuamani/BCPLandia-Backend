const data = require("../data/db")
const userController = {
  getUsers: (req, res) => {
    res.json(data.users);
  },
};

module.exports = userController;
