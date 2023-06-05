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

    /* one condition */
    const condition = "age > 17"; // Example condition

    const command = `SELECT * FROM students WHERE ${condition}`;

    /* multiple condition */
    
    // const condition1 = "age > 17"; //condition 1
    // const condition2 = "grade > 60"; //condition 2
    // const command = `SELECT * FROM students WHERE ${condition1} AND ${condition2}`;

    client
      .query(command)
      .then((result) => {
        console.log("Selected data:", result.rows);
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
