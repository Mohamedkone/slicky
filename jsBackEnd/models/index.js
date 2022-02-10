const mongoose = require('mongoose')
const Registration = require('./registration.js')

const RegistrationL = mongoose.model('Registration', Registration)

module.exports = {
    RegistrationL
}