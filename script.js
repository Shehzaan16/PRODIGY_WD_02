let timer;
let seconds = 0;
let isRunning = false;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", recordLap);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      display.textContent = formatTime(seconds);
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = `Lap: ${formatTime(seconds)}`;
    laps.appendChild(li);
  }
}

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
