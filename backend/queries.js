//Write all queries inside of here

const getData = "SELECT * FROM "; //change when database name is defined
const getInterviewers =
  'SELECT available_interviewers.id, available_interviewers.interviewer_id, available_interviewers.day_id, interviewers.name, interviewers.avatar FROM available_interviewers JOIN interviewers ON available_interviewers.interviewer_id = interviewers.id JOIN days on available_interviewers.day_id = days.id WHERE days.name = $1';

module.exports = {
  getData,
  getInterviewers,
};
