// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let travelEntries = [];

app.post('/save-entry', (req, res) => {
  const newEntry = req.body;
  travelEntries.push(newEntry);
  res.status(200).send('Entry saved successfully.');
});

app.get('/get-entries', (req, res) => {
  res.status(200).json(travelEntries);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
