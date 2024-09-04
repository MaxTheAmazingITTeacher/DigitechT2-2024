const leftBox = document.getElementById("leftBox");
const rightBox = document.getElementById("rightBox");
const line = document.querySelector(".line");
const centerBox = document.getElementById("centerBox");

let linePosition = 50; // Percentage
var lineMovement = 2; // Pixels
const movementInterval = 50; // Milliseconds
const successTimer = 30000; // Milliseconds
let timerId;
let redirectTimerId;

// Set initial line position in JavaScript
line.style.left = '50%'

function startGame() {
    timerId = setInterval(() => {
        randomMovement();
    }, movementInterval);

    redirectTimerId = setTimeout(() => {
        redirectToAnotherPage();
    }, successTimer); // Redirect after this many milliseconds
}


function moveLine(distance) {
    linePosition += distance;
    line.style.left = `${linePosition}%`;
    checkWinLose();
}

function randomMovement() {
    const randomNumber = Math.random();
    if (randomNumber > 0.98) {
        lineMovement *= -1;
    }
    moveLine(lineMovement);
}

function checkWinLose() {
    if (linePosition <= 0 || linePosition >= 100) {
        clearInterval(timerId);
        clearTimeout(redirectTimerId); // Clear the redirect timer
        alert("You Lose! - Try again!");
        setTimeout(() => window.location.reload(), 1000); // Reload after 1 second
    }
}

function redirectToAnotherPage() {
    window.location.href = "kalan2.html"; // Replace with the URL of the page you want to redirect to
}

// -----------------------------------------------
leftBox.addEventListener("click", () => {
    moveLine(-lineMovement * 10);
});

rightBox.addEventListener("click", () => {
    moveLine(lineMovement * 10);
});

startGame();
