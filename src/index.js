const express = require('express');
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(router);

const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});