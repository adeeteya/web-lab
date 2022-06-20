const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/add", (req, res) => {
    var first = Number(req.query.first);
    var second = Number(req.query.second);
    var result = first + second;
    console.log("result is:" + result);
    res.json({ "result": result });
});

app.get("/subtract", (req, res) => {
    var first = Number(req.query.first);
    var second = Number(req.query.second);
    var result = first - second;
    console.log("result is:" + result);
    res.json({ "result": result });
});

app.get("/multiply", (req, res) => {
    var first = Number(req.query.first);
    var second = Number(req.query.second);
    var result = first * second;
    console.log("result is:" + result);
    res.json({ "result": result });
});

app.get("/divide", (req, res) => {
    var first = Number(req.query.first);
    var second = Number(req.query.second);
    var result = first / second;
    console.log("result is:" + result);
    res.json({ "result": result });
});

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server started at http://localhost:3000/");
});