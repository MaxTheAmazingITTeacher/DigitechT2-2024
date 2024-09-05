
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
    alert("YES RUN NOW");
}

function fail() {
    alert("OH YOU GOT EATEN ALIVE");
}

function clicked() {
    clickCount += 1;
    clicks.innerHTML = clickCount;
}

