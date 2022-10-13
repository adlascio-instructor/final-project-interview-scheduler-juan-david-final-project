const pool = require("../db");
const queries = require("./queries");

//Write all controller functions inside of here

const getInterviewers = (req, res) => {
  const dayOfWeek = req.params.dayOfWeek;
  pool.query(queries.getInterviewers, [dayOfWeek], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getAppointments = (req, res) => {
  const dayOfWeek = req.params.dayOfWeek;
  pool.query(queries.getAppointments, [dayOfWeek], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const postAppointment = (req, res) => {
  const { student, interviewer_id, appointment_id } = req.body;
  pool.query(
    queries.postAppointment,
    [student, interviewer_id, appointment_id],
    (error, result) => {
      if (error) throw error;
      res.status(200);
    }
  );
};

const deleteAppointment = (req, res) => {
  const { appointment_id } = req.body;
  pool.query(queries.deleteAppointment, [appointment_id], (error, result) => {
    if (error) throw error;
    res.status(200);
  });
};

const getDays = (req, res) => {
  pool.query(queries.getDays, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};


module.exports = {
  getDays,
  getInterviewers,
  getAppointments,
  postAppointment,
  deleteAppointment,
};
