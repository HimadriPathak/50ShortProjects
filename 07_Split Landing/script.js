const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let leftVote = 0;
let rightVote = 0;

btnLeft.addEventListener('click', () => {
  leftVote++;
  document.querySelector('.left-vote').innerHTML = `${leftVote}`;
});

btnRight.addEventListener('click', () => {
  rightVote++;
  document.querySelector('.right-vote').innerHTML = `${rightVote}`;
});

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});
