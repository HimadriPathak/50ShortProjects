const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'error', 'success', 'warning'];

button.addEventListener('click', () => createNotification());

const createNotification = (message = null, type = null) => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type ? type : getRandomType());

  toast.innerText = message ? message : getRandomMessage();

  toasts.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};
