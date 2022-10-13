const { Router } = require("express");
const controller = require("./controller");

//Set the routes to take here

const router = Router();


router.get('/days', controller.getDays);
router.get("/interviewers/:dayOfWeek", controller.getInterviewers);
router.get("/appointments/:dayOfWeek", controller.getAppointments);
router.post("/appointment", controller.postAppointment);
router.post('/deleteAppointment', controller.deleteAppointment);

module.exports = router;
