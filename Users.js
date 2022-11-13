const mongoose = require("mongoose")

const UserSchems = mongoose.Schema({

    name:String,
    age: Number
})
module.exports = mongoose.model('Users',UserSchems)