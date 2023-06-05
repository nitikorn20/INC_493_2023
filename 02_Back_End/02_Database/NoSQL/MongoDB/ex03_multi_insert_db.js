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

        // Array of user documents to insert
        const users = [
            { name: 'Paul Jude', email: 'pauljude@example.com', age: 19 },
            { name: 'Jane Smith', email: 'janesmith@example.com', age: 25 },
            { name: 'Bob Johnson', email: 'bobjohnson@example.com', age: 35 }
        ];

        // Insert multiple user documents
        User.insertMany(users)
            .then(() => {
                console.log('Users inserted successfully');
            })
            .catch((err) => {
                console.error('Error inserting users:', err);
            })
            .finally(() => {
                // Close the MongoDB connection
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });