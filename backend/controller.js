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

module.exports = {
  getInterviewers,
}