//Create an array of characters from unicode letter 'charA' to letter 'charZ
function genCharArray(charA, charZ) {
    var arrayOfLetters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (i = i; i <= j; i++) {
        arrayOfLetters.push(String.fromCharCode(i));
    }
    return arrayOfLetters;
}

//Initialize variables
var userLetter = document.getElementById("lettersGuessed");
var guessesLeft = document.getElementById("guessesLeft");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var computerLetter = "";
var alphabet = [];


pickComputerLetter = function () {
    //Create a random letter for the computer which will always be upper case
    alphabet = genCharArray("A", "Z");
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    //console.log the computer letter for ease of testing conditions
    console.log(computerLetter);
}

//Initialize the game by creating the alphabet array and having the computer choose a random letter from the array
pickComputerLetter();


document.onkeyup = function (event) {
    //Make user input upper case, if applicable (i.e is a letter)
    var userLetterUpper = event.key.toUpperCase();
    //Check to see if key pressed is in the array. If not, nothing should happen
    var isLetter = alphabet.indexOf(userLetterUpper);
    if (isLetter !== -1) {
        {   
            //Check for win condition
            if (userLetterUpper === computerLetter) {
                userLetter.innerHTML += "<br><br>" + userLetterUpper + "!!!";
                setTimeout(function(){alert("You guess it! It was " + userLetterUpper);}, 100);
                setTimeout(function(){
                    wins.textContent = parseInt(wins.textContent) + 1;
                    userLetter.textContent = "";
                    guessesLeft.textContent = 9;}, 200);
                pickComputerLetter();
            //Formatting for initial guess
            } else if (guessesLeft.textContent == 9) {
                userLetter.textContent += userLetterUpper;
                guessesLeft.textContent -= 1;
                alphabet.splice(isLetter , 1);
            //Formatting for subsequent guesses before win/loss condition    
            } else if (guessesLeft.textContent > 1) {
                userLetter.textContent += ", " + userLetterUpper;
                guessesLeft.textContent -= 1;
                alphabet.splice(isLetter , 1);
            //Check for loss condition
            } else {
                guessesLeft.textContent -= 1;
                userLetter.textContent += ", " +userLetterUpper;
                setTimeout(function(){alert("You ran out of guesses! Play again!"); }, 100);
                setTimeout(function(){
                    losses.textContent = parseInt(losses.textContent) + 1;
                    userLetter.textContent = "";
                    guessesLeft.textContent = 9;}, 200);
                pickComputerLetter();
            }
        }
    }
}
