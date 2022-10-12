const {Router} = require('express');
const controller = require('./controller');

//Set the routes to take here

const router =  Router();


router.get('/days', controller.getDays);

module.exports = router;