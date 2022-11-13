const express = require("express");
const mongoose = require("mongoose");
const JobPost = require("./Jobpost");
const Users = require("./Users");

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://root:root@technoweit.rhok0bj.mongodb.net/jobs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB server Connected.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


app.get("/all", (req, res) => {
    Users.find()
        .then((posts) => {
            res.status(200).json(posts)
        }).catch((err) => {
            res.status(500).send(err)
        });
});

app.get("/add",(req,res)=>{
    const usr=new Users({
        name:"Harshal",
        age:25
    });
    usr.save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)     
    });
})

app.get("/", (req, res) => {
    res.send("Hi...");
})


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});