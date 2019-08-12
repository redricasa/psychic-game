
//declare variables to store info the span elements that would be responsive text
var winsElement = document.getElementById("wins-text");
var lossElement = document.getElementById("losses-text");
var guessesElement = document.getElementById("guesses-text");
var soFarElement = document.getElementById("soFar-text");

// declare a variable for computerChoice set
//  to an array of all the English alphabets a-z
var compChoice= ['a','b','c','d','e','f','g', 'h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];
// declare a variable COMPUTER guess to be set to computer choices which hold the function of the random number generator
//  -- Math.floor(Math.random() * 28) //-- 28 since the computer will pick b/n 1 and 27- # of letters in the alphabet.
// var compGuess = compChoice[Math.floor(Math.random() * 28)];
// console.log(compGuess)

function chooseLetter(array) {//using 'array' in the argument in order to use the function again with other arrays
  var arrayLength=array.length;
  var randomDecimal=Math.random();//returns a random # b/n 0.01 and 0.99
  var decimalIndex= arrayLength *randomDecimal;//changes 10^1 from 10^-1;meaning 0.26 to 25.74
  var index=Math.floor(decimalIndex);//changes from 0 to 25
  var letter=array[index]; //access the letter at the index
  return letter;
// return (array[Math.floor(Math.random() * array.length)]); choose a random letter from array
}

var compLetter;
var guessesLeft;
var totalGuesses;
//computer chooses a new letter- we get a new compLetter, and resets guesses left
function newGame(){
  compLetter= chooseLetter(compChoice);
  totalGuesses="";
  guessesLeft=10;
  soFarElement.innerHTML= totalGuesses;
  console.log('Comp Letter:', compLetter);// console loggs out compChoice 
  updatePage();
}
newGame();//calls newgame function
//counters declared set to 0
var win = 0;
var loss = 0;

updatePage();

function updatePage(){ 
  //.innerHTML method to take the variables declared(to store dynamic user input and counters), 
  //and sets it to variables declared above that will be used in the onKeyPress function
  guessesElement.innerHTML=guessesLeft;
  soFarElement.innerHTML= totalGuesses;
  winsElement.innerHTML=win;
  lossElement.innerHTML=loss;
}
function onKeyPress(event){
  var guessedKey = event.key;
  totalGuesses+=(" "+ guessedKey);
  
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
  updatePage();
}
//every choice decrements the number of guesses
document.addEventListener("keypress", onKeyPress);




