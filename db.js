const Pool = require('pg').Pool

//Edit database name after defining, and password for psql 
const pool = new Pool({
  user: "jccifuentes21",
  host: "localhost",
  database: "final_project_interview",
  password: "postgres",
  port: 5432,
});

module.exports = pool;