exports.omdb = function(movieName) {
  var keys = require("./keys.js");
  var printToFile = require("./printToFile.js");

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + keys.omdbKey.api;

  var request = require("request");

  request(queryUrl, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      movie = JSON.parse(body)
      if (!movie.Title) {
        console.log("This movie does not exist");
      } else {
        printToFile.printToFile("Movie-This");
        printToFile.printToFile("Title: " + movie.Title);
        printToFile.printToFile("Year: " + movie.Year);
        printToFile.printToFile("Rating: " + movie.Ratings[0].Value);
        printToFile.printToFile("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
        printToFile.printToFile("Country: " + movie.Country);
        printToFile.printToFile("Languages: " + movie.Language);
        printToFile.printToFile("Plot: " + movie.Plot);
        printToFile.printToFile("Actors: " + movie.Actors);
        console.log("------------------------------------------");
        printToFile.endCurrentCommand();
      }
    }
  })
}