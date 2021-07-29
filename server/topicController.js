const { model } = require('mongoose');
const TopicModel = require('./topicModel');

const topicController = {};

topicController.createTopic = (req, res, next) => {
  const topic = req.body.topic;
  const num = req.body.num;
  console.log('got into createTopic middleware with req.body = ' + topic);
  console.log(req.body);

  const newTopic = new TopicModel({
    num : num,
    topic : topic,
    message : []
  });
  newTopic
    .save()
    .then((result) => {
      res.locals.topic = result;
      console.log('successfully posted');
      return next();
    })
    .catch((err) => {
      return next(err);
    })
};

topicController.addInput = (req, res, next) => {
  const {input, name, num} = req.body;
  const newNum = Number(num);
  console.log('got into addInput middleware with user = ' + name + ' & input = ' + input);
  console.log(req.body);
  const inputToAdd = {
    upvote : 0,
    name : name,
    comment : input
  };
  TopicModel.findOneAndUpdate(
    {num : newNum}, 
    {$push: {message : inputToAdd}}, 
    (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log('successfully found and updated it')
        console.log (success);
        return next();
      }
    }); 
}

module.exports = topicController;