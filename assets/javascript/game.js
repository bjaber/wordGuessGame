var wins = 0;
var losses =0;
var ties = 0;

addEventListener("keyup",myFunction);
function myFunction(){

let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

alert("you pressed " + userGuess);

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

alert("computer guessed "+ computerGuess);
if (userGuess === computerGuess){

    alert("you win! Nice work! ")
    wins++;
}

else{

    alert("ooppss! Try again homie!")
    losses++;
}
};