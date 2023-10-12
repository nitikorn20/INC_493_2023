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

app.post("/student/", async (req, res) => {
  const payload = req.body;
  const student_insert = new student2023Model(payload);
  student_insert
    .save()
    .then(() => {
      console.log("User inserted successfully");
    })
    .catch((err) => {
      res.send("Error");
    })
    .finally(() => {
      // Close the MongoDB connection
      res.send("OK");
    });

  //   await student_insert.save();
  //   res.send("OK");
});

app.get("/student/", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  res.send("AAAAA");
});

// http://127.0.0.1:9000/
app.listen(port, () => {
  console.log("Server Start on port " + port);
});
