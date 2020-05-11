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

const clickSlideChange = (e) => {
  if (e.target == sliderLeftArrow) {
    console.log(e.target);
  }
};

window.addEventListener("click", clickSlideChange);
