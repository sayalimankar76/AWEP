
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dbadduser = require("./add");

app.get("/adduserr", async (req, res) => {
    try {
        const input = req.query;

        await dbadduser.addUser(input);
        res.json({ message: "success" });
    } catch (err) {
        res.json({ message: "failure" });
    }
});


app.post("/adduser", async (req, res) => {
    try {
        const input = req.body; // before doing this

        await dbadduser.addUser(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});



app.listen(3000);