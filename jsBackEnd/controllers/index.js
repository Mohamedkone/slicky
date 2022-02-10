
const {RegistrationL} = require('../models');
const Registration = require('../models/registration');

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
      let trys = await RegistrationL.insertMany({"firstname": "testing","lastname":"Kone","email":"mohamedkone@outlook.fr","number":6132625276,"password":"ok","uid":"kfiowenf397834re","isverifiedemail":false,"isverifiednumber":false});
    //   console.log(try)
      return res.status(200).json(trys);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}
const addtrys = async (req, res) => {
    try {
        const comments = await new RegistrationL(req.body)
        await comments.save()
        return res.status(201).send(post)
    } catch (error) {
        return res.status(500)
    }
}

module.exports ={
    trial,
    trys,
    addtrys
}