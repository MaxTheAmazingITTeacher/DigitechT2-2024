const compass = document.getElementById('compass');
const arrow = document.querySelector('.arrow');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const counterSpan = document.getElementById('counter');

let rotationSpeed = 2;
let rotation = 0;
let direction = 1; // 1: clockwise, -1: anticlockwise
let counter = 32;
const threshold = 5; // degrees for considering stopped state

function updateCompass() {
  rotation += rotationSpeed * direction;
  rotation = rotation % 360;
  compass.style.transform = `rotate(${rotation}deg)`;
}

// function changeDirection() {
//   direction *= -1;
//   rotationSpeed = 5;
// }

function updateCounter() {
  if (Math.abs(rotation) < threshold) {
    counter--;
  }
  counterSpan.innerHTML = `${counter}`;
  if (counter <= 0) {
    gotonextpage();
  }
}



setInterval(() => {
  // if (Math.random() > 0.9) {
  //   changeDirection();
  // }
  //rotationSpeed += 1  * direction; // Randomly change speed within limits
  if (Math.abs(rotation) < 5 && Math.abs(rotation) > -5 && counter == 0) {
    // Game Over logic (replace with your desired action)
    alert('Game Over!');
  }
  console.log(`rot ${rotationSpeed}`);
  updateCompass();
  updateCounter();
}, 50); // Update every 50 milliseconds

function gotonextpage() {

  window.location.href = "keanupass.html"; // Replace with the URL of the page you want to redirect to 

} 

function leftClick() {
  console.log("left click");
  direction = -1;
  updateCompass();
}
function rightClick() {
  console.log("right click");

  direction = 1;
  updateCompass();
}

