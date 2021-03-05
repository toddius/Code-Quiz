# Code-Quiz
timed quiz about Javascript facts

I first created the HTML file to produce the general structure I saw in the gif provided. I created a nav bar with a link to the high scores (not active as pof this point) and the countdown time (which is working). 

I also create a centerd container that could hold multiple divs that could be revealed or hidden with CSS. I was able to produce the home page to start the game and hide it with a click of the start button and produce the div that holds the quesiton with answers. I started working on the end of game div and did not start the high scores div that would hold all the high scores.

Initially, I made separate divs for all the questions, but after speaking with a TA, they recommended I put all the questions and answers into an array of objects. After I did that, I tried to create a loop that would populate the div elements with the questions and answers. I got it to 'work' but it always went to the end of the array. 

Another problem I am having is deterrmining which answer the user chooses so I can determine if it is right or wrong and code for what the game to do next. 

I just need to solve how to create the quesitons one at a time and determine the answer chosen, then I can move forward to completing this game. 

![Start page](/Code Quiz/Assets/screen shots/Screen Shot 2021-01-24 at 9.15.58 PM.png?raw=true "Start page")

![First Question](/Code Quiz/Assets/screen shots/Screen Shot 2021-01-24 at 9.37.32 PM.png?raw=true "First Question")

Here is the link to the game:  https://toddius.github.io/Code-Quiz/

## Code-Quiz resubmission

In this version I was able to start and stop the timer based upon user input. I was able to take the time remaining and use that as the score. The application can take the user's initials and the time left (score) and save it to local storage. It can also retrieve data from local stoage and supply it on the high score page. It also clears the local storage and starts the game over. The one problem I was not able to solve was how to restart the timer when the game starts again. 

### Screen shots of newest iteration

![Start page](/Code Quiz/Assets/screen shots/Screen Shot 2021-03-05 at 3.29.21 AM?raw=true "Start page")

![First Question](/Code Quiz/Assets/screen shots/Screen Shot 2021-03-05 at 3.29.39 AM?raw=true "First Question")

![End of Game](/Code Quiz/Assets/screen shots/Screen Shot 2021-03-05 at 3.30.14 AM?raw=true "First Question")

![High Score Page](/Code Quiz/Assets/screen shots/Screen Shot 2021-03-05 at 3.30.26 AM?raw=true "First Question")

![Cleared High Score Page](/Code Quiz/Assets/screen shots/Screen Shot 2021-03-05 at 3.30.41 AM?raw=true "First Question")

#### Link to quiz

The link to the game is the same:  https://toddius.github.io/Code-Quiz/