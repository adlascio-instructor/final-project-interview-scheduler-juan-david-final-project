const pool = require("../db");
const queries = require("./queries");

//Write all controller functions inside of here

const getData = (req, res) => {
  pool.query(queries.getData, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getDays = (req, res) => {
  pool.query(queries.getDays, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};


module.exports = {
  getData,
  getDays
}