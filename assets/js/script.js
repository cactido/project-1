// Creating Variable to target main element
var containerEl = $("#random-element-container");

// Fetches a random joke could expand to give the user the ability to filter by programming or general?
// Documentation here: https://github.com/15Dkatz/official_joke_api
var jokeRandom = function() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(res) {
        res.json().then(function(data){
            // checks if a div with the id of joke-row already exists and if so it removes it
            if ($("#joke-row") !== false){
                $("#joke-row").remove();
            }
            // creates a div with the class row and id of joke-row
            var jokeRowEl = $("<div>").addClass("row").attr("id","joke-row");
            // creates a div with the column classes to hold the joke
            var jokewrapperEl = $("<div>").addClass("col-12 col-md-8")
            // creates a div for the setup and the punchline
            var setUpEl = $("<div>").addClass("joke").text("Setup: " + data.setup);
            var punchLineEl = $("<div>").addClass("punch-line").text("Punchline: " + data.punchline);
            // creates a button that will be used to get another joke
            var buttonEl = $("<button>").addClass("button col-12 col-md-4").attr("id","joke-rerand").text("Another Joke?");
            // appends created elements together in the jokeRowEl then appends that to the random-element-container 
            jokewrapperEl.append(setUpEl, punchLineEl);
            jokeRowEl.append(jokewrapperEl, buttonEl);
            containerEl.append(jokeRowEl);
        });
    });
}
// Gets random trivia question could give user option to filter by category, true false, etc.
// Documentation here: https://opentdb.com/api_config.php
var triviaRandom = function() {
    fetch("https://opentdb.com/api.php?amount=1").then(function(res){
        res.json().then(function(data){
            console.log(data);
            alert("Still needs game logic");
        });
    });
}

// Grabs a random XKCD comic. Currently having and issue with CORS so currently implementing this is on the backburner
// Documentation here:

// Ignore for now
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
// Ignore for now

// fetches a random activity, can display this as "Random Activity for Later" and maybe put in options to filter by type
// documentation here: https://www.boredapi.com/documentation
var randomActivity = function() {
    fetch("http://www.boredapi.com/api/activity/").then(function(res){
        res.json().then(function(data){
            if ($("#activity-row") !== false){
                $("#activity-row").remove();
            }
            // creates a div with the class row and id of activity-row
            var activityRowEl = $("<div>").addClass("row").attr("id","activity-row");
            // creates a div with the column classes to hold the activity
            var activityColEl = $("<div>").addClass("col-12 col-md-8").text("Here's something to try: " + data.activity);
            // creates a button that will be used to get some more activity
            var buttonEl = $("<button>").addClass("button col-12 col-md-4").attr("id","activity-rerand").text("Want Another Activity?");
            // appends created elements together in the activityRowEl then appends that to the random-element-container 
            activityRowEl.append(activityColEl, buttonEl);
            containerEl.append(activityRowEl);
        });
    });
}
// Gets a Random picture of food
// Documentation Here: https://github.com/surhud004/Foodish#readme
var randomFoodPic = function() {
    fetch("https://foodish-api.herokuapp.com/api/").then(function(res){
        res.json().then(function(data){
            // creates an img element and appends it to the main element
            console.log(data);
            var foodImgEl = $("<img>").attr("src", data.image).addClass("img-fluid");
            containerEl.append(foodImgEl);
        })
    })
}
// Get some random advice
// Documentation Here: https://api.adviceslip.com/#top
var randomAdvice = function() {
    fetch("https://api.adviceslip.com/advice").then(function(res){
        res.json().then(function(data){
            console.log(data);
            var adviceEl = $("<div>").addClass("advice").text("Here is some advice you didn't ask for: " + data.slip.advice);
            containerEl.append(adviceEl);
        })
    })
}
// Gets a random Quote
// Documentation Here: https://github.com/lukePeavey/quotable
var randomQuote = function() {
    fetch("https://api.quotable.io/random").then(function(res){
        res.json().then(function(data){
            console.log(data);
            var quoteEl = $("<div>").addClass("quote").text(data.content);
            var authorEl = $("<div>").addClass("quote-author").text("Quote by " + data.author);
            containerEl.append(quoteEl, authorEl);
        })
    })
}


var x = [jokeRandom, randomActivity, randomFoodPic, randomAdvice, randomQuote];

for (var i = 0; i < x.length; i++) {
    x[i]();
}

$("main").on("click","button",function(){
    switch ($(this).attr("id")) {
        case "joke-rerand":
            jokeRandom();
            break;
        case "activity-rerand":
            randomActivity();
            break;
        default:

    }
})