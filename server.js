const express = require("express");
const app = express();
const port = 8000;
const routes = require('./backend/routes');
const cors = require('cors')

app.use(express.json());
app.use(cors());

//Add routes to use; 
app.use('/', routes)

app.listen(port, () => console.log(`Server is running on port ${port}`));
