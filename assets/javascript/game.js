
var correct = 0;
var incorrect = 0;
var count = 40;
var intervalId;
var starWarsQuestions =[{
    question: "In Episode 2: Attack of the Clones, who is the 4 armed Diner owner who Obi-wan speaks to?",
    choices: ["Dexter Jettster", "Zam Wessel", "Nute Gunray", "Wat Tambor"],
    validAnswer: 0
}, {
    question: "In Episode 7: The Force Awakens, what was Finn's assignment on Starkiller Base?",
    choices: ["Royal Guard", "Sanitation", "Training Officer", "Engineer"],
    validAnswer: 1
}, {
    question: "What was the name of the directive order given to all clone troopers to turn on their Jedi Masters?",
    choices: ["Operation Knightfall", "Executive 42", "Doomsday", "Order 66"],
    validAnswer: 3
}, {
    question: "What was the race of alien spies who lost their lives in the procurement of the second Death Star plans?",
    choices: ["Gungan", "Bothan", "Trandoshan", "Rathtar"],
    validAnswer: 1
}, {
    question: "In Episode 5: The Empire Strikes Back, who was not a bounty hunter hired by Darth Vader to catch Han Solo?",
    choices: ["Dengar", "4-Lom", "Greedo", "Zuckuss"],
    validAnswer: 2
}, {
    question: "What is the home world of Supreme Chancellor/Emperor Palpatine?",
    choices: ["Tattooine", "Coruscant", "Naboo", "Lothal"],
    validAnswer: 2
}, {
    question: "In Episode 3: Revenge of the Sith, what was the name of the clone leader who assisted and later betrayed Obi-wan on the planet Utapau?",
    choices: ["Commander Cody", "Captain Rex", "Commander Bly", "Red Leader"], 
    validAnswer: 0
}, {
    question: "In Episode 1: The Phantom Menace, Jedi Master Qui-gonn Jinn offered these wise words: 'There is always a ______ ______'",
    choices: ["Sith Lord.", "trap waiting.", "way out.", "bigger fish."],
    validAnswer: 3
}
];

//press start button to start timer and run display question function
$("#start-button").click(function(){
    $(this).hide();
    clearInterval(intervalId)
    intervalId = setInterval(timer, 1000);
    displayQuestion();
});
//timer
function timer() {
count--;
$("#timer").html(count + " seconds left");
$(".lightsaber-2").animate({ width: "0" }, 40000);
if (count <= 0) {
    window.clearInterval(intervalId);
    finalScore();    
    $(".choices-div").addClass("disabledButton");
    
}
}
//score card function
function finalScore() {
    
    $("#score-card1").append("Correct: "+ correct);
    $("#score-card2").append("Incorrect: "+ incorrect);
    $("#score-card3").append("Unanswered: "+ (starWarsQuestions.length - (correct+incorrect)));
    $("#score-card4").append("Final Score: " + (correct / starWarsQuestions.length) * 100 + "%" );
   
}
//function to end game when all questions are answered
//(Couldn't get this to work)
if ((correct + incorrect) === 8) {
    console.log("done!!")
    count = 0;
    finalScore();
    $(".lightsaber-2").css("width", 0);
    
};

//randomize question order
function randomize() {
    return Math.random() - 0.5;
}
//function to create questions and choices
function displayQuestion() {
    starWarsQuestions.sort(randomize);
    for (var i=0; i<starWarsQuestions.length; i++) {
        $("#trivia-question-"+i).text(starWarsQuestions[i].question);
            for (var j=0; j<4; j++){
            var button = $("<button>");
            button.text(starWarsQuestions[i].choices[j]);
            button.attr("data-id", [j]);
            $("#choices-"+i).append(button)
            }
        
    }
}


//correct or incorrect function. 
// I tried really hard to get this function to work inside a for loop, but it wasn't happening
// I know this isn't very DRY but it works

$("#choices-0").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[0].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-0").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-0").addClass("disabledButton");
    }
})

$("#choices-1").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[1].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-1").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-1").addClass("disabledButton");
    }
})

$("#choices-2").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[2].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-2").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-2").addClass("disabledButton");
    }
})

$("#choices-3").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[3].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-3").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-3").addClass("disabledButton");
    }
})

$("#choices-4").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[4].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-4").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-4").addClass("disabledButton");
    }
})

$("#choices-5").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[5].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-5").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-5").addClass("disabledButton");
    }
})

$("#choices-6").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[6].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-6").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-6").addClass("disabledButton");
    }
})

$("#choices-7").on("click", "button", function(){
    userChoice = $(this).data("id")
    if (userChoice != starWarsQuestions[7].validAnswer) {
        incorrect++
        $(this).css("background", "red");
        $("#choices-7").addClass("disabledButton");
    } else {
        correct++
        $(this).css("background", "green");
        $("#choices-7").addClass("disabledButton");
    }
})
