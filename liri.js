// NPM Requirements

var Spotify = require('node-spotify-api');
var axios = require("axios");
var env = require('dotenv').config();
 

 
spotify.search({ type: 'artist', query: params[1] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data);
console.log("Spotify is working")
});

//// Initialize Axios

// Make a request for a user with a given ID
axios.get()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//// dotenv

require('dotenv').config();