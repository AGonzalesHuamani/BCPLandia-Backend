const express = require('express');
const userRouter = require('./user.route');
const geminiRouter = require('./gemini.chat.route');
const miniStoryRouter = require('./miniStory.route');

const router = express.Router()

router.use('/users', userRouter)
router.use('/chat',geminiRouter)
router.use('/miniStory',miniStoryRouter)

module.exports = router;