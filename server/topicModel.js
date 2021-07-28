const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://jaeryu:asdzxc90@cluster0.hgz8q.mongodb.net/meetingless?retryWrites=true&w=majority';

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
  message: {
    name : String,
    comment : String,
  }
});

module.exports = mongoose.model('TopicModel', TopicSchema);
