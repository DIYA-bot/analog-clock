// script.js
function updateClock() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6; // 360deg / 60sec
  const minuteDeg = minute * 6 + second * 0.1; // extra smooth
  const hourDeg = hour * 30 + minute * 0.5; // 360deg / 12hr + offset

  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // run once immediately
