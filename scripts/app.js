//
let FPS = 60;
let numberChange = 1;
let number = 1;

function mainCarousel() {
  let imagenMainCarosusel = document.getElementById("introduce_carousel_image");
  this.changeRuteImage = "media/images/Diapositiva" + numberChange + ".PNG";
  imagenMainCarosusel.src = this.changeRuteImage;
  console.log(imagenMainCarosusel.src)
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

function timeLine() {
    let changeimagen = document.getElementById("timeLine_graph");
  this.changeRuteImage = "media/images/Time_line" + number + ".PNG";
  changeimagen.src = this.changeRuteImage;
  console.log(changeimagen.src)
  document.getElementById("timeLineDiv").style.display= "flex"
  }

function timeLineClose(){
    document.getElementById("timeLineDiv").style.display= "none";
}

let timeLineDevelopment = function () {
    number=1
    timeLine()
  }

let timeLineEngineering = function () {
    number=2
    timeLine()
  }
function time() {
  let timeNow = new Date();
  this.segNow = Math.floor(timeNow.getSeconds() / 2);
  console.log(numberChange,segNow);
  if (segNow == 29 && numberChange < 3) {
        numberChange++;
        mainCarousel();}
  else if(segNow == 29 &&numberChange == 3){
    numberChange = 1;
    mainCarousel();
  }
}
function principal() {
  mainCarousel();
}
function init() {
  principal();
  setInterval(function () {
    time();
  }, 2000);
}
