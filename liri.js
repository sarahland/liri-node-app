var action = process.argv[2];
// var value = process.argv[3]; (THIS ONLY TAKES IN ONE NODE ARGUMENT FOR THE 3RD NODE SO ADDED CODE BELOW)

// STORE ALL OF THE ARGUMENTS IN AN ARRAY
var nodeArgs = process.argv;

// CREATE AN EMPTY VARIABLE FOR HOLDING USERS INPUT VALUE
var value = "";

// LOOPS THROUGH ALL THE WORDS IN THE NODE ARGUMENT 
// DO A LOOP TO GET EVERYTHING AFTER THE INDEX OF 2 NODE ARGUMENT
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        value = value + "+" + nodeArgs[i];

    } else {

        value = value + nodeArgs[i];
    }
}

// SWITCH STATEMENT FOR RUNNING DIFFERENT APPS 
// THIS WILL DIRECT WHICH FUNCTION TO RUN
switch (action) {
    case 'my-tweets':
        twitter
();
        break;

    case 'spotify-this-song':
        spotify();
        break;

    case 'movie-this':
        imdb();
        break;

    case 'do-what-it-says':
        dwis();
        break;
}



//TWITTER

function twitter() {
    //FS IS AN NPM PACKAGE FOR READING AND WRITING FILES 
    var fs = require('fs');

    //GETS THE TWITTER KEYS FROM THE "keys.js" file
    var twitterKey = require('./keys.js');
    // console.log(twitterKey.twitterKeys) THIS IS A TEST TO CONSOLE LOG THE KEYS. 

    //GRAB THE TWITTER PACKAGE 
    var Twitter = require('twitter');

    //TWITTER CALL WHICH PASSES THROUGH THE TWITTER KEYS FROM VARIABLE TWITTERKEY
    var client = new Twitter(twitterKey.twitterKeys);

    //THIS GRABS THE SECOND NODE FOR USERNAME ARGUMENT AND PASSES IT THRPUGH
    // var userInput = process.argv[3];

    //NODE FUNCTION THAT GRABS THE TWITTER INFROMATION 
    var params = {sarahsstorybook: value, count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            console.log("Its working");
            console.log("Here are the most recent tweets");

            for (var i = 0; i < tweets.length; i++) {

                console.log("+++++++++++++++++++++++++");
                console.log("Tweeted on: " + tweets[i].created_at);
                console.log(tweets[i].text);

            }
        }
    });
}





//SPOTIFY________________________________________________________

function spotify() {

    if (value != false) {
        var spotify = require('spotify');

        spotify.search({
            type: 'track',
            query: value + '&limit=1&'
        }, function(error, data) {
            if (error) {
                console.log('Error occurred: ' + error);
                return;
            }
            // DO SOMETHING WITH 'data'
            console.log("---------------------------------------------------");
            console.log(" ");
            console.log("The song you entered was " + value + ".");
            console.log(" ");
            console.log("Here is the infromation you requested!");
            console.log(" ");
            console.log("Track Title: " + data.tracks.items[0].name);
            console.log(" ");
            console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
            console.log(" ");
            console.log("Preview URL: " + data.tracks.items[0].preview_url);
            console.log(" ");
            console.log("---------------------------------------------------");
        });
    } else {
        {
            var spotify = require('spotify');

            spotify.search({
                type: 'track',
                query: 'ace+of+base+sign' + '&limit=1&'
            }, function(error, data) {
                if (error) {
                    console.log('Error occurred: ' + error);
                    return;
                }
                // DO SOMETHING WITH 'data'
                console.log("---------------------------------------------------");
                console.log(" ");
                console.log("Since you didnt enter a song here is the following: ");
                console.log(" ");
                console.log("Track Title: " + data.tracks.items[0].name);
                console.log(" ");
                console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
                console.log(" ");
                console.log("Preview URL: " + data.tracks.items[0].preview_url);
                console.log(" ");
                console.log("---------------------------------------------------");
            });
        }

    }
}





//IMDB________________________________________________________

function imdb() {

    // INCLUDE THE REQUEST NPM PACKAGE (DONT FORGET TO RUN "NPM INSTALL REQUEST" IN THIS FOLDER FIRST!) 
    var request = require('request');

    // RUN A REQUEST TO THE OMDB API WITH THE MOVIE SPECIFIED (CAN BE MULTI WORD MOVIES)
    request('http://www.omdbapi.com/?t=' + value + '&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {

        // IF THE REQUEST IS SUCCESFUL (i.e. IF THE RESPONSE STATUS CODE IS 200)
        //if (!error && response.statusCode == 200) {
        if (value != false) {

            // PARSE THE BODY OF THE SITE WITH THE FOLLWING INFORMATION 
            console.log("======================================================================");
            console.log("The movie's name is: " + JSON.parse(body).Title);
            console.log("");
            console.log("The movie was released in: " + JSON.parse(body).Year);
            console.log("");
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("");
            console.log("This movie was produced in the: " + JSON.parse(body).Country);
            console.log("");
            console.log("The language for this movie is in: " + JSON.parse(body).Language);
            console.log("");
            console.log("The movie's Plot: " + JSON.parse(body).Plot);
            console.log("");
            console.log("The movie's Actor's: " + JSON.parse(body).Actors);
            console.log("");
            console.log("");
            console.log("The Rotten Tomato rating is: " + JSON.parse(body).tomatoRating);
            console.log("");
            console.log("The Rotten Tomato URL is: " + JSON.parse(body).tomatoURL);
            console.log("");
        } else {

            //IF THERE IS MOVIE NETERED BY THE USER IT WILL DEFAULT TO THE MOVIE PRELAODED HERE MR. NOBODY.     
            var request = require('request');

            // RUN A REQUEST TO THE OMDB API WITH THE MOVIE SPECIFIED (CAN BE MULTI WORD MOVIES)
            request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&r=json', function(error, response, body) {

                // PARSE THE BODY OF THE SITE WITH THE FOLLWING INFORMATION 
                console.log("======================================================================");
                console.log("The movie's name is: " + JSON.parse(body).Title);
                console.log("");
                console.log("The movie was released in: " + JSON.parse(body).Year);
                console.log("");
                console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
                console.log("");
                console.log("This movie was produced in the: " + JSON.parse(body).Country);
                console.log("");
                console.log("The language for this movie is in: " + JSON.parse(body).Language);
                console.log("");
                console.log("The movie's Plot: " + JSON.parse(body).Plot);
                console.log("");
                console.log("The movie's Actor's: " + JSON.parse(body).Actors);
                console.log("");
                console.log("The Rotten Tomato rating is: " + JSON.parse(body).tomatoRating);
                console.log("");
                console.log("The Rotten Tomato URL is: " + JSON.parse(body).tomatoURL);
                console.log("");
            });
        }
    });
}

//do-what-it-says________________________________________________

function dwis() {

    //FS IS AN NPM PACKAGE FOR READING AND WRITING FILES 
    var fs = require('fs');

    // THIS BLOCK OF CODE READS FROM THE "random.txt" FILE.
    // IT IS IMPORTANT TO INCLUDE THE "utf8" PARAMETER OR THE CODE WILL PROVIDE STREAM DATA (GARBAGE)
    // THE CODE WILL STORE THE CONTENTS OF THE READING INSIDE THE VARIABLE "data" 
    fs.readFile("random.txt", "utf8", function(error, data) {

        //THIS SPLITS ALL THE INFORMATIOM INSIDE 
        data = data.split(',');

        var command;
        var parameter;

        // for (var i = 0; i < data.length; i++) {
        //     result = data[i];
        // }
        if (data.length == 2) {
            command = data[0];
            parameter = data[1];
            // console.log(command);
            // console.log(parameter);
        }
        // PRINTS THE CONTENTS OF DATA WHICH IS IN RESULT 
        //console.log(result);

        // if (result != false) {
        parameter = parameter.replace('"', '');
        parameter = parameter.replace('"', '');
        // console.log(parameter);

        switch (command) {
            case 'my-tweets':
                value = parameter;
                twitter();
                break;

            case 'spotify-this-song':
                value = parameter;
                spotify();
                break;

            case 'movie-this':
                value = parameter;
                imdb();
                break;
        }

    });
}



