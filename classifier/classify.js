const natural = require('natural');

function classify (text) {

natural.BayesClassifier.load('./classifier/feedback-classifier.json', null, function(err, classifier) {
   return classifier.classify(text);
});

}

module.exports.classify = classify;
