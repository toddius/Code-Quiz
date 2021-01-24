let timeLeft = 0;
let quiz = [
  {
    "question" : "Commonly used data types DO NOT include:",
    "ans1" : "1. strings",
    "ans2" : "2. booleans",
    "ans3" : "3. alerts",
    "ans4" : "4. numbers",
    "correctAns" : "3. alerts"
  },

  {
    "question" : "The condition in an if / else staement is enclosed within _________.",
    "ans1" : "1. quotes",
    "ans2" : "2. curly brackets",
    "ans3" : "3. parentheses",
    "ans4" : "4. square brackets",
    "correctAns" : "3. parentheses"
  },

  {
    "question" : "Arrays within JavaScript can be used to store _________.",
    "ans1" : "1. strings",
    "ans2" : "2. other arrays",
    "ans3" : "3. booleans",
    "ans4" : "4. all of the above",
    "correctAns" : "4. all of the above"
  },

  {
    "question" : "String values must be enclosed within _________ when being assigned to variables.",
    "ans1" : "1. commas",
    "ans2" : "2. curly brackets",
    "ans3" : "3. quotes",
    "ans4" : "4. parentheses",
    "correctAns" : "3. quotes"
  },

  {
    "question" : "A very useful tool used during development and debugging for printing content to the debugger is:",
    "ans1" : "1. JavaScript",
    "ans2" : "2. terminal / bash",
    "ans3" : "3. for loops",
    "ans4" : "4. console log",
    "correctAns" : "4. console log"
  }
]

document.getElementById("startButton").addEventListener("click", startGame);

function startTimer () {
  timeleft = 75;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("countDownTimer").innerHTML = timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);
}

function startGame() {
  startTimer();
  document.getElementById("gameIntro").style.display = "none";
  document.getElementById("gamePlay").style.display = "inline";
  
    for(let quiziz of quiz) {
      // console.log(quiziz.question, quiziz.ans1);
    document.getElementById("question").textContent = quiziz.question;
    document.getElementById("answer1").textContent = quiziz.ans1;
    document.getElementById("answer2").textContent = quiziz.ans2;
    document.getElementById("answer3").textContent = quiziz.ans3;
    document.getElementById("answer4").textContent = quiziz.ans4;

    var choice = document.querySelector("button").addEventListener("click", () => {
      console.log(choice);
      // if (choice === quiz.correctAns) {
    } );
    
     

      }

  }
