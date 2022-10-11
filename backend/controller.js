const pool = require("../db");
const queries = require("./queries");

//Write all controller functions inside of here

const getData = (req, res) => {
  pool.query(queries.getData, (error, result) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getData
}