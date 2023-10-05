import mongoose from "mongoose";

// Define a Database Name
const DBname = "KMUTT";

// Connection URL
const url = "mongodb://127.0.0.1:27017/" + DBname;

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // Retrieve all user documents and sort ascending
    // asc (ascending) , desc (descending)
    User.find()
      .sort({ age: "asc" }) //if you want to sort
      .limit(2) // if you want to limit data to query
      .then((users) => {
        console.log("All users:", users);
      })
      .catch((err) => {
        console.error("Error retrieving users:", err);
      })
      .finally(() => {
        // Close the MongoDB connection
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
