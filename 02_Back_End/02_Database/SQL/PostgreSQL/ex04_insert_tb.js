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
      INSERT INTO students (name, age, grade)
      VALUES ('John Doe', 18, 90.5)
    `;

    client
      .query(command)
      .then(() => {
        console.log("Data inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting data", error);
      })
      .finally(() => {
        client.end();
        console.log("Disconnected from the database");
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

// client
//   .connect()
//   .then(() => {
//     console.log("Connected to the database");

//     const command = `
//       INSERT INTO students (name, age, grade)
//       VALUES ($1, $2, $3)
//     `;

//     client
//       .query(command, ["Red Fork", 17, 64.5])
//       .then(() => {
//         console.log("Data inserted successfully");
//       })
//       .catch((error) => {
//         console.error("Error inserting data", error);
//       })
//       .finally(() => {
//         client.end();
//         console.log("Disconnected from the database");
//       });
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });
