const natural = require('natural');
var classifier = new natural.BayesClassifier();

var jsonArray = require('./feedback-training.json');

for(i = 0; i < jsonArray.length; i++) {
  classifier.addDocument(JSON.stringify(jsonArray[i].Feedback), JSON.stringify(jsonArray[i].Category));
}

classifier.train();
classifier.save('classifier.json', function(err, classifier){});
