const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "kmutt",
  port: 5432,
});

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    const data = [20, 95.5, 'Red Fork'];
    const command = `
      UPDATE students
      SET age = $1, grade = $2
      WHERE name = $3
    `;

    client
      .query(command, data)
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
