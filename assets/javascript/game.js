//create timer
//create questions
//see if ansers are correct
//tally ansers that are correct
//need a submit button
//show score

//timer
var time = 120;
var timeInterval;
var numCorrect = 0;
var numWrong = 0;
var userGuess = [];
var questions = [
    {
        question: "In the anime Fairytail what type of wizard is Natzu Dragneel?",
        answers: ["caster type", "fire slayer", "dragon slayer", "dragon ability"],
        answerIndex: 3
    },
    {
        question: "In the game Legend of Zelda what is the name of the character you play as?",
        answers: ["Midna", "Link", "Zelda", "Super Mario"],
        answerIndex: 1
    },
    {
        question: "In the game Pokemon Yellow which starter is the grass type?",
        answers: ["Bulbasaur", "Charmander", "Squirtle", "Evee"],
        answerIndex: 0
    },
    {
        question: "In the imove Howl's Moving Castle who was the Fire Demon?",
        answers: ["Howl", "Hin", "Calcifer", "Madame Suliman"],
        answerIndex: 2
    },
    {
        question: "In the anime Fullmetal Alchemis Brotherhood what is the date in Edward's pocket watch?",
        answers: ["3 Oct. 10", "11 Oct. 3", "3 Oct. 11", "3 Aug. 11"],
        answerIndex: 2
    },
    {
        question: "In the show The Flash where does a speedster harnest their powers from?",
        answers: ["speed force", "speed relm", "speed tachyons", "tachyon particals"],
        answerIndex: 0
    },
    {
        question: "In the show The Arrow why are their two Laurals?",
        answers: ["Luaral has a twin.", "Laural is brought back to life with a different personality?", "Laural loses her memory, and develops a new identity.", "One Laural is from a parallel earth."],
        answerIndex: 3
    },
];

$("#timer").text(time);
renderQuestions();
showReults();

$("#start").on("click", function () {
    $("#intro").addClass("hidden");
    $("#trivia").removeClass("hidden");
    $("#score").removeClass("hidden");

    timeInterval = setInterval(function () {
        time--;
        if (time === 0) {
            clearInterval(timeInterval);
            showReults();
            alert("All out of Time")
        }
        $("#timer").text(time);
    }, 1000);
});

function renderQuestions() {

    questions.forEach(function (question, index) {
        var $form = $("<form>");
        var $question = $("<h3>").text(question.question);

        $form.append($question);

        question.answers.forEach(function (answer, i) {
            var $input = $('<input type="radio">');
            $input.attr("value", answer);
            $input.attr("name", index);
            $form.append($input);
            $form.append(answer);


        });

        $("#questions").append($form);
    });


}
// i tried two differnt versions to tally score, and i am not sure how to get either to work. i the first one that is uncommented i compiled first off the top of my head. the other one i tried to manipulate after past exercizes. i was attempting to use a loop through answers selected, and compare them to my answerIndex ),: 

// function showReults() {  
//         if (userGuess === answerIndex) {
//             numCorrect++;
//             $("#correct").text(numCorrect);
//         } else {
//             numWrong++;
//             $("#wrong").text(numWrong);
//         };


//     $("#correct").text(numCorrect);
//     $("#wrong").text(numWrong);
//     console.log(numCorrect);
//     console.log(numWrong);
//     console.log(showReults);
//}

function showReults(){
for (var i = 0; i < questions[i].answerIndex.length; i++) {
    if (userGuess === questions[i].answerIndex) {
      numCorrect++;
    }
    else{
        numWrong++;
    }
$("correct").text(numCorrect);
$("wrong").text(numWrong);
  }}

$("#submit").on("click").append(showReults);



