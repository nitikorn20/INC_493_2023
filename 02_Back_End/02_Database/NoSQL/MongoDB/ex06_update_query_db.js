import mongoose from 'mongoose';



// Define a Database Name
const DBname = 'KMUTT'

// Connection URL
const url = 'mongodb://127.0.0.1:27017/' + DBname;

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        //Define the query 

        let query = { name: { $eq: "Bob Johnson" } }; // find data :name = "Bob Johnson"
        // Define the update
        const update = { $set: { age: 40, email: " bobjohnson@gmail.com" } }; // updata age of Bob to 40 , email to bobjohnson@gmail.com

        // Retrieve user documents matching the query

        User.updateOne(query, update)
            .then((users) => {
                console.log('Update :', users);
                console.log("=========================================");
            })
            .catch((err) => {
                console.error('Error retrieving users:', err);
            }).finally(() => {
                // Close the MongoDB connection
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });