import express from 'express';
import cors from 'cors';
const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({ extended: true }));
const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`\nOpen a web browser and go to http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
});


app.get('/', function (req, res, next) {
    res.send('Welcome to the backend programming world!');
});

app.get('/Hello', function (req, res, next) {
    res.send('This is a text response');
});

app.get('/H1', function (req, res, next) {
    res.send('<h3 style="color:green">Header1</h3>');
});

app.get('/temp', function (req, res, next) {
    let temp = 35 + Math.random() * 40;
    res.send(`<h3>Machine Temperature: <span style="color:orange">${temp.toFixed(3)}</span></h3>`);
});
