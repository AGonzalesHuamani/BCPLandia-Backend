const express = require("express");
const miniStoryController = require("../controller/miniStory.controller");

const router = express.Router();

router.post("/view-answer", miniStoryController.viewAnswerExplanation);

module.exports = router;
