const { Router } = require('express');
const router = Router();
// const dbCtrl = require("./controller")
const controllers = require('../controllers')


// router.get('/', controllers.trial)
router.get('/', controllers.trial)

module.exports = router