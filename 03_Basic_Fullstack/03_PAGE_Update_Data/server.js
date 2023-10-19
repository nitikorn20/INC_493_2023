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

app.get("/student/:name", async (req, res) => {
  const name_enter = req.params.name;
  const query = { name: { $eq: name_enter } };
  let returndata = await student2023Model.find(query);
  res.json(returndata);
});

app.put("/student/:name", async (req, res) => {
  const name_enter = req.params.name;
  const payload = req.body;

  const filter = { name: name_enter };

  student2023Model
    .findOneAndUpdate(filter, payload)
    .then(() => {
      console.log("Student update successfully");
    })
    .catch((err) => {
      res.send("Error");
    })
    .finally(() => {
      // Close the MongoDB connection
      res.send("OK");
    });

  //   await student2023Model.findOneAndUpdate(filter,payload);
  //   res.send("OK");
});
// http://127.0.0.1:9000/
app.listen(port, () => {
  console.log("Server Start on port " + port);
});
