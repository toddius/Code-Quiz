let timeleft = 0;
let currentQuestionIndex = 0;
let questionDiv = document.getElementById("gamePlay");
let finalScore = 0;

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
  if(timeleft <= 0)
      clearInterval();
      // scoreBoard(downloadTimer);
  },1000);
}


function scoreBoard (data) {
  // $("h2").remove();
  // $("ul").remove();
  console.log(data);
  $("#gamePlay").remove();
  $("#finalScore").attr("style", "display:inline-flex");
}

function nextQuestion (Index) {
  if (Index <= 4) {
    showQuestionIndex(Index);
  } else {
    // clearInterval(downloadTimer);
    scoreBoard ();
  } 
}



function showQuestionIndex (currentQuestionIndex) {
  pointer = quiz[currentQuestionIndex];
  currentQuestion = "<h2>" + pointer.question + "</h2><ul></ul>";
  questionDiv.innerHTML = currentQuestion;
  let answerList = questionDiv.children[1]
  for (let i = 0; i < pointer.answers.length; i++) {
    answerList.innerHTML += ('<li id="'+i+'">' + pointer.answers[i] + '</li>');
  }

  $( "#gamePlay ul li" ).on( "click", function() {
    // console.log( $( this ).attr('id') );
    currentQuestionIndex++;
    var previousQuestionIndex = currentQuestionIndex - 1;
    console.log(previousQuestionIndex);
    $("h2").remove();
    $("ul").remove();
    if ($(this).attr('id') != quiz[previousQuestionIndex].correctAnswer){
    // console.log(currentQuestionIndex-1);
    nextQuestion(currentQuestionIndex);
    timeleft = timeleft-10;
    }
    else {
      nextQuestion(currentQuestionIndex);
    }
    
  });
}

function startGame () {
  startTimer();
  
  document.getElementById("gameIntro").style.display = "none";
  document.getElementById("gamePlay").style.display = "inline-flex";
  
  showQuestionIndex (currentQuestionIndex);

}

let test = document.getElementById("startButton").addEventListener("click", startGame);