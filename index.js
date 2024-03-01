const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/mongoose");
const BlackCofferData = require("./models/BlackCofferData");

app.use(express.json());

//use cors

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var dataCounter = 0;

app.get("/data", async (req, res) => {
  try {
    console.log("Data retrieved: ", dataCounter, " times.");
    dataCounter++;
    const data = await BlackCofferData.find();
    res.send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
