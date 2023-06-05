import express from "express";
import cors from "cors";
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

// Define your API endpoints

// GET request to fetch all resources
app.get("/resources", (req, res) => {
  // Logic to fetch all resources
  res.json({ message: "GET /resources" });
});

// GET request to fetch a specific resource
app.get("/resources/:id", (req, res) => {
  const resourceId = req.params.id;
  // Logic to fetch the specific resource
  res.json({ message: `GET /resources/${resourceId}` });
});

// Define the endpoint to handle the POST request
app.post("/resources", (req, res) => {
  const age = req.body.age;
  const name = req.body.name;
  const grade = req.body.grade;
  // Process the received data
  console.log(
    `Received POST request with name: ${name} ,grade: ${grade}and age: ${age}`
  );
  // Send a response
  res.json({ message: "POST request received successfully" });
});

// PUT request to update a specific resource
app.put("/resources/:id", (req, res) => {
  const resourceId = req.params.id;

  const age = req.body.age;
  const name = req.body.name;
  const grade = req.body.grade;
  // Process the received data
  console.log(
    `Received PUT request with name: ${name} ,grade: ${grade}and age: ${age}`
  );
  // Logic to update the specific resource
  res.json({ message: `PUT /resources/${resourceId}` });
});

// PATCH request to partially update a specific resource
app.patch("/resources/:id", (req, res) => {
  const resourceId = req.params.id;

  const grade = req.body.grade;
  // Process the received data
  console.log(`Received PATCH request with grade: ${grade}`);
  // Logic to partially update the specific resource
  res.json({ message: `PATCH /resources/${resourceId}` });
});

// DELETE request to delete a specific resource
app.delete("/resources/:id", (req, res) => {
  const resourceId = req.params.id;
  // Logic to delete the specific resource
  res.json({ message: `DELETE /resources/${resourceId}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(
    `\nOpen a web browser and go to http://localhost:${PORT} or http://127.0.0.1:${PORT}`
  );
});
