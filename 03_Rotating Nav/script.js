const openbtn = document.getElementById('open');
const container = document.querySelector('.container');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click', () => {
  container.classList.add('show-nav');
});

closebtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
