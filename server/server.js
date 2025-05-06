const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
    console.log('Hello World!');
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});