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

    const command = `
      DELETE FROM students
      WHERE id = $1
    `;

    client
      .query(command, [1])
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
