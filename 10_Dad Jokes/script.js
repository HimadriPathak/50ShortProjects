const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeDiv.innerHTML = data.joke;
//     });
// };

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();
  jokeDiv.innerHTML = data.joke;
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
