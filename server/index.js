const express = require("express")
const { json } = require("body-parser")
const cors = require("cors")
//const apiHome = require("./apiHome")
const controller = require("./controllers/control")

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get('/ticker', controller.getApiData);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) 