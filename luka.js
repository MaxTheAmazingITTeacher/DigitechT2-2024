
let clickCount = 0;
const passCount = 50;
const timeLimit = 10000; //milliseconds 


setTimeout(function() {
    if (clickCount >= passCount) {
        pass();
    } else {
        fail();
    }
}, timeLimit);


function pass() {
    alert("GO MOVE ON!");
}

function fail() {
    alert("YOU GOT EATEN ALIVE!");
}

function clicked() {
    clickCount += 1;
    clicks.innerHTML = clickCount;
    if(clickCount >= passCount)
    {
        pass();
    }
}

