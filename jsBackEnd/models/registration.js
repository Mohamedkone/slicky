const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Registration = new Schema(
{
    name:{type: String, required:true},

},
{timestamps:true}

)

module.exports = Registration