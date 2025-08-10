import express from "express";
//import router from "./routes/complaints.js";

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded(true));
server.use("/", express.static("public"));

server.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
