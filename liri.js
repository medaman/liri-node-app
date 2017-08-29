var keys = require("./keys");
var twitter = require("./twitter");
var spotify = require("./spotify");
var omdb = require("./omdb");

var fs = require("fs");

var action = process.argv[2];

var useLiri = function() {
  if (action === "my-tweets") twitter.twitter();
  else if (action === "spotify-this-song") {
    if (!name) {
      name = "The Sign Ace of Base"
    }
    spotify.spotify(name);
  }
  else if (action === "movie-this") {
    if (!name) {
      name = "Mr. Nobody";
    }
    omdb.omdb(name);
  } else {
      console.log("That command does not exist.")
  }
}

if (action === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(",");
    
    action = dataArr[0];
    name = dataArr[1];
    useLiri();
  });

} else {
  
  var name = process.argv[3];

  for (var i=4; i < process.argv.length; i++) {
    name += " " + process.argv[i];
  }

  useLiri();
}