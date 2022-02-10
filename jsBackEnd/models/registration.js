const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Registration = new Schema(
{
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    email:{type: String, required:true},
    number:{type: Number, required:true},
    password:{type: String, required:true},
    uid:{type: String, required:false},
    isverifiedemail:{type: Boolean, required:false},
    isverifiednumber:{type: Boolean, required:false},
},
{timestamps:true}

)

module.exports = Registration