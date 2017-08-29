var keys = require("./keys");
var fs = require("fs");
var printToFile = require("./printToFile.js");

exports.spotify = function(song) {
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
  });
   
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var song = data.tracks.items[0];
    printToFile.printToFile("Spotify-This-Song");
    printToFile.printToFile("Song Name: " + song.name)
    printToFile.printToFile("Preview URL: " + song.preview_url);
    printToFile.printToFile("Album Name: " + song.album.name);
    printToFile.printToFile("Artist Name: " + song.artists[0].name);
    console.log("------------------------------------------");
    printToFile.endCurrentCommand();
  });
}