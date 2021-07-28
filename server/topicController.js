const { model } = require('mongoose');
const TopicModel = require('./topicModel');

const topicController = {};

topicController.createTopic = (req, res, next) => {
  const topic = req.body;
  console.log('got into createTopic middleware with req.body = ' + topic);

  const newTopic = new TopicModel({
    topic : topic,
    message : {}
  });
  newTopic
    .save()
    .then((result) => {
      res.locals.topic = result;
      return next();
    })
    .catch((err) => {
      return next(err);
    })
};

module.exports = topicController;