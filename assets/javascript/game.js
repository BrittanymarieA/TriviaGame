//create timer
//create questions
//see if ansers are correct
//tally ansers that are correct
//need a submit button
//show score

//timer

var interval;
var number = 120;

$("#start").on("click", run);

function run() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000)
}

function decrement() {
    number--;
    $("#timer").text(number)
    if (number === 0) {
        stop();
    }
}

var quizContainer = document.getElementById("quiz");
var results = document.getElementById("score");
var submit = document.getElementById("submit");

//questions

var myQuestions = [
    {
        question1: "In the game Legend of Zelda who is the main character that the user plays as?",
        answers: {
            a: "Midna",
            b: "Link",
            c: "Zelda",
        },
        b: rightAnswer,
    },
    {
        question2: "In the anime Fairytail what type of magic does Natsu Dragneel use?",
        answers: {
            a: "holder magic",
            b: "caster magic",
            c: "dragon slayer magic",
        },
        c: rightAnswer
    },
    {
        question3: "In the show The Flash where does a speedster harnest their powers from?",
        answers: {
            a: "speed force",
            b: "speed relm",
            c: "speed dimension",
        },
        a: rightAnswer
    }
];

var numRight = 0;
var numWrong = 0;


for(var i =0; i < myQuestions.length; i++){
   $("#q1").text(myQuestions[0].question1);
   $("#q2").text(myQuestions[1].question2);
   $("#q3").text(myQuestions[2].question3);
 
   if(answers === myQuestions[i].rightAsnwer){
       numRight++
   }else{
       numWrong++
   }
}

$("#submit").on("click").text(numRight, numWrong);
if(number === 0){
    document.text(numRight, numWrong)
}







