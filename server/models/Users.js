const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    item_name : String,
    description : String,
    link : String,
    priority : String,
    date : String
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel