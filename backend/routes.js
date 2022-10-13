const {Router} = require('express');
const controller = require('./controller')

//Set the routes to take here

const router =  Router();

router.get('/interviewers/:dayOfWeek', controller.getInterviewers);

router.get('/days', (req, res) =>{
  res.send('days')
})

module.exports = router;