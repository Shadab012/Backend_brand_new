require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.get('/getchai', (req, res) => {
    res.send('chai lelo.......!');
  });
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});