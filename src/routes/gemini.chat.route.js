const express = require('express');
const { postResponseChat } = require('../controller/gemini.chat.controller');

const chatRouter = express.Router();

chatRouter.post('/', postResponseChat);

module.exports = chatRouter;
