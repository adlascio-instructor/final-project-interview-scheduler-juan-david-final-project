const Pool = require('pg').Pool

//Edit database name after defining, and password for psql 
const pool = new Pool({
  user: "dawe",
  host: "localhost",
  database: "final_project_interview",
  password: "",
  port: 5432,
});

module.exports = pool;