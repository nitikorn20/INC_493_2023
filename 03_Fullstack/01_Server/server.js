import express from "express";
import cors from "cors";
import * as db from "./db_config.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
const PORT = 3300;

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/students", db.getStudents);
app.get("/student/:id", db.getStudentByID);
app.post("/student", db.createStudent);
app.put('/student/:id', db.updateStudent)
app.delete('/student/:id', db.deleteStudent)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(
    `\nOpen a web browser and go to http://localhost:${PORT} or http://127.0.0.1:${PORT}`
  );
});
