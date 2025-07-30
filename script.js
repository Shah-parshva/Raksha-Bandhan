// Countdown to Raksha Bandhan
function startCountdown() {
  const date = new Date("August 9, 2025 00:00:00").getTime();
  const timer = document.getElementById("timer");

  setInterval(() => {
    const now = new Date().getTime();
    const dist = date - now;

    if (dist <= 0) {
      timer.innerHTML = "🎉 It's Raksha Bandhan Today!";
      return;
    }

    const d = Math.floor(dist / (1000 * 60 * 60 * 24));
    const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dist % (1000 * 60)) / 1000);

    timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}

// Show surprise message and photo on gift click
function openGift() {
  const surprise = document.getElementById("surpriseMessage");
  surprise.style.display = "block";
  surprise.classList.add("animate-reveal"); // optional animation class
}

// Toggle background music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Play pre-recorded Raksha Bandhan wish
function playWish() {
  const wish = document.getElementById("wishAudio");
  wish.play();
}
