// Variable to format date
var date = new Date();
var dateDay = date.getDate();
var dateMonth = date.getMonth() + 1;
var dateYear = date.getFullYear();

const formattedDate = `${dateMonth}/${dateDay}/${dateYear}`;
$('#todaysDate').text(formattedDate);

// Creating Variable to target main element
var containerEl = $("#random-element-container");
// variable for storing the functions into
var displayElements = [];

// Fetches a random joke could expand to give the user the ability to filter by programming or general?
// Documentation here: https://github.com/15Dkatz/official_joke_api
var jokeRandom = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#joke-row") == true){
        $("#joke-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","joke-row"));
    }

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(res) {
        res.json().then(function(data){
            // creates a div with the class row and id of joke-row
            var jokeRowEl = $("<div>").addClass("row").attr("id","joke-row");
            // creates a div with the column classes to hold the joke
            var jokewrapperEl = $("<div>").addClass("col-12 col-md-8")
            // creates a div for the setup and the punchline
            var setUpEl = $("<div>").addClass("joke").text("Setup: " + data.setup);
            var punchLineEl = $("<div>").addClass("punch-line").text("Punchline: " + data.punchline);
            // creates a button that will be used to get another joke
            var buttonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","joke-rerand").text("Another Joke?");
            // creates a button that will delete a random element
            var deleteButtonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","delete-joke").text("Remove Element");
            // appends created elements together and then to the random-element-container
            jokewrapperEl.append(setUpEl, punchLineEl);
            jokeRowEl.append(jokewrapperEl, buttonEl, deleteButtonEl);
            $("#joke-row").html(jokeRowEl);
        });
    });
}

// fetches a random activity, can display this as "Random Activity for Later" and maybe put in options to filter by type
// documentation here: https://www.boredapi.com/documentation
var randomActivity = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#activity-row") == true){
        $("#activity-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","activity-row"));            
    }

    fetch("https://www.boredapi.com/api/activity/").then(function(res){
            res.json().then(function(data){
            // creates a div with the class row and id of activity-row
            var activityRowEl = $("<div>").addClass("row").attr("id","activity-row");
            // creates a div with the column classes to hold the activity
            var activityColEl = $("<div>").addClass("col-12 col-md-8").text("Here's something to try: " + data.activity);
            // creates a button that will be used to get some more activity
            var buttonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","activity-rerand").text("Want Another Activity?");
             // creates a button that will delete a random element
             var deleteButtonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","delete-activity").text("Remove Element");
            // appends created elements together and then to the random-element-container
            activityRowEl.append(activityColEl, buttonEl, deleteButtonEl);
            $("#activity-row").html(activityRowEl);
        });
    });
}
// Gets a Random picture of food
// Documentation Here: https://github.com/surhud004/Foodish#readme
var randomFoodPic = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#food-pic-row") == true){
        $("#food-pic-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","food-pic-row"));
    }
    fetch("https://foodish-api.herokuapp.com/api/").then(function(res){
        res.json().then(function(data){
            // creates div with class of row and id of food-pic-row for the img and button to go in
            var foodRowEl = $("<div>").addClass("row").attr("id","food-pic-row");
            // creates and img element
            var foodImgEl = $("<img>").attr("src", data.image).addClass("img-fluid");
            // creates a button element
            var buttonEl = $("<button>").addClass("button col-6").attr("id","food-pic-rerand").text("Want Another Food Picture?");
             // creates a button that will delete a random element
             var deleteButtonEl = $("<button>").addClass("button col-6").attr("id","delete-food-pic").text("Remove Element");
            // appends created elements together and then to the random-element-container
            foodRowEl.append(foodImgEl, buttonEl, deleteButtonEl);
            $("#food-pic-row").html(foodRowEl);
        })
    })
}
// Get some random advice
// Documentation Here: https://api.adviceslip.com/#top
var randomAdvice = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#advice-row") == true){
        $("#advice-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","advice-row"));
    }
    fetch("https://api.adviceslip.com/advice",{cache: "no-cache"}).then(function(res){
        res.json().then(function(data){
            // creates a div with the class row and id of advice-row
            var adviceRowEl = $("<div>").addClass("row").attr("id","advice-row");
            // creates a div with the column classes to hold the advice
            var adviceColEl = $("<div>").addClass("col-12 col-md-8").text("Here is some advice you didn't ask for: " + data.slip.advice);
            // creates a button that will be used to get some more advice
            var buttonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","advice-rerand").text("Want Some More Advice?");
             // creates a button that will delete a random element
             var deleteButtonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","delete-advice").text("Remove Element");
            // appends created elements together and then to the random-element-container
            adviceRowEl.append(adviceColEl, buttonEl, deleteButtonEl);
            $("#advice-row").html(adviceRowEl);
        })
    })
}
// Gets a random Quote
// Documentation Here: https://github.com/lukePeavey/quotable
var randomQuote = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#quote-row") == true){
        $("#quote-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","quote-row"));
    }
    fetch("https://api.quotable.io/random").then(function(res){
        res.json().then(function(data){
            // creates a div with the class row and id of quote-row
            var quoteRowEl = $("<div>").addClass("row").attr("id","quote-row");
            // creates a div with the column classes to hold the quote
            var quotewrapperEl = $("<div>").addClass("col-12 col-md-8")
            // creates a div for the quote and the author
            var quoteEl = $("<div>").addClass("quote").text(data.content);
            var authorEl = $("<div>").addClass("author").text("Quote By " + data.author);
            // creates a button that will be used to get another quote
            var buttonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","quote-rerand").text("Another quote?");
             // creates a button that will delete a random element
             var deleteButtonEl = $("<button>").addClass("button col-6 col-md-2").attr("id","delete-quote").text("Remove Element");
            // appends created elements together and then to the random-element-container
            quotewrapperEl.append(quoteEl, authorEl);
            quoteRowEl.append(quotewrapperEl, buttonEl, deleteButtonEl);
            $("#quote-row").html(quoteRowEl);
        })
    })
}

// Gets random trivia question could give user option to filter by category, true false, etc.
// Documentation here: https://opentdb.com/api_config.php
var triviaRandom = function() {
    // checks if div with associated id exists, empties it if it does or creates it if it doesn't
    if ($("#trivia-row") == true){
        $("#trivia-row").empty();
    } else {
        containerEl.append($("<div>").attr("id","trivia-row"));
    }
    fetch("https://opentdb.com/api.php?amount=1").then(function(res){
        res.json().then(function(data){
            // creates a div with the class row and id of triva-row
            var triviaRowEl = $("<div>").addClass("row").attr("id","trivia-row");
            // creates a div with the column classes to hold the question and answers
            var triviaWrapperEl = $("<div>").addClass("col-12 col-md-12")
            // creates a div for the question, appends question as html instead of text because response is encoded
            var questionEl = $("<div>").addClass("question","row").html(data.results[0].question);
            // creates answer rows
            triviaWrapperEl.append(questionEl);

            var answerSelections = ["A", "B","C","D"];
            var numberOfAnswers = 2;

            if (data.results[0].type == "multiple") {
                var numberOfAnswers = 4;
            }
                        
            var answerWrapper = $("<div>").addClass("col-12");

            //get randomized position for correct answer and create a tracking variable for incorrect answers
            var correctAnswerPosition = Math.floor(Math.random() * numberOfAnswers);
            var incorrectAnswerTrack = 0;

            for (let i = 0; i < numberOfAnswers; i++) {
                answerWrapper.append($("<div>").addClass("row"));
                answerWrapper.append($("<button>").addClass("button col-2").attr("id","answer-btn-" + i).text(answerSelections[i]));
                //place correct answer on random row and fill incorrect answers around it
                if (i == correctAnswerPosition) {
                    answerWrapper.append($("<span>").addClass("col-9").attr("id","answer-" + i).html(data.results[0].correct_answer));
                } else {
                    answerWrapper.append($("<span>").addClass("col-9").attr("id","answer-" + i).html(data.results[0].incorrect_answers[incorrectAnswerTrack]));
                    incorrectAnswerTrack++;
                }
                triviaWrapperEl.append(answerWrapper);
            }

            answerWrapper.append($("<div>").addClass("row justify-content-center"));
            answerWrapper.append($("<button>").addClass("button col-6 col-md-2").attr("id","trivia-rerand").text("Try another question?"));
             // creates a button that will delete a random element
            answerWrapper.append($("<button>").addClass("button col-6 col-md-2").attr("id","delete-trivia").text("Remove Element"));

            // appends created elements together and then to the random-element-container
            triviaRowEl.append(triviaWrapperEl);
            $("#trivia-row").html(triviaWrapperEl);

            $("main").on("click","button",function(){
                switch ($(this).attr("id")) {
                    case "answer-btn-0":
                        $(this).text(checkTriviaAnswer(0, correctAnswerPosition));
                        break;
                    case "answer-btn-1":
                        $(this).text(checkTriviaAnswer(1, correctAnswerPosition));
                        break;
                    case "answer-btn-2":
                        $(this).text(checkTriviaAnswer(2, correctAnswerPosition));
                        break;
                     case "answer-btn-3":
                        $(this).text(checkTriviaAnswer(3, correctAnswerPosition));
                        break;       
                }
            })
        });
    });
}

function checkTriviaAnswer (answer, correctAnswer) {
    if (answer == correctAnswer) {
        return "Correct";
    } else {
        return "Incorrect";
    }
}

var deleteElement = function(event) {
    var target = $(event).attr("id").split('-');
    // checks the length of the split array then removes the element
    if (target.length === 3){
        console.log(target);
        $("#" + target[1] + "-" + target[2] + "-row").remove();
    } else {
    console.log(target[1]);
    $("#" + target[1] + '-row').remove();
    }
}

var displayElements = [];

//adds local saved layout if it exists
if (localStorage.getItem("display") != null) {
    displayElements = JSON.parse(localStorage.getItem("display"));
}

console.log(displayElements);

//initialize layout
for (var i = 0; i < displayElements.length; i++) {
     if (displayElements[i] == "jokeRandom") {
         jokeRandom();
     }
     if (displayElements[i] == "randomActivity") {
         randomActivity();
     }
     if (displayElements[i] == "randomFoodPic") {
         randomFoodPic();
     }
     if (displayElements[i] == "randomAdvice") {
         randomAdvice();
     }
     if (displayElements[i] == "triviaRandom") {
         triviaRandom();
     }
     if (displayElements[i] == "randomQuote") {
         randomQuote();
     }
}

// checks the main function for when a button is pushed
$("main").on("click","button",function(){
    // switch to run functions based off the id of the button that was pushed
    switch ($(this).attr("id")) {
        // rerand button cases start
        case "joke-rerand":
            jokeRandom();
            break;
        case "activity-rerand":
            randomActivity();
            break;
        case "food-pic-rerand":
            randomFoodPic();
            break;
        case "advice-rerand":
            randomAdvice();
            break;
        case "quote-rerand":
            randomQuote();
            break;
        case "trivia-rerand":
            triviaRandom();
            break; 
        // rerand button cases end
        // edit button case start
        case "edit-modal": 
            $("#random-options-modal").modal("show");
            break;
        // edit button case end
        // delete button case start
        case "delete-joke":
           deleteElement(this);
           var funInd = displayElements.indexOf("jokeRandom");
           if (funInd > -1){
               displayElements.splice(funInd, 1);
               localStorage.setItem("display", JSON.stringify(displayElements));
           }
           break;
        case "delete-activity":
            deleteElement(this);
            var funInd = displayElements.indexOf("randomActivity");
            if (funInd > -1){
                displayElements.splice(funInd, 1);
                localStorage.setItem("display", JSON.stringify(displayElements));
            }
            break;
        case "delete-food-pic":
            deleteElement(this);
            var funInd = displayElements.indexOf("randomFoodPic");
            if (funInd > -1){
                displayElements.splice(funInd, 1);
                localStorage.setItem("display", JSON.stringify(displayElements));
            }
            break;
        case "delete-advice":
            deleteElement(this);
            var funInd = displayElements.indexOf("randomAdvice");
            if (funInd > -1){
                displayElements.splice(funInd, 1);
                localStorage.setItem("display", JSON.stringify(displayElements));
            }
            break;
        case "delete-quote":
            deleteElement(this);
            var funInd = displayElements.indexOf("randomQuote");
            if (funInd > -1){
                displayElements.splice(funInd, 1);
                localStorage.setItem("display", JSON.stringify(displayElements));
            }
            break;
        case "delete-trivia":
            deleteElement(this);
            var funInd = displayElements.indexOf("triviaRandom");
            if (funInd > -1){
                displayElements.splice(funInd, 1);
                localStorage.setItem("display", JSON.stringify(displayElements));
            }
            break;
    }
})

// listener to handle when the accept button is pressed in the modal window
$("#random-options-modal .btn-accept").click(function(){
    // switch that runs the function based off of the value of what option is currently in the select
    switch ($("#option-item-select").val()){
        case "random-joke":
            if (displayElements.includes("jokeRandom") == false) {
                displayElements.push("jokeRandom");
                localStorage.setItem("display", JSON.stringify(displayElements));
                jokeRandom();
            }
            break;
        case "random-activity":
            if (displayElements.includes("randomActivity") == false) {
                displayElements.push("randomActivity");
                localStorage.setItem("display", JSON.stringify(displayElements));
                randomActivity();
            }
            break;
        case "random-food-pic":
            if (displayElements.includes("randomFoodPic") == false) {
                displayElements.push("randomFoodPic");
                localStorage.setItem("display", JSON.stringify(displayElements));
                randomFoodPic();
            }
            break;
        case "random-advice":
            if (displayElements.includes("randomAdvice") == false) {
                displayElements.push("randomAdvice");
                localStorage.setItem("display", JSON.stringify(displayElements));
                randomAdvice();
            }
            break;
        case "random-quote":
            if (displayElements.includes("randomQuote") == false) {
                displayElements.push("randomQuote");
                localStorage.setItem("display", JSON.stringify(displayElements));
                randomQuote();
            }
            break;
        case "random-trivia":
            if (displayElements.includes("triviaRandom") == false) {
                displayElements.push("triviaRandom");
                localStorage.setItem("display", JSON.stringify(displayElements));
                triviaRandom();
            }
            break;
    }
    $("#random-options-modal").modal("hide");
})
