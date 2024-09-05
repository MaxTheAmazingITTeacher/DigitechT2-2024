
let clickCount = 0;
const passCount = 30;
const timeLimit = 10000; // Milliseconds


setTimeout(function() {
    if (clickCount >= passCount) {
        pass();
    } else {
        fail();
    }
}, timeLimit);


function pass() {
    alert("you fixed it!");
}

function fail() {
    alert("you broke it!");
}

function clicked() {
    clickCount += 1;
    clicks.innerHTML = clickCount;
}

