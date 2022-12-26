const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static("static"));

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/templates/index.html"));
});

app.use("/", router);
app.listen(process.env.port || 3000);

console.log(
    `Starting up express, serving ./\n\nAvailable on:\nhttp://localhost:3000`
);
