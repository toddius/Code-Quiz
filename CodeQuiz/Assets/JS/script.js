let timeleft = 0;
let choice = "";
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

let test = document.getElementById("startButton").addEventListener("click", startGame);

function startTimer () {
  timeleft = 75;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("countDownTimer").textContent = timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);
}

function startGame() {
  startTimer();
  document.getElementById("gameIntro").style.display = "none";
  document.getElementById("gamePlay").style.display = "inline-flex";
  
  if (choice === "" && timeleft != "0") {
    for (i=0; i < quiz.length; i++) {
    document.getElementById("question").textContent = quiz.question[i];
    document.getElementById("answer1").textContent = quiz.ans1[i];
    document.getElementById("answer2").textContent = quiz.ans2[i];
    document.getElementById("answer3").textContent = quiz.ans3[i];
    document.getElementById("answer4").textContent = quiz.ans4[i];

  //   var choice = document.getElementsByClassName("btn");
  //   function showChoice() {
  //     var place = document.getElementById('textfield');
  //     var choiceBox = document.createElement('textarea');
  //     place.appendChild(choiceBox);
  //   }
  //   for (var i = 0 ; i < choice.length; i++) {
  //     choice[i].addEventListener('click' , showChoice , false ) ; 
  //  }

// let practice = document.querySelector("button").addEventListener("click", nextQuestion);

// $('#group2').on('click', 'button', function(event) {
//   var name = this.textContent
//   var r = $('<input type="button" value="' + name + '">');
//   $("div#group1").append(r);
// });

// let selection = document.querySelector("button").addEventListener("click" , answerChoice);

// function answerChoice () {
//   choice = selection.id;
//   let choiceText = choice.textContent;
//   console.log(choiceText);
var buttons = document.getElementsByTagName("button");
/* var buttonsCount = buttons.length; */
for (var i = 0; i <= buttons.length; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}

}
    //   if (choice.textContent === quiz.correctAns) {
    //     var line1 = document.createElement("hr");
    //     document.getElementById("gamePlay").appendChild(line1);
    //     var para1 = document.createElement("P");                       // Create a <p> node
    //     var text1 = document.createTextNode("Correct!");
    //     para1.appendChild(text1);                                          // Append the text to <p>
    //     document.getElementById("gamePlay").appendChild(para1);
    //     correctTimer();
    // } else {
    //     var line2 = document.createElement("hr");
    //     document.getElementById("gamePlay").appendChild(line2);
    //     var para2 = document.createElement("P");                       // Create a <p> node
    //     var text2 = document.createTextNode("Wrong!");
    //     para2.appendChild(text2);                                          // Append the text to <p>
    //     document.getElementById("gamePlay").appendChild(para2);
    //     wrongTimer();
    // }
    
    //   });
    }
  }

