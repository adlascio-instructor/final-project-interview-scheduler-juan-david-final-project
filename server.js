const express = require("express");
const app = express();
const port = 8000;
const routes = require('./backend/routes');

app.use(express.json());

app.get('/', (req, res) =>{
  res.send("Hello World")
});

//Add routes to use; 
app.use('/routes', routes)

app.listen(port, () => console.log(`Server is running on port ${port}`));
