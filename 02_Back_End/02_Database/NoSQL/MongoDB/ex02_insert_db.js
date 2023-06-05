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

        // Create a new user document
        let user = new User({
            name: 'Red',
            email: 'Red@example.com',
            age: 30
        });


        /* 
        For details on a specific method, including syntax and examples, 
            https://www.mongodb.com/docs/manual/reference/method/js-collection/ 
        */
       
        // Save the user document to the database
        user.save()
            .then(() => {
                console.log('User inserted successfully');
            })
            .catch((err) => {
                console.error('Error saving user:', err);
            })
            .finally(() => {
                // Close the MongoDB connection
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });