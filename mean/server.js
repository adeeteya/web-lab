const express = require('express');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'name': String,
    'age': Number
});
const Student = mongoose.model("Student", schema);

mongoose.connect("mongodb://localhost:27017/students", { "useNewUrlParser": true }).then(() => {
    const app = express();
    app.use(express.static("/views"));
    app.get('/', (req, res) => res.sendFile(__dirname + "/views/index.html"));

    app.get("/views/insert/", (req, res) => res.sendFile(__dirname + "/views/insert.html"));

    app.get('/listall', async (req, res) => {
        var studentsList = await Student.find({});
        res.json({ "studentsList": studentsList });
    });

    app.get('/insert', async (req, res) => {
        console.log(req.query.age);
        var newStudent = new Student({ "name": req.query.name, "age": req.query.age });
        await newStudent.save();
        res.send("inserted");
    });

    console.log("mongoose connected");
    app.listen(3000, function (err) {
        if (err) console.log(err);
        console.log("Server started at http://localhost:3000/");
    });
});