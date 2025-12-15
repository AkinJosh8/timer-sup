let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start-Btn');
let resetBtn = document.getElementById('reset-Btn');
let hoursInput = document.getElementById('hours-input');
let minutesInput = document.getElementById('minutes-input');
let secondsInput = document.getElementById('seconds-input');

let time;
let intervalId;

function updateTimer() {
    let currentHours = Math.floor(time / 3600);
    let currentMinutes = Math.floor((time % 3600) / 60);
    let currentSeconds = time % 60;
    timerDisplay.innerText = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    time = (hours * 3600) + (minutes * 60) + seconds;
    // Redirect to timerpage.html with the time as a query parameter
    window.location.href = `timerpage.html?time=${time}`;
}

function resetTimer() {
    clearInterval(intervalId);
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    updateTimer();
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    time = parseInt(urlParams.get('time')) || 0; // Ensure time is an integer
    updateTimer();

    if (time > 0) {
        intervalId = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimer();
            } else {
                clearInterval(intervalId);
                timerDisplay.innerText = 'Time\'s up!';
            }
        }, 1000);
    }
};

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
updateTimer();
