const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

// const mongoURI =
//   process.env.NODE_ENV === 'test'
//     ? 'mongodb://localhost/unit11test'
//     : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

app.set('view engine', 'ejs');

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.listen(PORT); //listens on port 3000 -> http://localhost:3000/

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;