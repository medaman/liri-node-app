exports.display = function(movieName) {
  var keys = require("./keys.js")

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + keys.omdbKey.api;

  var request = require("request");

  request(queryUrl, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      movie = JSON.parse(body)
      if (!movie.Title) {
        console.log("This movie does not exist");
      } else {
        console.log("Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("Rating: " + movie.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
        console.log("Country: " + movie.Country);
        console.log("Languages: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        console.log("------------------------------------------");
      }
    }
  })

}