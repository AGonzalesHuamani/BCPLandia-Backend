const express = require('express');
const router = require("./routes");
const cors = require("cors")


const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World!");});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});