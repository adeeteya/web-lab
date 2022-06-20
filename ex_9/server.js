var express = require('express')
var app = express();
app.get("/", (req, res) => res.send("Welcome to the home page"));
app.get("/about", (req, res) => res.send("Welcome to the about page"));
app.get("/contact", (req, res) => res.send("Welcome to the contact page"));
app.get("/name/:name", (req, res) => res.send("Your name is: " + req.params.name));
app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server has Started in http://localhost:3000/");
});