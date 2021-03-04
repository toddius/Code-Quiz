let timeleft = 0;
let currentQuestionIndex = 0;
let questionDiv = document.getElementById("gamePlay");
let finalScore = 0;
let quizComplete = false;
let userData = [];
let quiz = [
  {
    "question" : "Commonly used data types DO NOT include:",
    "answers" : ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    "correctAnswer" : 2
  },

  {
    "question" : "The condition in an if / else statement is enclosed within _________.",
    "answers" : ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    "correctAnswer" : 1
  },

  {
    "question" : "Arrays within JavaScript can be used to store _________.",
    "answers" : ["1. strings", "2. other arrays", "3. booleans", "4. all of the above"],
    "correctAnswer" : 3
  },

  {
    "question" : "String values must be enclosed within _________ when being assigned to variables.",
    "answers" : ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    "correctAnswer" : 2
  },

  {
    "question" : "A very useful tool used during development and debugging for printing content to the debugger is:",
    "answers" : ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
    "correctAnswer" : 3
  }
];
let pointer = quiz[currentQuestionIndex];
let currentQuestion = "<h2>" + pointer.question + "</h2><ul></ul>";

function startTimer () {
  timeleft = 75;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("countDownTimer").textContent = timeleft;
  if(timeleft <= 0 || quizComplete === true)
      clearInterval(downloadTimer);
  },1000);
}

function startGame () {
  // localStorage.clear();
  timeleft = 0;
  startTimer();
  document.getElementById("gameIntro").style.display = "none";
  // document.getElementById("highScores").style.display = "none";
  document.getElementById("gamePlay").style.display = "inline-flex";
  showQuestionIndex (currentQuestionIndex);
}

function scoreBoard (data) {
  document.getElementById("gamePlay").style.display = "none";
  $("#finalScore").attr("style", "display:inline-flex");
  $("#finalCountDownTimer").text(data.toString());
}

function nextQuestion (Index) {
  if (Index <= 4) {
    showQuestionIndex(Index);
  } else {
    quizComplete = true;
    scoreBoard (timeleft-1);
  } 
}

function getDisplayScores(formValue, score) {
  var userInitials = formValue.val();
  var userScore = score;
  localStorage.setItem(userInitials, userScore);
  showHighScores(userInitials, userScore);
}

$("form").on("submit", function(e) {
  e.preventDefault();
  getDisplayScores($("#inputInitials"), timeleft);
})

function showQuestionIndex (currentQuestionIndex) {
  pointer = quiz[currentQuestionIndex];
  currentQuestion = "<h2>" + pointer.question + "</h2><ul></ul>";
  questionDiv.innerHTML = currentQuestion;
  let answerList = questionDiv.children[1]
  for (let i = 0; i < pointer.answers.length; i++) {
    answerList.innerHTML += ('<li id="'+i+'">' + pointer.answers[i] + '</li>');
  }

  $( "#gamePlay ul li" ).on( "click", function() {
    currentQuestionIndex++;
    var previousQuestionIndex = currentQuestionIndex - 1;
    $("h2").remove();
    $("ul").remove();
    if ($(this).attr('id') != quiz[previousQuestionIndex].correctAnswer){
    nextQuestion(currentQuestionIndex);
    timeleft = timeleft-10;
    }
    else {
      nextQuestion(currentQuestionIndex);
    }
  });
}

function startOver() {
  document.getElementById("highScores").style.display = "none";
  document.getElementById("gameIntro").style.display = "inline-flex";
  document.getElementById("navigationBar").style.display = "inline-flex";
  localStorage.clear();
  timeleft = 0;
  document.getElementById("countDownTimer").textContent = timeleft;
}

function clearHighScores () {
  document.getElementById("scoreList").style.display = "none";
  localStorage.clear();
}

function showHighScores (userInit, userSc) {
  document.getElementById("finalScore").style.display = "none";
  document.getElementById("navigationBar").style.display = "none";
  document.getElementById("highScores").style.display = "inline-flex";
  userData = localStorage.getItem(userInit);
  initials = localStorage.key(userInit);
  document.querySelector("ol").innerHTML = "<li>" + initials + " - " + userData + "</li>";
  document.getElementById("goBack").addEventListener("click", startOver);
  document.getElementById("clearScores").addEventListener("click", clearHighScores);
}

let test = document.getElementById("startButton").addEventListener("click", startGame);