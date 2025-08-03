// Meditation JavaScript

const audio = document.getElementById("meditationAudio");
const timerDisplay = document.getElementById("timer");
const playPauseButton = document.getElementById("playPauseButton");
const loopButton = document.getElementById("loopButton");

let isPlaying = false;
let isLooping = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function updateTimer() {
  timerDisplay.textContent = formatTime(Math.floor(audio.currentTime));
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = "Play";
  } else {
    audio.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

function toggleLoop() {
  audio.loop = !audio.loop;
  isLooping = audio.loop;
  loopButton.textContent = isLooping ? "Stop Loop" : "Loop";
}

audio.addEventListener("timeupdate", updateTimer);

// Autoplay meditation audio when the page is loaded
audio.autoplay = true;
playPauseButton.textContent = "Pause";
isPlaying = true;
