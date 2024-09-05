

let clickCount = 0;
const passCount = 30;
const timeLimit = 10000; // Seconds


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
    if (clickCount >= passCount) {
        pass();
    }
}

let countdown = 10

const intervalId = setInterval(() => {
    time.innerText = countdown;
    countdown--;
  
  
    if (countdown === 0) {
      clearInterval(intervalId);
      window.location.href = 'https://www.google.com';
    }
  }, 1000);
  