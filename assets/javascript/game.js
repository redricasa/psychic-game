// - declare variables for computer guess and user guess
// declare a variable for computerChoice set
//  to an array of all the English alphabets a-z
var compChoice= ['a','b','c','d','e','f','g', 'h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];
// declare a variable COMPUTER guess to be set to computer choices which hold the function of the random number generator
//  -- Math.floor(Math.random() * 28) //-- 28 since the computer will pick b/n 1 and 27- # of letters in the alphabet.
// var compGuess = compChoice[Math.floor(Math.random() * 28)];
// console.log(compGuess)

function chooseLetter(array) {
//using 'array' in the argument in order to use the function again with other arrays
  var arrayLength=array.length;
  var randomDecimal=Math.random();//returns a random # b/n 0.01 and 0.99
  var decimalIndex= arrayLength *randomDecimal;//changes 10^1 from 10^-1;meaning 0.26 to 25.74
  var index=Math.floor(decimalIndex);//changes from 0 to 25
  var letter=array[index]; //access the letter at the index
  return letter;

// return (array[Math.floor(Math.random() * array.length)]);
// choose a random letter from array
}
var compLetter;
//declared a variable to run the function
// var userGuess --
// // - use onkeypress event type for USER guess function  
// document.addEventListener("keypress", function(event){
//   console.log(event);
// });
var guessesLeft;
var totalGuesses;
//computer chooses a new letter- we get a new compLetter, and resets guesses left
function newGame(){
  compLetter= chooseLetter(compChoice);
  totalGuesses="";
  console.log('Comp Letter:', compLetter);// console loggs out compChoice 
}
newGame();//calls newgame function

var win = 0;
var loss = 0;
function onkeypress(event){
  var guessedKey = event.key;
  totalGuesses+=(" "+ guessedKey)
  if(guessesLeft>0){
    if (guessedKey === compLetter){

      win++;
      newGame();//calls newgame function
    }
    else{
      guessesLeft--;
    }
  }
  else{
    loss++;//increments loss counter by one
    newGame();
  }
}
//every choice decrements the number of guesses
document.addEventListener("keypress", onKeyPress);




// reset game by getting a new compLetter without refreshing the page



//     document.getElementById("guessesSoFar").onkeypress = function() {userGuessFunction()};

//     // declare a function for computer guess and user guess
//     function compGuessFunction(){};
//     //plug in the userGuessFunction declared here in the getElementById line above
//     function userGuessFunction(){

//     };
  
//     // - use the id's of the text on the page to increment the counters by one
//        var winsCounter= wins++;
//        var lossCounter= losses++;
        
// // * use if/then stmts to limit the guesses left to 10 
//     if ("guessesLeft"=10){
//         ;
//     }
// // maybe for loop is better?
//     var guessLeft;
//     for (guessLeft=0; guessLeft <=10; guessLeft--){
//         ; //display guessLeft 10 down to 1 on 
//     }


