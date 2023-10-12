//  API
const express = require("express");
const cors = require("cors");

// DB
const mongoose = require("mongoose");

// Parameter API
const app = express();
const port = 9000;

// Parameter DB
const DBname = "KMUTT";
const url_db = "mongodb://127.0.0.1:27017/" + DBname;

const Schema = mongoose.Schema;
const Model = "student2023";

const studentSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { timeseries: true, versionKey: false }
);

const student2023Model = mongoose.model(Model, studentSchema);

mongoose.connect(url_db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", (err) => {
  console.log.error("MongoDB error", err);
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/1students/", async (req, res) => {
  let returndata;
  student2023Model
    .find()
    .then((_students) => {
      returndata = _students;
    })
    .catch((err) => {
      console.error("Error retrieving users:", err);
      res.send("Error");
    })
    .finally(() => {
      res.send(returndata);
    });
});

app.get("/2students", async (req, res) => {
  let returndata = await student2023Model.find();
  res.json(returndata);
});

app.get("/student/:name", async (req, res) => {
  const name_enter = req.params.name;
  const query = { name: { $eq: name_enter } };
  let returndata = await student2023Model.find(query);
  res.json(returndata);
});

app.get("/student/", async (req, res) => {
  const name_enter = req.body.name;
  const age_enter = req.body.age;
  const email = req.body.email;
  console.log(name_enter);
  console.log(age_enter);
  console.log(email);
  res.send("AAAA");
});

// http://127.0.0.1:9000/
app.listen(port, () => {
  console.log("Server Start on port " + port);
});
