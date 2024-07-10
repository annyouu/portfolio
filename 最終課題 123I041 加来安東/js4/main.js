'use strict';
let n = 0;

const heart = document.getElementById('heart1');

const counter = document.getElementById('counter1');

heart.addEventListener('click', () => {
  n++;
  counter.textContent = n;
});

let m = 0;

const heart1 = document.getElementById('heart2');

const counter1 = document.getElementById('counter2');

heart1.addEventListener('click', () => {
  
  m++;
  counter1.textContent = m;
});

const share = document.getElementById('share');

share.addEventListener('click', () => {
  share.classList.toggle('append');
});

const mark = document.getElementById('mark');

mark.addEventListener('click', () => {
  mark.classList.toggle('append1');
});

const share1 = document.getElementById('share1');

share1.addEventListener('click', () => {
  share1.classList.toggle('append');
});

const mark1 = document.getElementById('mark1');

mark1.addEventListener('click', () => {
  mark1.classList.toggle('append1');
});







