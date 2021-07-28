const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

const mongoURI = 'mongodb+srv://jaeryu:asdzxc90@cluster0.hgz8q.mongodb.net/meetingless?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://localhost/meetingless';

// const mongoURI =
//   process.env.NODE_ENV === 'test'
//     ? 'mongodb://localhost/unit11test'
//     : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
})

// Schema
const Schema = mongoose.Schema;
const TopicSchema = new Schema({
  topic: String,
  body: String,
  message: {
    name : String,
    comment : String,
  }
});

// Model
const TopicPost = mongoose.model('TopicPost', TopicSchema);

// test data to save
const data = {
  topic: 'First test',
  body: 'Test test',
};

// .save();
const newTopicPost = new TopicPost(data);
newTopicPost.save((err) => {
  if (err) {
    console.log('Oops error');
  } else {
    console.log('Data has been saved!!');
  }
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.listen(PORT); //listens on port 3000 -> http://localhost:3000/
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
}) ;


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;