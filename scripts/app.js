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
    Open("p_main_tag");
    
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

function professionalMainCarousel(){
    document.getElementById("prof_main_name_-1").innerHTML="WandaVision"
    document.getElementById("prof_main_key_-1").innerHTML="CSS-Landing page Nov-21"
    document.getElementById("prof_main_img_-1").src="media/images/Prof_Carousel/prof_img_main_1.png"
    document.getElementById("prof_main_text_-1").innerHTML="Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures."

    document.getElementById("prof_main_name_1").innerHTML="Portafolio M&M"
    document.getElementById("prof_main_key_1").innerHTML="Business page Nov-21"
    document.getElementById("prof_main_img_1").src="media/images/Prof_Carousel/prof_img_main_2.png"
    document.getElementById("prof_main_text_1").innerHTML="This is a main page about my work as Web Development"

    document.getElementById("prof_main_name_0").innerHTML="Jurassic Park"
    document.getElementById("prof_main_key_0").innerHTML="Landing page Nov-21"
    document.getElementById("prof_main_img_link_0").href="https://sleepy-archimedes-03d4ce.netlify.app/"
    document.getElementById("prof_main_img_0").src="media/images/Prof_Carousel/prof_img_main_0.png"
    document.getElementById("prof_main_text_0").innerHTML="This is a tribute page about my favorite saga in all the time"
    document.getElementById("prof_main_img_github_0").href="https://github.com/Miguel-Lopez-97/Landing-page-Jurassic-World-Novedades"
                                        

}

function principal() {
  mainCarousel();
  professionalMainCarousel()
}
function init() {
  principal();
  setInterval(function () {
    time();
  }, 2000);
}
