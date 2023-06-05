const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432, // default PostgreSQL port
});

client
  .connect() //function Connect
  .then(() => {
    console.log("Connected to the database");
    // You can now execute database queries
    
    client.end();// Close your connection DB
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
