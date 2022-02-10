
const {RegistrationL} = require('../models')

const trial = async (req, res) =>{
    try {
      let genre = await RegistrationL.find();
      console.log(genre)
      return res.status(200).json(genre);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}
const trys = async (req, res) =>{
    try {
      let trys = await RegistrationL.insertMany({"name": "testing"});
    //   console.log(try)
      return res.status(200).json(trys);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}

module.exports ={
    trial,
    trys
}