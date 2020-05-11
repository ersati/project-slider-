const slideList = [
  "img/img0.jpg",
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
];

const dots = [...document.querySelectorAll(".slider__dots .slider__dot")];
const image = document.querySelector(".slider__img");

const time = 3000;
let number = 0;
const changeDots = () => {
  const activeDots = dots.findIndex((dot) =>
    dot.classList.contains("slider__dot--active")
  );
  console.log(activeDots);
  console.log(number);
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
setInterval(changeSlide, time);
