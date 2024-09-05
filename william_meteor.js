// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Load the sprite image
const sprite = new Image();
sprite.src = 'william_player_pngegg.png';

// Load the background image
const background = new Image();
background.src = 'william_background.png';

// Load the meteor image
const meteorImage = new Image();
meteorImage.src = 'william_zombie_meteor_pngegg.png';

const numberOfMeteors = 7;

// Set the initial position of the sprite
let spriteX = canvas.width / 2;
let spriteY = canvas.height - 64;

// Set the speed at which the sprite moves
var spriteSpeed = 8;

// Store the state of the arrow keys
const keys = {};

// Store the meteors
const meteors = [];

var paused = true;
var gameIsOver = false;

// create 5 meteor sprites and store then in the meteors array
for (let i = 0; i < numberOfMeteors; i++) {
    const meteorX = Math.random() * canvas.width;
    const meteorY = Math.random() * canvas.height;
    const meteorSpeed = Math.random() * 3 + 5;
    meteors.push({ x: meteorX, y: meteorY, speed: meteorSpeed });
}

// Add event listeners for keydown and keyup events
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

// add an event listener so when the space key is pressed the paused flag is set to false
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        paused = false;
    }
});

    // Wait for 30 seconds
    setTimeout(() => {
        // Redirect to another URL
        window.location.href = "file:///C:/Users/william.tom/OneDrive%20-%20Bayside%20Christian%20College/Documents/DigiTech/Term%203/DigitechT2-2024/william_room007.html";
    }, 30000);



// Game loop
function gameLoop() {
    // Clear the canvas
    drawScreen();
    // Request the next animation frame
    requestAnimationFrame(gameLoop);

    if (paused) {
        return;
    }   


    // Move the sprite based on the arrow keys
    handleKeys();

    // Draw the sprite on the canvas
    drawPlayer();

    // Spawn meteors randomly
    handleMeteors();

    collisionDetect();


}



// Start the game loop
gameLoop();


function drawPlayer() {
    ctx.drawImage(sprite, spriteX, spriteY);
}

function handleKeys() {
    if (keys['ArrowLeft'] && spriteX > 0) {
        spriteX -= spriteSpeed;
    }

    if (keys['ArrowRight'] && spriteX < canvas.width - sprite.width) {
        spriteX += spriteSpeed;
    }
}

function drawScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background image on the canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    if (gameIsOver) {
        // Add Game Over text on the screen
        ctx.font = "48px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Zombie Food!", canvas.width / 2 - 100, canvas.height / 2);
    } else {
        if (paused) {
            // Add Paused text on the screen
            ctx.font = "48px Arial";
            ctx.fillStyle = "red";
            ctx.fillText("Press Space", canvas.width / 2 - 100, canvas.height / 2);
        }
    }
}

function handleMeteors() {


    // Update and draw meteors
    for (let i = 0; i < meteors.length; i++) {
        const meteor = meteors[i];
        meteor.y += meteor.speed;

        // If meteor reaches the bottom, reposition it at the top
        if (meteor.y > canvas.height) {
            meteor.x = Math.random() * canvas.width;
            meteor.y = 0;
            meteor.speed = Math.random() * 3 + 4;
        }

        // Draw the meteor on the canvas
        ctx.drawImage(meteorImage, meteor.x, meteor.y);
    }
}

// Function to detect collision between meteor and player sprites
function collisionDetect() {
    for (let i = 0; i < meteors.length; i++) {
        const meteor = meteors[i];

        // Calculate the distance between meteor and player sprites
        const dx = spriteX - meteor.x;
        const dy = spriteY - meteor.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the distance is less than the width of the meteor image, the game is paused
        if (distance < meteorImage.width) {
           gameOver();
        }
    }
}
function gameOver() {
    paused = true;
    gameIsOver = true;


    // Wait for 3 seconds
    setTimeout(() => {
        // Redirect to another URL
        window.location.href = "file:///C:/Users/william.tom/OneDrive%20-%20Bayside%20Christian%20College/Documents/DigiTech/Term%203/DigitechT2-2024/william_room008.html";
    }, 3000);
}


