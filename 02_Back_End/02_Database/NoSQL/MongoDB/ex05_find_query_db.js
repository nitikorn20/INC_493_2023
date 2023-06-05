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

        /**
        * Define the query 
        *  -operator:$gte = Matches values that are greater than or equal to a specified value.
        * 
        *## https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
        */

        let query = { age: { $gte: 30 } }; // find data :age >= 30
        //let query = { age: { $gt: 17, $lt: 66 } }; // find data :age > 17 and < 30
        //let query = { name: { $eq: "Jane Smith" }, age: { $gt: 17, $lt: 66 } }; // find data :age > 17 & < 30 and name = Jane Smith

        // Retrieve user documents matching the query
        User.find(query)
            .then((users) => {
                console.log('Query Recive:', users);
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