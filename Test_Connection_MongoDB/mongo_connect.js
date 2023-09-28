import mongoose from 'mongoose';

// Connection URL
const url = 'mongodb://127.0.0.1:27017/';

// Connect to the server
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Perform database operations here

    // Close the connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
