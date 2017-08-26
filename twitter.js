exports.twitter = {
  display: function() {
    var twitterKey = require('./keys')
    var Twitter = require('twitter');
 
    var client = new Twitter({
      consumer_key: twitterKey.twitterKeys.consumer_key,
      consumer_secret: twitterKey.twitterKeys.consumer_secret,
      access_token_key: twitterKey.twitterKeys.access_token_key,
      access_token_secret: twitterKey.twitterKeys.access_token_secret
    });
     
    var params = {screen_name: 'realDonaldTrump'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for(var i=tweets.length-1; i>=0; i--) {
          console.log("-----------------------------")
          console.log("Tweet: " + tweets[i].text);
          var date = tweets[i].created_at.split(" ");
          console.log("Date: " + date[0] + ", " + date[1] + " " + date[2] + ", " + date[5] + " at " + date[3]);
        }
      }
    });
  }
}