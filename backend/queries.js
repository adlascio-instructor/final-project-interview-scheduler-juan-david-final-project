//Write all queries inside of here

const getInterviewers =
  'SELECT available_interviewers.id, available_interviewers.interviewer_id, available_interviewers.day_id, interviewers.name, interviewers.avatar FROM available_interviewers JOIN interviewers ON available_interviewers.interviewer_id = interviewers.id JOIN days on available_interviewers.day_id = days.id WHERE days.name = $1';

const getAppointments = 'SELECT appointments.id, appointments.time, interviews.student, interviewers.id AS interviewer_id,interviewers.name AS interviewer, interviewers.avatar FROM appointments LEFT JOIN interviews ON interviews.appointment_id = appointments.id LEFT JOIN interviewers ON interviews.interviewer_id = interviewers.id LEFT JOIN days ON appointments.day_id = days.id WHERE days.name = $1 ORDER BY appointments.id';

const postAppointment = "INSERT INTO interviews (student, interviewer_id, appointment_id) VALUES ($1, $2, $3)";

const deleteAppointment = 'DELETE FROM interviews WHERE appointment_id = $1';

const getDays = "SELECT * FROM days"

module.exports = {
  getDays,
  getInterviewers,
  getAppointments, 
  postAppointment,
  deleteAppointment
};
