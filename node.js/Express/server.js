const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.status(200).send("Hello world")
})

app.post("/", (req,res) => {
    res.status(200).send("Hey Buddy!!")
})

app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000")
})