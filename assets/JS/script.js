var animalImage = document.getElementById("animal-image");
var answerInput = document.getElementById("answer-input");
var submitButton = document.getElementById("submit-button");
var feedbackElement = document.getElementById("feedback");
var player1ScoreElement = document.getElementById("player1-score");
var player2ScoreElement = document.getElementById("player2-score");
var resetButton = document.getElementById("reset-button");

var player1Score = 0;
var player2Score = 0;
var currentPlayer = 1;
var currentAnimal = null;

submitButton.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", resetGame);

function generateAnimal() {
    var animals = [
        { image: "bear.jpg", answer: "bear" },
        { image: "owl.jpg", answer: "owl" },
        { image: "dear.jpg", answer: "dear" },
        { image: "snake.jpg", answer: "snake" },
        { image: "squirrel.jpg", answer: "squirrel" },
        { image: "koala.jpg", answer: "koala" },
        { image: "frog.jpg", answer: "frog" },
        { image: "lion.jpg", answer: "lion" },
        { image: "wolf.jpg", answer: "wolf" },
        { image: "elephant.jpg", answer: "squelephant" }
    ];

    var randomIndex = Math.floor(Math.random() * animals.length);
    currentAnimal = animals[randomIndex];
    animalImage.src = "assets/images/" + currentAnimal.image;
}

function checkAnswer() {
    var answer = answerInput.value.toLowerCase();
    var feedback = "";

    if (answer === currentAnimal.answer) {
        feedback = "Correct! It's a " + currentAnimal.answer + "!";
        if (currentPlayer === 1) {
            player1Score++;
            if (player1Score === 5) {
                declareWinner("Player 1");
                return;
            }
        } else {
            player2Score++;
            if (player2Score === 5) {
                declareWinner("Player 2");
                return;
            }
        }
    } else {
        feedback = "Oops! Try again!";
    }

    feedbackElement.textContent = feedback;
    answerInput.value = "";

    updateScores();
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    generateAnimal();
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    feedbackElement.textContent = "";
    updateScores();
    submitButton.disabled = false;
    generateAnimal();
}

function declareWinner(winner) {
    feedbackElement.textContent = winner + " wins the game!";
    submitButton.disabled = true;
}

function updateScores() {
    player1ScoreElement.textContent = "Player 1: " + player1Score;
    player2ScoreElement.textContent = "Player 2: " + player2Score;
}

generateAnimal();

