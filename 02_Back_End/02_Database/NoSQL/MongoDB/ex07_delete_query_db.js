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
        let query = { age: { $eq: 30 } }; // age = 30

        
        // Delete user documents matching the query

        User.deleteOne(query)
            .then((result) => {
                console.log(`${result.deletedCount} user(s) deleted`);
            })
            .catch((err) => {
                console.error('Error deleting users:', err);
            })
            .finally(() => {
                // Close the MongoDB connection
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });