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

    const command = "SELECT * FROM students";

    client
      .query(command)
      .then((result) => {
        console.log("Selected data:", result.rows);
        console.log("Length data:", result.rows.length);
      })
      .catch((error) => {
        console.error("Error selecting data", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
