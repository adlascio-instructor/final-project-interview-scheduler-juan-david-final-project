const Pool = require('pg').Pool

//Edit database name after defining, and password for psql 
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});

module.exports = pool;