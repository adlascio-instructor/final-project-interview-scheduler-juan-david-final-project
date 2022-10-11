const {Router} = require('express');

//Set the routes to take here

const router =  Router();

router.get('/', (req, res) =>{
  res.send("On routes")
})

module.exports = router;