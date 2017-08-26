var keys = require("./keys");
var fs = require("fs");

exports.spotify = {
  display: function(song) {
    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify({
      id: keys.spotifyKeys.id,
      secret: keys.spotifyKeys.secret
    });
     
    spotify.search({ type: 'track', query: song }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var song = data.tracks.items
      console.log("--------------------------------")
      console.log("Artist Name: " + data.tracks.items[0].artists[0].name)
      console.log("Song Name: " + data.tracks.items[0].name)
      console.log("Preview URL: " + data.tracks.items[0].preview_url);
      console.log("Album Name: " + data.tracks.items[0].album.name);
    });    
  },
}