const ticks = document.getElementsByClassName('ticks');

const hour   = document.getElementsByClassName('hour');
const minute = document.getElementsByClassName('minute');
const second = document.getElementsByClassName('second');
const secondTail = document.getElementsByClassName('secondTail');

const month = document.getElementsByClassName('month');
const day   = document.getElementsByClassName('day');
const year  = document.getElementsByClassName('year');

const numbers = document.getElementsByClassName('numbers');

const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const tickCount = 72 * 5;

const time      = new Date();
const monthVal = monthNames[time.getMonth()];
const dayVal   = ("0" + time.getDate()).slice(-2);
const yearVal  = time.getFullYear().toString().substr(2, 2);

let tick;
let tickMark;
let number;
let numberText;

function renderTicks() {
  for (let i = 0; i < tickCount; i += 6) {
    tick     = document.createElement('div');
    ticks[0].appendChild(tick);

    tick.setAttribute('class', 'tick pos-' + i);
    tick.setAttribute('style', 'transform: rotate(' + i + 'deg) translate(-50%, 0);');

    tickMark = document.createElement('div');
    tick.appendChild(tickMark);
  }
}

function renderNumbers() {
  for (let i = 0; i < 12; i++) {
    number = document.createElement('div');
    numbers[0].appendChild(number);

    number.setAttribute(`class`,`number number-${i+1}`);
    // number.style.transform = 'translate(-50%, 0) rotate(${i*30}deg);';

    numberText = document.createElement('div');
    number.appendChild(numberText);

    numberText.innerHTML = i+1;
  }
}

function getDate() {
  month[0].innerHTML = monthVal;
  day[0].innerHTML   = dayVal;
  year[0].innerHTML  = yearVal;
}

function startClock() {
  const time       = new Date(),
        hourPos    = ((time.getHours() % 12) + time.getMinutes() / 60) * 30,
        minutesPos = (time.getMinutes() + time.getSeconds() / 60) * 6,
        secondsPos = (time.getSeconds() + time.getMilliseconds() / 1000) * 6;

  for (let i = 0; i < hour.length; i++) {
    hour[i].style.transform = (`rotate(${ hourPos }deg)`);
  }
  for (let i = 0; i < minute.length; i++) {
    minute[i].style.transform = (`rotate(${ minutesPos }deg)`);
  }
  for (let i = 0; i < second.length; i++) {
    second[i].style.transform = (`rotate(${ secondsPos }deg)`);
    // secondTail[i].style.transform = (`rotate(${ secondsPos }deg)`);
  }
}

function init() {
  month[0].innerHTML = monthVal;
  day[0].innerHTML   = dayVal;
  year[0].innerHTML  = yearVal;
  renderTicks();
  renderNumbers();
  setInterval(getDate, 10000);
  setInterval(startClock, 30);
}

init();

