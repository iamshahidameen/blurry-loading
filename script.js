const counterHTML = document.querySelector(".counterHTML");
const bg = document.querySelector(".bg");

let counter = 1;

let interval = setInterval(blurry, 30);

function blurry() {
    counter++
     if(counter > 99 ) {
         clearInterval(interval);
     }

     counterHTML.innerText = `${counter}%`;
     counterHTML.style.opacity = scale(counter, 0, 100, 1, 0);
     bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`;
     
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) /(in_max - in_min) + out_min;
}