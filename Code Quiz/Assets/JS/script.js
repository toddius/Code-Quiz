let timeLeft = 0;

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  document.getElementById("gameIntro").innerHTML = document.getElementById("question1").innerHTML;

    timeleft = 75;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countDownTimer").innerHTML = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}

// document.getElementById("q1Correct").addEventListener("click", question1Correct);

// document.getElementsByClassName("q1Wrong").addEventListener("click", question1Wrong);

// function question1Correct() {
//   document.getElementById("question1").innerHTML = document.getElementById("question2").innerHTML;
// }
// function question1Wrong() {
//   document.getElementById("question1").innerHTML = document.getElementById("question2").innerHTML;
// }

// document.getElementById("q2Correct").addEventListener("click", question2Correct);

// document.getElementsByClassName("q2Wrong").addEventListener("click", question2Wrong);

// function question2Correct() {
//   document.getElementById("question2").innerHTML = document.getElementById("question3").innerHTML;
// }
// function question2Wrong() {
//   document.getElementById("question2").innerHTML = document.getElementById("question3").innerHTML;
// }

// document.getElementById("q3Correct").addEventListener("click", question3Correct);

// document.getElementsByClassName("q3Wrong").addEventListener("click", question3Wrong);

// function question3Correct() {
//   document.getElementById("question3").innerHTML = document.getElementById("question4").innerHTML;
// }
// function question3Wrong() {
//   document.getElementById("question3").innerHTML = document.getElementById("question4").innerHTML;
// }

// document.getElementById("q4Correct").addEventListener("click", question14orrect);

// document.getElementsByClassName("q4Wrong").addEventListener("click", question4Wrong);

// function question4Correct() {
//   document.getElementById("question1").innerHTML = document.getElementById("question5").innerHTML;
// }
// function question4Wrong() {
//   document.getElementById("question1").innerHTML = document.getElementById("question5").innerHTML;
// }