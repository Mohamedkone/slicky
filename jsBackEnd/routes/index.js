const { Router } = require('express');
const router = Router();
// const dbCtrl = require("./controller")
const controllers = require('../controllers')


// router.get('/', controllers.trial)
router.post('/', controllers.addtrys)

module.exports = router