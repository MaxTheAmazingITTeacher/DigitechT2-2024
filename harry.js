let clickCount = 0;
const passCount = 150;
const timeLimit = 40000; // Milliseconds
var countdown = timeLimit / 1000;



setTimeout(function() {
    if (clickCount >= passCount) {
        pass();
    } else {
        fail();
    }
}, timeLimit);


function pass() {
    redirectToPassPage()
}
function fail() {
    
        redirectToFailPage();
    } 


function clicked() {
    clickCount += 1;
    clicks.innerHTML = clickCount;
    console.log("Click count ", clickCount, "passcount ", passCount);
    if(clickCount >= passCount) {
        pass();
    }
}

function redirectToPassPage(){
    window.location.href = "jayden_room001.html";
}

function redirectToFailPage(){
    window.location.href = "harry_room008.html";
}


function getRandomInt(harry) {
    return Math.floor(Math.random() * harry);
  }  


const intervalId = setInterval(() => {

  document.getElementById('countdown').innerText = countdown;
  countdown--;


}, 1000);
