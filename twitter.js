exports.twitter = function() {
  var twitterKey = require('./keys')
  var printToFile = require("./printToFile")
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: twitterKey.twitterKeys.consumer_key,
    consumer_secret: twitterKey.twitterKeys.consumer_secret,
    access_token_key: twitterKey.twitterKeys.access_token_key,
    access_token_secret: twitterKey.twitterKeys.access_token_secret
  });
   
  var params = {screen_name: 'medamanUCI'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      printToFile.printToFile("My-Tweets");
      for(var i=tweets.length-1; i>=0; i--) {
        printToFile.printToFile("Tweet: " + tweets[i].text);
        var date = tweets[i].created_at.split(" ");
        printToFile.printToFile("Date: " + date[0] + ", " + date[1] + " " + date[2] + ", " + date[5] + " at " + date[3]);
        console.log("------------------------------------------");
      }
      printToFile.endCurrentCommand();
    }
  });
}