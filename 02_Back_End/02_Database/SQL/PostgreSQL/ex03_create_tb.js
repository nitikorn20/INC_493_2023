const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "kmutt",
  port: 5432, // default PostgreSQL port
});

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    const command = `
      CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INTEGER,
        grade FLOAT
      )
    `;

    client
      .query(command)
      .then(() => {
        console.log("Table created successfully");
      })
      .catch((error) => {
        console.error("Error creating the table", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
