// Fetches a random joke could expand to give the user the ability to filter by programming or general?
// Documentation here: https://github.com/15Dkatz/official_joke_api
var jokeRandom = function() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(res) {
        res.json().then(function(data){
            console.log(data);
        });
    });
}
// Gets random trivia question could give user option to filter by category, true false, etc.
// Documentation here: https://opentdb.com/api_config.php
var triviaRandom = function() {
    fetch("https://opentdb.com/api.php?amount=1").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    })
}

// Grabs a random XKCD comic. Currently having and issue with CORS so currently implementing this is on the backburner
// Documentation here:
var randomXKCD = function() {
    // creates a random number between 0-614
    var xRand = Math.floor(Math.random()*615);
    console.log(xRand);
    // checks if the number is zero if yes overwrites with end of url if no concatenates end of url
    if (xRand === 0){
        xRand = "info.0.json";
    } else {
        xRand = xRand + "/info.0.json";
    }
    // creates apiURL with the completed xRand
    var apiURL = "http://xkcd.com/" + xRand
    // fetches a comic with the created url
    fetch(apiURL).then(function(res){
        res.json().then(function(data){
            console.log(data);
        });
    });
}

// fetches a random activity, can display this as "Random Activity for Later" and maybe put in options to filter by type
// documentation here: https://www.boredapi.com/documentation
var randomActivity = function() {
    fetch("http://www.boredapi.com/api/activity/").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    })
}
// Gets a Random picture of food
// Documentation Here: https://github.com/surhud004/Foodish#readme
var randomFoodPic = function() {
    fetch("https://foodish-api.herokuapp.com/api/").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    })
}
// Get some random advice
// Documentation Here: https://api.adviceslip.com/#top
var randomAdvice = function() {
    fetch("https://api.adviceslip.com/advice").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    })
}
// Gets a random Quote
// Documentation Here: https://github.com/lukePeavey/quotable
var randomQuote = function() {
    fetch("https://api.quotable.io/random").then(function(res){
        res.json().then(function(data){
            console.log(data);
        })
    })
}

var x = [jokeRandom, triviaRandom, randomActivity, randomFoodPic, randomAdvice, randomQuote];

