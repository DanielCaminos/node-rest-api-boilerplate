const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController')

const HelloWorldCtrl = new (require('../controllers/helloWorld.controller'))();

router.route('/hello-world').get(HelloWorldCtrl.sayHi);


router.get('/users', userController.getAll);

module.exports = router;
