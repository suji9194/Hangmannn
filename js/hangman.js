<<<<<<< HEAD
var programming_languages = [
	"walmart",
  "Amazon",
  "Apple",
  "CVS",
  "UnitedHealth",
  "Berkshire",
  "McKesson",
  "AmerisourceBergen",
  "Alphabet",
  "Exon",
  "AT&T",
  "Costoco",
  "Cigna",
  "Cardinal",
  "Microsoft",
  "Walgreen",
  "Kroger",
  "Home",
  "Chase",
  "Verizon"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Did It!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Try Again!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
=======
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=2.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Bootstrap 4 CDN -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

  <title>Hangman</title>
</head>
<body>
<div class="container p-3 my-3 bg-primary text-white">
  <h1 class="text-center">HangMan</h1>
  <h2 class="text-center">Top 20 Fortune Company</h1>
  <div class="float-right">Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span></div>
  <div class="text-center">
    <img id='work' src="./images/workk.jpeg" alt="">
    <img id='hangmanPic' src="./images/0.jpg" alt="">
    <p>Time To Guess!</p>
    <p id="wordSpotlight">The word to be guessed</p>
    <div id="keyboard"></div>
    <button class="btn btn-info" onClick="reset()">Restart</button>
  </div> 
</div>

<script src='./js/hangman.js'></script>
</body>
</html>
>>>>>>> 0742be604b7a57667eca315bd1abfb3c69510829
