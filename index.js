var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Pooja",
    score: 3,
  },

  {
    name: "Viji",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "How many Championships did Lewis Hamilton win? (Seven or Eight) ",
  answer: "Seven"
}, {
  question: "Which Constructor won the World Championship in 2021? (Red Bull or Mercedes)",
  answer: "Mercedes"
},
{
  question: "What is Max Verstappen's nationality? (Dutch or French)", 
  answer: "Dutch"
},
{
  question:"Who won seven championships apart from Hamilton?(Michael Schumacher or Alonso)",
  answer:"Michael Schumacher"
},
{
  question:"Name of Schumacher's son?(Nick or Mick)",
  answer:"Mick"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "! How well do you know F1");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

