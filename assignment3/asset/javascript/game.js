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



console.log(alphabet);


function psychicGame() {
    //Create a random letter for the computer which will always be upper case
    var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    //Verify the desired result
    console.log(computerLetter);
    document.onkeyup = function (event) {
        var isLetter = alphabet.indexOf(event.key);
        if (isLetter !== -1) {
            var userLetterUpper = event.key.toUpperCase();
            {
                if (userLetterUpper === computerLetter) {
                    alert("You guess it! It was " + userLetterUpper);
                    console.log(wins.textContent);
                    wins.textContent -= -1;
                    userLetter.textContent = "";
                    guessesLeft.textContent = 9;
                    psychicGame();
                } else if (guessesLeft.textContent > "0") {
                    userLetter.textContent += userLetterUpper + ", ";
                    guessesLeft.textContent -= 1;
                } else {
                    alert("You ran out of guesses! Play again!");
                    losses.textContent -= -1;
                    userLetter.textContent = "";
                    guessesLeft.textContent = 9;
                    psychicGame();
                }
            }
        }
    }
};
psychicGame();