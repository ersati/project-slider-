const slideList = [
  "img/img0.jpg",
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
];

const dots = [...document.querySelectorAll(".slider__dots .slider__dot")];
const image = document.querySelector(".slider__img");
const sliderLeftArrow = document.querySelector(".slider__leftArrow");
const sliderRightArrow = document.querySelector(".slider__rightArrow");

const time = 3000;
let number = 0;

const changeDots = () => {
  const activeDots = dots.findIndex((dot) =>
    dot.classList.contains("slider__dot--active")
  );
  dots[activeDots].classList.remove("slider__dot--active");
  dots[number].classList.add("slider__dot--active");
};

function changeSlide() {
  number++;
  if (number > slideList.length - 1) {
    number = 0;
  }
  image.src = slideList[number];
  changeDots();
}
let indexInterval = setInterval(changeSlide, time);

//arrows
const clickSlideChange = (e) => {
  if (e.target == sliderLeftArrow || e.target == sliderRightArrow) {
    clearInterval(indexInterval);
    e.target == sliderLeftArrow ? number-- : number++;
    if (number === slideList.length) {
      number = 0;
    } else if (number < 0) {
      number = slideList.length - 1;
    }
    image.src = slideList[number];
    changeDots();
    indexInterval = setInterval(changeSlide, time);
  }
};

//dots
const changeSlideByDot = (e) => {
  let num = e.target.innerText;
  clearInterval(indexInterval);
  number = num - 1;
  image.src = slideList[number];
  changeDots();
  indexInterval = setInterval(changeSlide, time);
};

//keyboards arrow
const keyChangeSlide = (e) => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? number-- : number++;
    if (number === slideList.length) {
      number = 0;
    } else if (number < 0) {
      number = slideList.length - 1;
    }
    image.src = slideList[number];
    changeDots();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);
window.addEventListener("click", clickSlideChange);
dots.forEach((dot) => {
  dot.addEventListener("click", changeSlideByDot);
});
