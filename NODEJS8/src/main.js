const express = require("express");
const app = express();


//localhost:3000/ :: URL :: API :: REST API
//localhost:3000/?username=Shweta&id=12
app.get("/", (req, res) => {

    const id = req.query.id;
    const username = req.query.username;

    const json = { id: 1, title: "sayali mankar" };
    res.json(json);
});

app.get("/search", (req, res) => {
    const json = { id: 100, title: "i am search API" };
    res.json(json);
});

app.listen(3001);