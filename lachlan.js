
let clickCount = 0;
const passCount = 30;
const timeLimit = 5000; // Milliseconds

function startTimer() {
setTimeout(function() {
    if (clickCount >= passCount) {
        pass();
    } else {
        fail();
    }
}, timeLimit);

}
setTimeout(function() {
    
}
)

function pass() {
    alert("You Have Won!");
    window.location.href = "file:///C:/Users/cybercuda10/OneDrive%20-%20Bayside%20Christian%20College/Documents/DigitechT2-2024/lachlan_room007.html"
}

function fail() {
    alert("You Didn't Break Down The Door!");
    window.location.reload()
}

function clicked() {
    if (clickCount==0){
        startTimer();
    }
    clickCount += 1;
    clicks.innerHTML = clickCount;
}
