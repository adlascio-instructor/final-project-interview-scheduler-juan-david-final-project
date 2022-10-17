const express = require("express");
const app = express();
const port = 8000;
const routes = require("./backend/routes");
const cors = require("cors");

const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:3000"],
  },
}); 

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("book-interview", (obj) => {
    console.log('on server-side book appointment socket')
    console.log(obj)
    io.emit("book-interview", obj);
  });

  socket.on("cancel-interview", (data) => {
    io.emit("cancel-interview", data);
  });
});

app.use(express.json());
app.use(cors());

//Add routes to use;
app.use("/", routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
