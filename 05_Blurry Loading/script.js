const loadText = document.querySelector('.loading-text');
const img = document.querySelector('.bg');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }
  console.log(load);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); //at 0 the object is hidden therefore 1 is min and 0 is max
  img.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`; // same as the above at 50px the image is blurry and at 0 it is clear so we travel from 50 to 0(min to max)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
