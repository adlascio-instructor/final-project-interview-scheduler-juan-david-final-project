const { Router } = require("express");
const controller = require("./controller");

//Set the routes to take here

const router = Router();

router.get("/interviewers/:dayOfWeek", controller.getInterviewers);
router.get("/appointments/:dayOfWeek", controller.getAppointments);
router.post("/appointment", controller.postAppointment);
router.post('/deleteAppointment', controller.deleteAppointment);

router.get("/days", (req, res) => {
  res.send("days");
});

module.exports = router;
