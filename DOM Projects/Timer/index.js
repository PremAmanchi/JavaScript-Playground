// variables for the buttons
const play = document.getElementById("play");
const reset = document.getElementById("reset");

// variables for time
let displayTime = document.getElementById("timer");
let seconds = 0;
let minutes = 0;
let hours = 0;

// business logic
function timer() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }

  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  displaySeconds = displayValues(seconds);
  displayMinutes = displayValues(minutes);
  displayHours = displayValues(hours);

  displayTime.innerText =
    displayHours + " : " + displayMinutes + " : " + displaySeconds;
}

// setInterval(timer, 1000);

function displayValues(value) {
  return value < 10 ? "0" + value : value;
}

let timerStatus = false;
let timerInterval = null;

play.addEventListener("click", () => {
  if (timerStatus === false) {
    timerInterval = setInterval(timer, 1);
    play.innerText = "PAUSE";
    timerStatus = true;
  } else {
    play.innerText = "PLAY";
    clearInterval(timerInterval);
    timerStatus = false;
  }
});

reset.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerStatus = false;
  play.innerText = "PLAY";
  seconds = minutes = hours = 0;
  displayTime.innerText = "00 : 00 : 00";
});
