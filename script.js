let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', changeColor);

function changeColor(){
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}



const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slides = document.querySelectorAll('.slide');
let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slider.appendChild(firstClone);
slider.prepend(lastClone);

const slideWidth = slides[0].clientWidth;
let index = 1;
slider.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
    setInterval(() => {
        moveToNextSlide();
    }, 3000);
};

const moveToNextSlide = () => {
    if (index >= slides.length - 1) return;
    index++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPrevSlide = () => {
    if (index <= 0) return;
    index--;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
};

slider.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');
    if (slides[index].id === firstClone.id) {
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if (slides[index].id === lastClone.id) {
        slider.style.transition = 'none';
        index = slides.length - 2;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

startSlide();


