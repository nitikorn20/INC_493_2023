const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432, // default PostgreSQL port
});

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    const createDatabaseQuery = "CREATE DATABASE KMUTT";
    client
      .query(createDatabaseQuery)
      .then(() => {
        console.log("Database created successfully");
      })
      .catch((error) => {
        console.error("Error creating the database", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
