// import files and packages up here
const morgan = require('morgan')
const express = require('express')
const data = require('./data.json')
// body-parser is not necessary if only using GET requests

const PORT = process.env.PORT || 3000;

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('hey')
  res.status(200).send("ok")
  // res.sendStatus(200)
});

app.get('/data', (req, res) => {
  console.log('data')
  res.json(data);
});

// app.get('/data', (req, res) => {
//   console.log('hah!')
//   res.send()
// });

// finally export the express application
module.exports = app;
