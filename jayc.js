
let clickCount = 0;
const passCount = 100;
const timeLimit = 15000; // Milliseconds


setTimeout(function() {
    if (clickCount >= passCount) {
        pass();
    } else {
        fail();
    }
}, timeLimit);


function pass() {
    alert("you killed the zombie!");
}

function fail() {
    alert("you died!");
}

function clicked() {
    clickCount += 1;
    clicks.innerHTML = clickCount;
}

