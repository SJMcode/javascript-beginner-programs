const hourHand = document.querySelector('#hours');
const minuteHand = document.querySelector('#minutes');
const secondHand = document.querySelector('#seconds');
const dayOfWeek = document.querySelector('#day');
const month = document.querySelector('#month');
const dateNumber = document.querySelector('#date');

function updateClock() {
  const now = new Date();

  hourHand.textContent = now.getHours();
  minuteHand.textContent = now.getMinutes();
  secondHand.textContent = now.getSeconds();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeek.textContent = days[now.getDay()];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month.textContent = months[now.getMonth()];

  dateNumber.textContent = now.getDate();
}

setInterval(updateClock, 1000);

updateClock();
