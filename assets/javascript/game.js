
var wins = 0;
var losses = 0;
var attempts = 10;
var playerGuess =[];
addEventListener("keyup", myFunction);
function myFunction() {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    alert("you pressed " + userGuess);

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    alert("computer guessed " + computerGuess);
    if (userGuess === computerGuess) {
        wins++;
        alert("you win! Nice work!")
    }
    else {
            attempts--;
            losses++;
            alert("ooppss! Try again homie!")
        }
        var winsBaby = document.getElementById("winsBaby");
        var takenLs = document.getElementById("takenLs");
        var cracksAtIt = document.getElementById("cracksAtIt");
        var playerGuess= document.getElementById("playerGuess")


        winsBaby.textContent = "winsBaby: " + wins;
        takenLs.textContent = "takenLs: " + losses;
        cracksAtIt.textContent = "cracksAtIt: " + attempts;
        playerGuess.textContent = "playerGuess: "+ userGuess;
    

        
    };
