const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const currentDate = new Date();

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedText = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    alt="Laptop on a desk">`;

  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, vel.';

  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;

  name.innerHTML = 'Ziggy Bee';
  date.innerHTML = 'July 19, 2022';
  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
  animatedText.forEach(text => text.classList.remove('animated-bg-text'));
}
