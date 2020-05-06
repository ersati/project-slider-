const el = document.querySelector(".slider");
let number = Math.floor(Math.random() * 5) + 1;

function changeSlide() {
  number++;
  if (number > 5) number = 1;
  let file = `<img class="slider__img" src="img/img${number}.jpg">`;
  el.innerHTML = file;
  console.log(file);
  setTimeout("changeSlide()", 3000);
}
