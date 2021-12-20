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
  this.changeRuteImage = "media/images/Time_line/Time_line_" + number + "/Time_line_" + number+".PNG";
  changeimagen.src = this.changeRuteImage;
  console.log(changeimagen.src)
  document.getElementById("timeLineDiv").style.display= "flex"
  }

function Close(x){
    document.getElementById(x).style.display= "none";
}
function Open(x){
    document.getElementById(x).style.display= "flex";
}
function timeLineClose(){
    Close("timeLineDiv");
}

let timeLineDevelopment = function () {
    number=1
    timeLine()
  }

let timeLineEngineering = function () {
    number=2
    timeLine()
  }
let timeLineSkills = function () {
    number=0
    timeLine()
  }
let p_tag = function(){
    Open("p_main_tag")
}
let a_tag = function(){
    Open("a_main_tag")
}
function p_tag_close(){
    Close("p_main_tag");
}
function a_tag_close(){
    Close("a_main_tag");
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
