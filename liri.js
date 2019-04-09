require('dotenv').config();
var axios = require("axios");
var keys = require("./keys.js");
var request = require("request");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var Spotify1 = new Spotify(keys.Keys.spotify);

var input = process.argv.slice(3).join(" ");

var outputBands;

if (process.argv[2] == "concert" ) {
    console.log(input);
    if (!input) {input = "Disturbed";}
   
    var outputBands = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    request(outputBands, function (error, response, body) {
       if (!error && response.statusCode === 200){ 
        let result  =  JSON.parse(body);
        if (result.length > 0) {
            for (i=0; i < 1; i++){
        
        console.log("Venue :" + result[0].venue.name);
        console.log("Location :" + result[0].venue.city);
        console.log("Date of Event :" +  moment(result[0].datetime).format("MM/DD/YYYY"));
        };    
       }
       else {
            console.log("Currently not on Tour");
       };
        }; 
    });
}
if (process.argv[2] == "spotify") {
    console.log(input);
  if (!input) {input = "Overburdened";}

  Spotify1.search({ type: 'track', query: input, limit: '1'}, function(err, data) {
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var result = {
      "Band: "         : data.tracks.items[0].album.artists[0].name,
      "Album: "        : data.tracks.items[0].album.name,
      "Song: "         : data.tracks.items[0].name,
      "Preview Link: " : data.tracks.items[0].preview_url
    }
    console.log(result);
  });
  }
  

if (process.argv[2] == "imdb") {
    console.log(input);

    if (!input) {input = "The Dark Knight";}
  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
      
      var result = {
        "Title: " : response.data.Title,
        "Year: " : response.data.Year,
        "IMDbRating: " : response.data.imdbRating,
        "Rotten Tomatoes Rating: " : response.data.Ratings ? response.data.Ratings[1].Value : "",
        "Country: " : response.data.Country,
        "Language: " : response.data.Language,
        "Plot: " : response.data.Plot,
        "Actors: " : response.data.Actors
      }
      console.log(result);
    },
    function(error){
      console.log("error", error);
  });
}