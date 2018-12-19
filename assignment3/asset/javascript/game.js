//Create an array of characters from unicode letter 'charA' to letter 'charZ
function genCharArray(charA, charZ) {
    var arrayOfLetters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (i = i; i <= j; i++) {
        arrayOfLetters.push(String.fromCharCode(i));
    }
    return arrayOfLetters;
}

//Concantinate lowercase and uppercase arrays of the alphabet
var alphabet = genCharArray("a", "z").concat(genCharArray("A", "Z"));

var userLetter = document.getElementById("lettersGuessed");
var guessesLeft = document.getElementById("guessesLeft");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var computerLetter = "";


console.log(alphabet);

pickComputerLetter = function () {
    //Create a random letter for the computer which will always be upper case
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    console.log(computerLetter);
}

pickComputerLetter();

document.onkeyup = function (event) {
    var isLetter = alphabet.indexOf(event.key);
    if (isLetter !== -1) {
        var userLetterUpper = event.key.toUpperCase();
        {   
            if (userLetterUpper === computerLetter) {
                userLetter.innerHTML += "<br><br>" + userLetterUpper + "!!!";
                setTimeout(function(){alert("You guess it! It was " + userLetterUpper);}, 100);
                setTimeout(function(){
                    wins.textContent = parseInt(wins.textContent) + 1;
                    userLetter.textContent = "";
                    guessesLeft.textContent = 9;}, 200);
                pickComputerLetter();
            
            } else if (guessesLeft.textContent == 9) {
                userLetter.textContent += userLetterUpper;
                guessesLeft.textContent -= 1;
            
            } else if (guessesLeft.textContent > 1) {
                userLetter.textContent += ", " + userLetterUpper;
                guessesLeft.textContent -= 1;
            
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
