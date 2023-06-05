import pkg from "pg";
const { Pool } = pkg;

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kmutt",
  password: "password",
  port: 5432,
});

const getStudents = (request, response) => {
  const command = "SELECT * FROM students ORDER BY id ASC";
  client
    .query(command)
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err.stack);
      throw err;
    });
};

const getStudentByID = (request, response) => {

  const id = parseInt(request.params.id);
  const condition = `id = ${id}`; // Example condition

  const command = `SELECT * FROM students WHERE ${condition}`;

  client
    .query(command)
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err.stack);
      throw err;
    });
};

const createStudent = (request, response) => {

  const { name, age, grade } = request.body

  client
    .query('INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING id', [name, age, grade])
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err.stack);
      throw err;
    })
}

const updateStudent = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, age, grade } = request.body

  client
    .query('UPDATE students SET name = $1, age = $2, grade = $3 WHERE id = $4', [name, age, grade, id])
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err.stack);
      throw err;
    })
}

const deleteStudent = (request, response) => {
  const id = parseInt(request.params.id)
  client
    .query('DELETE FROM students WHERE id = $1', [id])
    .then((res) => {
      response.status(200).json(res.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err.stack);
      throw err;
    })
}

export { getStudents, getStudentByID, createStudent, updateStudent, deleteStudent };
