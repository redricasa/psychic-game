# psychic-game.github.io
week 3 UW Coding Bootcamp homework

This is the basic non-challenging Javascript project for week 3 of UW codding bootcamp.

I've decided to code my own css insted of using bootstrap  and included a css reset from myerweb(public domain) to take care of how different browsers' default stying choices. 


I'm building a game that has the computer guess a random letter in the English Alphabet and the user has to guess which letter the computer chose randomly. 
Here's the instructions given:
You're going to make a game just like the one in the [https://www.youtube.com/watch?v=qTc45Lox97g&feature=youtu.be]. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
- Guess what letter I'm thinking of
- Wins: (# of times the user has guessed the letter correctly)
- Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
- Guesses Left: (# of guesses left. This will update)
- Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
- When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
- When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
-------------------------------------------------------
HERE's the psudo code which I'll use as comments in the HTML document to structure my thought:
* create divs for all the text that'll be on the screen:
- Psychic game / "Guess what letter I'm thinking of" / Wins: / Losses: / Guesses Left: / Your Guesses So Far:
- put <br> after all the text divs

* Wins/Losses/Guesses Left/Your Guesse So Far are written on the web page
 -- they all are divs and have id's 
 
 -- call the id's in events with functions!
 - declare variables for computer guess and user guess
 - use onkeypress event type for USER guess function  
 -- document.getElementById("demo").onkeypress = function() {myFunction()};
 -- then for having the key pressed by user show up in screen, use 
 function myFunction() {
  document.getElementById("id name of Guesses so far") 0000.style.backgroundColor = "red";0000
}

 - declare a function for computer guess and user guess
 -- use the functions created to plug into the "keypress" event
 - declare a variable for computerChoice set to an array of all the English alphabets a-z
 (would the user be able to play with pressing capital letters or keys other than small letters on the keyboard?)
 - declare a variable COMPUTER guess to be set to computer choices which hold the function of the random number generator -- Math.floor(Math.random() * 28) -- 28 since the computer will pick b/n 1 and 27- # of letters in the alphabet. FYI Math.random() picks a decimal between 0.01 and 0.99 and Math.floor rounds down to the closest whole number


* each of those text on the page have counters that go up by one each time there's an event
-- use the id's of the text on the page to increment the counter by one 
* limit the user guesses to 10
-- use if/then stmts to alert user 
* have an event when the user wins and when they lose 
------- to print out user key press on screen, use: 
- First declare a function to hold an event,  
-- function guessesFunction(event)
            (you'll place the function inside the guesses so far div outside of the <script> tag)
- and inside the function that holds an event, declare a variable to hold the event of a key press
- -- var x = event.key;
- also, inside the function that holds an event, access the HTML document, get element by id for the divs that hold the Guesses so far and use the .innerHTML property to display it
- 
 document.getElementById("id name for Wins/Losses").innerHTML= x
 

* When the player wins, increase the Wins counter and start the game over again (without refreshing the page).\
- use if stmt (w/o else) to increase by 1 [wins++] everytime computerGuess === userGuess
- declare a variable and initialize Wins to 0 to start with
- use a do/while loop to keep increasing the [Wins] counter by one while it's less than or equal to 10
do {
  wins++
}
while (userGuess === ComputerGuess);
* When the player loses, increase the Losses counter and restart the game without a page refresh
- use if stmt (w/o else) to increase by 1 [Loss++] everytime computerGuess !== userGuess
- declare a variable and initialize Loss to 0 to start with 
- use a do/while loop to keep increasing the [loss] counter by one while it's less than or equal to [<=] 10

- do the same getelementbyid for both wins/loss divs