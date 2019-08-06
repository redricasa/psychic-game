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

HERE's the psudo code which I'll use as comments in the HTML document to structure my thought:
* first, create a prompt for the user "Guess what letter I'm thinking of"
* Wins/Losses/Guesses Left/Your Guesse So Far are written on the web page
* each of those text on the page have counters that go up by one each time there's an event
* limit the user guesses to 10
* have an event when the user wins and when they lose 