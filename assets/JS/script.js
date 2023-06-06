var animalImage = document.getElementById("animal-image"); // Get the animal image element
var answerInput = document.getElementById("answer-input"); // Get the answer input element
var submitButton = document.getElementById("submit-button"); // Get the submit button element
var feedbackElement = document.getElementById("feedback"); // Get the feedback element
var player1ScoreElement = document.getElementById("player1-score"); // Get the player 1 score element
var player2ScoreElement = document.getElementById("player2-score"); // Get the player 2 score element
var resetButton = document.getElementById("reset-button"); // Get the reset button element

var player1Score = 0; // Initialize player 1's score
var player2Score = 0; // Initialize player 2's score
var currentPlayer = 1; // Initialize the current player to player 1
var currentAnimal = null; // Initialize the current animal being displayed

submitButton.addEventListener("click", checkAnswer); // Add event listener to the submit button
resetButton.addEventListener("click", resetGame); // Add event listener to the reset button

function generateAnimal() {
    var animals = [
        { image: "bear.jpg", answer: "bear" },
        { image: "owl.jpg", answer: "owl" },
        { image: "deer.jpg", answer: "deer" },
        { image: "snake.jpg", answer: "snake" },
        { image: "squirrel.jpg", answer: "squirrel" },
        { image: "koala.jpg", answer: "koala" },
        { image: "frog.jpg", answer: "frog" },
        { image: "lion.jpg", answer: "lion" },
        { image: "wolf.jpg", answer: "wolf" },
        { image: "elephant.jpg", answer: "elephant" }
    ];

    var randomIndex = Math.floor(Math.random() * animals.length);
    currentAnimal = animals[randomIndex]; // Select a random animal from the array
    animalImage.src = "assets/images/" + currentAnimal.image; // Set the source of the animal image
}

function checkAnswer() {
    var answer = answerInput.value.toLowerCase(); // Get the user's answer and convert it to lowercase
    var feedback = ""; // Initialize the feedback message

    if (answer === currentAnimal.answer) {
        feedback = "Correct! It's a " + currentAnimal.answer + "!"; // Set the correct answer feedback
        if (currentPlayer === 1) {
            player1Score++; // Increment player 1's score
            if (player1Score === 5) {
                declareWinner("Player 1"); // Check if player 1 has reached the winning score
                return;
            }
        } else {
            player2Score++; // Increment player 2's score
            if (player2Score === 5) {
                declareWinner("Player 2"); // Check if player 2 has reached the winning score
                return;
            }
        }
    } else {
        feedback = "Oops! Try again!"; // Set the incorrect answer feedback
    }

    feedbackElement.textContent = feedback; // Display the feedback message
    answerInput.value = ""; // Clear the answer input field

    updateScores(); // Update the scores on the page
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch to the next player
    generateAnimal(); // Generate a new animal
}

function resetGame() {
    player1Score = 0; // Reset player 1's score
    player2Score = 0; // Reset player 2's score
    currentPlayer = 1; // Reset the current player to player 1
    feedbackElement.textContent = ""; // Clear the feedback message
    updateScores(); // Update the scores on the page
    submitButton.disabled = false; // Enable the submit button
    generateAnimal(); // Generate a new animal
}

function declareWinner(winner) {
    feedbackElement.textContent = winner + " wins the game!"; // Display the winner message
    submitButton.disabled = true; // Disable the submit button
}

function updateScores() {
    player1ScoreElement.textContent = "Player 1: " + player1Score; // Display player 1's score
    player2ScoreElement.textContent = "Player 2: " + player2Score; // Display player 2's score
}

generateAnimal(); // Start the game by generating the first animal
