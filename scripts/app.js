//
let FPS = 60;
let numberChange = 1;

function mainCarousel() {
  let imagenMainCarosusel = document.getElementById("introduce_carousel_image");
  this.changeRuteImage = "media/images/Diapositiva" + numberChange + ".PNG";
  imagenMainCarosusel.src = this.changeRuteImage;
}

let carousel1 = function () {
  numberChange = 1;
  mainCarousel();
};
let carousel2 = function () {
  numberChange = 2;
  mainCarousel();
};
let carousel3 = function () {
  numberChange = 3;
  mainCarousel();
};

function time() {
  let timeNow = new Date();
  this.segNow = Math.floor(timeNow.getSeconds() / 2);
  console.log(numberChange,segNow);
  if (segNow == 29 && numberChange < 4) {
    for(i=0;i<1;i++){
        numberChange++;
        mainCarousel();}
    
    console.log(numberChange);
  }
  else if(numberChange > 3){
    numberChange = 1;
    mainCarousel();
  }
}
function principal() {
  mainCarousel();
  numberChange=1;
}
function init() {
  principal();
  setInterval(function () {
    time();
  }, 2000);
}
