function currentTime() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  const secondsHand = document.querySelector(".seconds-hand");
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  const minutesHands = document.querySelector(".minutes-hand");
  minutesHands.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = time.getHours();
  const hoursDegrees = (hours / 12) * 360;
  const hoursHand = document.querySelector(".hours-hand");
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const analogTime = document.querySelector(".analog-time");
  analogTime.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(currentTime, 1000);

function getDate() {
  const date = new Date();

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const currentDate = document.querySelector(".current-date");
  currentDate.textContent = `${month}/${day}/${year}`;
}

setInterval(getDate, 1000);
