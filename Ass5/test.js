const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
