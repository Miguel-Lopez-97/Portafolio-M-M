//
let numberChangeIntroduce = 1;
let number = 1;

function mainCarousel() {
  let imageMainCarousel = document.getElementById("introduce_carousel_image");
  this.changeRouteImage =
    "media/images/Diapositiva" + numberChangeIntroduce + ".PNG";
  imageMainCarousel.src = this.changeRouteImage;
}

let carousel1 = function () {
  numberChangeIntroduce = 1;
  mainCarousel();
};
let carousel2 = function () {
  numberChangeIntroduce = 2;
  mainCarousel();
};
let carousel3 = function () {
  numberChangeIntroduce = 3;
  mainCarousel();
};

function timeLine() {
  let changeImage = document.getElementById("timeLine_graph");
  this.changeRouteImage =
    "media/images/Time_line/Time_line_" +
    number +
    "/Time_line_" +
    number +
    ".PNG";
  changeImage.src = this.changeRouteImage;
  document.getElementById("timeLineDiv").style.display = "flex";
}

function Close(x) {
  document.getElementById(x).style.display = "none";
}
function Open(x) {
  document.getElementById(x).style.display = "flex";
}
function timeLineClose() {
  Close("timeLineDiv");
}

let timeLineDevelopment = function () {
  number = 1;
  timeLine();
  if (screen.width <= 480) {
    document.getElementById("timeLineDiv").style.top = "115vh";
  }
};

let timeLineEngineering = function () {
  number = 2;
  timeLine();
  if (screen.width <= 480) {
    document.getElementById("timeLineDiv").style.top = "270vh";
  }
};
let timeLineSkills = function () {
  number = 0;
  timeLine();
  if (screen.width <= 480) {
    document.getElementById("timeLineDiv").style.top = "192vh";
  }
};
let p_tag = function () {
  Open("p_main_tag");
};
let a_tag_0 = function () {
  Open("a_main_tag_0");
};
let a_tag_1 = function () {
  Open("a_main_tag_1");
};
function p_tag_close() {
  Close("p_main_tag");
}
function a_tag_close_0() {
  Close("a_main_tag_0");
}
function a_tag_close_1() {
  Close("a_main_tag_1");
}
function contact_Close() {
  Close("contact-section");
}
let contact_Open = function () {
  Open("contact-section");
};

function time() {
  let timeNow = new Date();
  this.segNow = Math.floor(timeNow.getSeconds() / 2);
  if (segNow == 29 && numberChangeIntroduce < 3) {
    numberChangeIntroduce++;
    mainCarousel();
  } else if (segNow == 29 && numberChangeIntroduce == 3) {
    numberChangeIntroduce = 1;
    mainCarousel();
  }
}

function professionalMainCarousel() {
  this.dataMatrix = [
    [
      ["Wanda Vision"],
      ["CSS-Landing page Nov-21"],
      [
        "https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH?irclickid=xoOQ8v1X-xyIT3K34FT2OQBMUkGwGI2P-0qRTU0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch%20GmbH-705874",
      ],
      ["media/images/Prof_Carousel/prof_img_main_1.png"],
      [
        "Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures.",
      ],
      ["https://www.justwatch.com/co/serie/bruja-escarlata-y-vision"],
    ],
    [
      ["Portfolio M&M"],
      ["Business page Nov-21"],
      ["https://miguelmorenoportafolio.netlify.app/"],
      ["media/images/Prof_Carousel/prof_img_main_2.png"],
      ["This is a main page about my work as Web Development"],
      ["https://github.com/Miguel-Lopez-97/Portafolio-M-M"],
    ],
    [
      ["Jurassic Park"],
      ["Landing page Nov-21"],
      ["https://sleepy-archimedes-03d4ce.netlify.app/"],
      ["media/images/Prof_Carousel/prof_img_main_0.png"],
      ["This is a tribute page about my favorite saga in all the time"],
      [
        "https://github.com/Miguel-Lopez-97/Landing-page-Jurassic-World-Novedades",
      ],
    ],
    [
      ["Hangman Game"],
      ["Game page with JS Nov-21"],
      ["https://juegoahorcadodiplo99.netlify.app"],
      ["media/images/Prof_Carousel/prof_img_main_3.png"],
      [
        "Hangman games for home This project is a hangman game developed for the home games company",
      ],
      ["https://github.com/Miguel-Lopez-97/Juego-del-Ahorcado"],
    ],
  ];
  this.x = 0;
  this.y = 1;
  this.z = 2;

  this.loadMatrixProfessional = function (x, y, z) {
    document.getElementById("prof_main_name_-1").innerHTML =
      this.dataMatrix[x][0];
    document.getElementById("prof_main_key_-1").innerHTML =
      this.dataMatrix[x][1];
    document.getElementById("prof_main_img_-1").src = this.dataMatrix[x][3];
    document.getElementById("prof_main_text_-1").innerHTML =
      this.dataMatrix[x][4];

    document.getElementById("prof_main_name_0").innerHTML =
      this.dataMatrix[y][0];
    document.getElementById("prof_main_key_0").innerHTML =
      this.dataMatrix[y][1];
    document.getElementById("prof_main_img_link_0").href =
      this.dataMatrix[y][2];
    document.getElementById("prof_main_img_0").src = this.dataMatrix[y][3];
    document.getElementById("prof_main_text_0").innerHTML =
      this.dataMatrix[y][4];
    document.getElementById("prof_main_img_github_0").href =
      this.dataMatrix[y][5];

    document.getElementById("prof_main_name_1").innerHTML =
      this.dataMatrix[z][0];
    document.getElementById("prof_main_key_1").innerHTML =
      this.dataMatrix[z][1];
    document.getElementById("prof_main_img_1").src = this.dataMatrix[z][3];
    document.getElementById("prof_main_text_1").innerHTML =
      this.dataMatrix[z][4];
  };
  this.changeMatrixProfessionalRight = function () {
    if (this.x == 0) {
      this.x = this.dataMatrix.length - 1;
    } else {
      this.x--;
    }
    if (this.y == 0) {
      this.y = this.dataMatrix.length - 1;
    } else {
      this.y--;
    }
    if (this.z == 0) {
      this.z = this.dataMatrix.length - 1;
    } else {
      this.z--;
    }
    this.loadMatrixProfessional(this.x, this.y, this.z);
  };
  this.changeMatrixProfessionalLeft = function () {
    if (this.x == this.dataMatrix.length - 1) {
      this.x = 0;
    } else {
      this.x++;
    }
    if (this.y == this.dataMatrix.length - 1) {
      this.y = 0;
    } else {
      this.y++;
    }
    if (this.z == this.dataMatrix.length - 1) {
      this.z = 0;
    } else {
      this.z++;
    }
    this.loadMatrixProfessional(this.x, this.y, this.z);
  };
}

function academicMainCarousel() {
  this.dataMatrix = [
    [
      ["WandaVision"],
      ["CSS-Landing page Nov-21"],
      [
        "https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH?irclickid=xoOQ8v1X-xyIT3K34FT2OQBMUkGwGI2P-0qRTU0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch%20GmbH-705874",
      ],
      ["media/images/Prof_Carousel/prof_img_main_1.png"],
      [
        "Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures.",
      ],
      ["https://www.justwatch.com/co/serie/bruja-escarlata-y-vision"],
      ["media/ico/Ico_Engineering.png"],
    ],
    [
      ["Portfolio M&M"],
      ["Business page Nov-21"],
      ["https://miguelmorenoportafolio.netlify.app/"],
      ["media/images/Prof_Carousel/prof_img_main_2.png"],
      ["This is a main page about my work as Web Development"],
      ["https://github.com/Miguel-Lopez-97/Portafolio-M-M"],
      ["media/ico/Ico_Engineering.png"],
    ],
    [
      ["Jurassic Park"],
      ["Landing page Nov-21"],
      ["https://sleepy-archimedes-03d4ce.netlify.app/"],
      ["media/images/Prof_Carousel/prof_img_main_0.png"],
      ["This is a tribute page about my favorite saga in all the time"],
      [
        "https://github.com/Miguel-Lopez-97/Landing-page-Jurassic-World-Novedades",
      ],
      ["media/ico/Ico_Web-development.png"],
    ],
    [
      ["Hangman Game"],
      ["Game page with JS Nov-21"],
      ["https://juegoahorcadodiplo99.netlify.app"],
      ["media/images/Prof_Carousel/prof_img_main_3.png"],
      [
        "Hangman games for home This project is a hangman game developed for the home games company",
      ],
      ["https://github.com/Miguel-Lopez-97/Juego-del-Ahorcado"],
      ["media/ico/Ico_Teaching.png"],
    ],
  ];
  this.x = 0;
  this.y = 1;

  this.loadMatrixAcademical = function (x, y) {
    document.getElementById("a_main_img_0").src = this.dataMatrix[x][3];
    document.getElementById("a_main_imgclass_0").src = this.dataMatrix[x][6];
    document.getElementById("a_main_link_deploy_0").href =
      this.dataMatrix[x][2];
    document.getElementById("a_main_link_github_0").href =
      this.dataMatrix[x][5];
    document.getElementById("a_main_name_0").innerHTML = this.dataMatrix[x][0];
    document.getElementById("a_main_key_0").innerHTML = this.dataMatrix[x][1];
    document.getElementById("a_main_text_0").innerHTML = this.dataMatrix[x][4];

    document.getElementById("a_main_img_1").src = this.dataMatrix[y][3];
    document.getElementById("a_main_imgclass_1").src = this.dataMatrix[y][6];
    document.getElementById("a_main_link_deploy_1").href =
      this.dataMatrix[y][2];
    document.getElementById("a_main_link_github_1").href =
      this.dataMatrix[y][5];
    document.getElementById("a_main_name_1").innerHTML = this.dataMatrix[y][0];
    document.getElementById("a_main_key_1").innerHTML = this.dataMatrix[y][1];
    document.getElementById("a_main_text_1").innerHTML = this.dataMatrix[y][4];
  };

  this.changeMatrixAcademicalLeft = function () {
    if (this.x == 0) {
      this.x = this.dataMatrix.length - 1;
    } else {
      this.x--;
    }
    if (this.y == 0) {
      this.y = this.dataMatrix.length - 1;
    } else {
      this.y--;
    }
    this.loadMatrixAcademical(this.x, this.y);
  };
  this.changeMatrixAcademicalRight = function () {
    if (this.x == this.dataMatrix.length - 1) {
      this.x = 0;
    } else {
      this.x++;
    }
    if (this.y == this.dataMatrix.length - 1) {
      this.y = 0;
    } else {
      this.y++;
    }

    this.loadMatrixAcademical(this.x, this.y);
  };

  this.a_img_principal_0 = function () {
    Open("a_image_principal_0");
    document.getElementById("a_principal_imgclass_0").src =
      this.dataMatrix[this.x][3];
    document.getElementById("a_principal_name_0").innerHTML =
      this.dataMatrix[this.x][0];
    document.getElementById("a_principal_link_0").href =
      this.dataMatrix[this.x][2];
  };
  this.a_img_principal_close_0 = function () {
    Close("a_image_principal_0");
  };

  this.a_img_principal_1 = function () {
    Open("a_image_principal_1");
    document.getElementById("a_principal_imgclass_1").src =
      this.dataMatrix[this.y][3];
    document.getElementById("a_principal_name_1").innerHTML =
      this.dataMatrix[this.y][0];
    document.getElementById("a_principal_link_1").href =
      this.dataMatrix[this.y][2];
  };
  this.a_img_principal_close_1 = function () {
    Close("a_image_principal_1");
  };
}

function socialMainCarousel() {
  this.dataMatrix = [
    [
      ["media/images/Social_Carousel/social_img_main_1.png"],
      ["Cristian Montoya"],
      ["Web FullStack Developer"],
      [
        "Miguel es un excelente desarrollador con gran capacidad de aplicación de soluciones reales, sin duda trabajaría con el cada que lo requiera.",
      ],
      ["https://github.com/CristianMontoya98"],
      ["N/A"],
      ["N/A"],
    ],
    [
      ["media/images/Social_Carousel/social_img_main_2.png"],
      ["Lizzete Sevillano"],
      ["Web FullStack Developer - Psychologist "],
      [
        "Miguel es un líder nato, expresa sus opiniones con asertividad y entusiasmo, aporta ideas a nivel logístico y creativo manteniendo un equilibrio entre creatividad, funcionalidad y objetivos de la tarea que tenga a cargo. Si necesitas una persona para liderar tu equipo y que realice un trabajo ordenado y pulcro, !No dudes en contactarlo!",
      ],
      ["https://github.com/LizzieSevC"],
      [
        "https://www.linkedin.com/in/edna-lizette-sevillano-castillo-46570218b/",
      ],
      ["N/A"],
    ],
    [
      ["media/images/Social_Carousel/social_img_main_0.png"],
      ["Miguel Moreno"],
      ["Web FullStack Developer - Petroleum Engineer"],
      [
        "Mike is is an excellent person, he is dedicated, collaborative, empathetic. He is committed to his work, he has great ideas and knows how to plan them well to be able to execute them, he has a well-developed sense of design and logic.",
      ],
      ["https://github.com/Miguel-Lopez-97"],
      ["https://www.linkedin.com/in/miguel-angel-moreno-l%C3%B3pez/"],
      ["https://miguelmorenoportafolio.netlify.app/"],
    ],
  ];

  this.loadMatrixSocial = function (x) {
    document.getElementById("s_main_img").src = this.dataMatrix[x][0];
    document.getElementById("s_main_name").innerHTML = this.dataMatrix[x][1];
    document.getElementById("s_main_key").innerHTML = this.dataMatrix[x][2];
    document.getElementById("s_main_text").innerHTML = this.dataMatrix[x][3];
    if (this.dataMatrix[x][4] == "N/A") {
      Close("s_main_link_github");
    } else {
      document.getElementById("s_main_link_github").href =
        this.dataMatrix[x][4];
      Open("s_main_link_github");
    }
    if (this.dataMatrix[x][5] == "N/A") {
      Close("s_main_link_linkedin");
    } else {
      document.getElementById("s_main_link_linkedin").href =
        this.dataMatrix[x][5];
      Open("s_main_link_linkedin");
    }
    if (this.dataMatrix[x][6] == "N/A") {
      Close("s_main_link_deploy");
    } else {
      document.getElementById("s_main_link_deploy").href =
        this.dataMatrix[x][6];
      Open("s_main_link_deploy");
    }
  };
}
let numberSocial = 0;
function time1() {
  this.timeNow = new Date();
  this.segNow = Math.floor(this.timeNow.getSeconds() / 2);
  if (segNow == 28) {
    if (numberSocial < 2) {
      this.widthValue = 0 + "%";
      document.getElementById("s_main_bar").style.width = this.widthValue;
      document.getElementById("s_carousel_main").style.opacity = 0;
      numberSocial++;
    } else {
      numberSocial = 0;
      socialRecommendation.loadMatrixSocial(numberSocial);
    }
  }
}

function time2() {
  this.timeNow = new Date();
  this.segNow =
    this.timeNow.getSeconds() * 1000 + this.timeNow.getMilliseconds();
  if (segNow < 58000) {
    this.width = 0.0018 * segNow;
    this.widthValue = this.width + "%";
    document.getElementById("s_main_bar").style.width = this.widthValue;
    document.getElementById("s_carousel_main").style.transition =
      "opacity 0.5s";
  } else {
    this.widthValue = 0 + "%";
    socialRecommendation.loadMatrixSocial(numberSocial);
    document.getElementById("s_main_bar").style.width = this.widthValue;
    document.getElementById("s_carousel_main").style.opacity = 1;
  }
}

let professionalRepository;
let academicalRepository;
let socialRecommendation;

function principal() {
  mainCarousel();
  professionalMainCarousel();
  professionalRepository.loadMatrixProfessional(0, 1, 2);
  academicMainCarousel();
  academicalRepository.loadMatrixAcademical(0, 1);
  socialMainCarousel();
  socialRecommendation.loadMatrixSocial(0);
}
function init() {
  professionalRepository = new professionalMainCarousel();
  academicalRepository = new academicMainCarousel();
  socialRecommendation = new socialMainCarousel();
  principal();
  setInterval(function () {
    time();
    time1();
  }, 2000);
  setInterval(function () {
    time2();
  }, 100);
}
