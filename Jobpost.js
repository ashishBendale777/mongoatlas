const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({

    _id:String,
    desc:String,
    exp: Number,
    profile:String,
    techs:Array

})
module.exports = mongoose.model('jobspost',PostSchema)