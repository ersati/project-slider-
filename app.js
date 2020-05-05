const el = document.querySelector(".slider");
let number = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;

function slide(nrSlide) {
  clearTimeout(timer1);

  number = nrSlide - 1;

  setTimeout("changeSlide()", 1000);
}

function changeSlide() {
  number++;
  if (number > 5) number = 1;
  let file = `<img src=img/img${number}.jpg/>`;
  el.innerHTML = file;
  console.log(file);
  timer1 = setTimeout("changeSlide()", 1000);
}
