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
    this.dataMatrix = [
        [["WandaVision"],["CSS-Landing page Nov-21"],["https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH?irclickid=xoOQ8v1X-xyIT3K34FT2OQBMUkGwGI2P-0qRTU0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch%20GmbH-705874"],["media/images/Prof_Carousel/prof_img_main_1.png"],["Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures."],["https://www.justwatch.com/co/serie/bruja-escarlata-y-vision"]],
        [["Portfolio M&M"],["Business page Nov-21"],["https://miguelmorenoportafolio.netlify.app/"],["media/images/Prof_Carousel/prof_img_main_2.png"],["This is a main page about my work as Web Development"],["https://github.com/Miguel-Lopez-97/Portafolio-M-M"]],
        [["Jurassic Park"],["Landing page Nov-21"],["https://sleepy-archimedes-03d4ce.netlify.app/"],["media/images/Prof_Carousel/prof_img_main_0.png"],["This is a tribute page about my favorite saga in all the time"],["https://github.com/Miguel-Lopez-97/Landing-page-Jurassic-World-Novedades"]],
        [["Hangman Game"],["Game page with JS Nov-21"],["https://juegoahorcadodiplo99.netlify.app"],["media/images/Prof_Carousel/prof_img_main_3.png"],["Hangman games for home This project is a hangman game developed for the home games company"],["https://github.com/Miguel-Lopez-97/Juego-del-Ahorcado"]]
    ]
    this.x=0
    this.y=1
    this.z=2

    this.cargeMatrixProfessional = function(x,y,z){
    document.getElementById("prof_main_name_-1").innerHTML=this.dataMatrix[x][0]
    document.getElementById("prof_main_key_-1").innerHTML=this.dataMatrix[x][1]
    document.getElementById("prof_main_img_-1").src=this.dataMatrix[x][3]
    document.getElementById("prof_main_text_-1").innerHTML=this.dataMatrix[x][4]

    document.getElementById("prof_main_name_0").innerHTML=this.dataMatrix[y][0]
    document.getElementById("prof_main_key_0").innerHTML=this.dataMatrix[y][1]
    document.getElementById("prof_main_img_link_0").href=this.dataMatrix[y][2]
    document.getElementById("prof_main_img_0").src=this.dataMatrix[y][3]
    document.getElementById("prof_main_text_0").innerHTML=this.dataMatrix[y][4]
    document.getElementById("prof_main_img_github_0").href=this.dataMatrix[y][5]
    
    document.getElementById("prof_main_name_1").innerHTML=this.dataMatrix[z][0]
    document.getElementById("prof_main_key_1").innerHTML=this.dataMatrix[z][1]
    document.getElementById("prof_main_img_1").src=this.dataMatrix[z][3]
    document.getElementById("prof_main_text_1").innerHTML=this.dataMatrix[z][4]
}
    this.changeMatrixProfessionalRigth = function(){
        if(this.x==0){
            this.x=this.dataMatrix.length-1
        }
        else{this.x--}
        if(this.y==0){
            this.y=this.dataMatrix.length-1
        }
        else{this.y--}
        if(this.z==0){
            this.z=this.dataMatrix.length-1
        }
        else{this.z--}
        this.cargeMatrixProfessional(this.x,this.y,this.z)
    }
    this.changeMatrixProfessionalLeft = function(){
        if(this.x==this.dataMatrix.length-1){
            this.x=0
        }
        else{this.x++
        console.log(this.x,this.y,this.z)}
        if(this.y==this.dataMatrix.length-1){
            this.y=0
        }
        else{this.y++}
        if(this.z==this.dataMatrix.length-1){
            this.z=0
        }
        else{this.z++}
        this.cargeMatrixProfessional(this.x,this.y,this.z)
    }
}

let player;

function principal() {
  mainCarousel();
  professionalMainCarousel();
  player.cargeMatrixProfessional(0,1,2);
}
function init() {
    player = new professionalMainCarousel()
  principal();
  setInterval(function () {
    time();
  }, 2000);
}
