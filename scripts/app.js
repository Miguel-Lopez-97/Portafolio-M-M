//
let numberChangeIntroduce = 1;
let number = 1;
let menuFlag = false;

function menuFlex() {
  if (window.screen.width < 769) {
    let menuObject = document.getElementById("headerDoc");
    let navObject = document.getElementById("navDoc");
    let menuTitle = document.getElementById("menu");
    let logoMenu = document.getElementById("logoMenu");
    let contactButton = document.getElementById("contact");
    if (menuFlag === false) {
      menuObject.style.zIndex = "4";
      menuObject.style.height = "100vh";
      navObject.style.display = "flex";
      logoMenu.style.width = "20%";
      navObject.style.height = "90%";
      menuTitle.style.display = "none";
      contactButton.style.display = "none";
      body.style.overflowY = "hidden";
      menuFlag = true;
    } else {
      menuObject.style.zIndex = "2";
      logoMenu.style.width = "50%";
      menuObject.style.height = "auto";
      navObject.style.display = "none";
      menuTitle.style.display = "flex";
      navObject.style.height = "0";
      body.style.overflowY = "scroll";
      menuFlag = false;
      contactButton.style.display = "flex";
    }
  } else {
    null;
  }
}

function mainCarousel() {
  let imageMainCarousel = document.getElementById("introduce_carousel_image");
  if (window.screen.width >= 1024) {
    this.changeRouteImage =
      "media/images/AboutMe_Carousel/Diapositiva" +
      numberChangeIntroduce +
      ".PNG";
    imageMainCarousel.src = this.changeRouteImage;
  }
  if (768 < window.screen.width < 1024) {
    this.changeRouteImage =
      "media/images/AboutMe_Carousel/Diapositiva_T_" +
      numberChangeIntroduce +
      ".PNG";
    imageMainCarousel.src = this.changeRouteImage;
  }
  if (window.screen.width <= 768) {
    this.changeRouteImage =
      "media/images/AboutMe_Carousel/Diapositiva_M_" +
      numberChangeIntroduce +
      ".PNG";
    imageMainCarousel.src = this.changeRouteImage;
  }
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
  body.style.overflowY = "scroll";
}
function Open(x) {
  document.getElementById(x).style.display = "flex";
}
function timeLineClose() {
  Close("timeLineDiv");
}

let timeLineDevelopment = function () {
  number = 1;
  var y = window.scrollY;
  timeLine();
  body.style.overflowY = "hidden";
};

let timeLineEngineering = function () {
  number = 2;
  var y = window.scrollY;
  timeLine();
  body.style.overflowY = "hidden";
};
let timeLineSkills = function () {
  number = 0;
  timeLine();
  body.style.overflowY = "hidden";
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
  body.style.overflowY = "hidden";
};

function time() {
  let imageMainCarousel = document.getElementById("introduce_carousel_image");
  setTimeout(function () {
    imageMainCarousel.style.opacity = 0.1;
    if (numberChangeIntroduce < 3) {
      numberChangeIntroduce++;
      mainCarousel();
    } else {
      numberChangeIntroduce = 1;
      mainCarousel();
    }
  }, 29000);
  setTimeout(function () {
    imageMainCarousel.style.opacity = 1;
  }, 29500);
}

function professionalMainCarousel() {
  this.dataMatrix = [
    [
      ["Flores del Tambo ToDoList"],
      ["CRUD page Nov-21"],
      ["https://todolistfloresdeltambo.herokuapp.com/"],
      ["media/images/Prof_Carousel/P_ToDoList.png"],
      [
        "Este proyecto fue desarrollado como Full Stack en MERN, consiste en un CRUD para listar tareas las cuales almacena el Backend enlazado con MongoAtlas, Para ir al despliegue de clic en la imagen superior",
      ],
      ["https://github.com/Miguel-Lopez-97/TodoListFloresDelTambo"],
      ["3%", "17%", "80%"],
    ],
    [
      ["Portfolio M&M"],
      ["Business page Nov-21"],
      ["https://miguelmorenoportafolio.netlify.app/"],
      ["media/images/Prof_Carousel/P_Portafolio.png"],
      [
        "Esta es mi p??gina principal sobre mi trabajo como Desarrollo Web, desarrollada en JavaScript puro as?? como en HTML y CSS, Para ir al despliegue de clic en la imagen superior",
      ],
      ["https://github.com/Miguel-Lopez-97/Portafolio-M-M"],
      ["35%", "44%", "21%"],
    ],
    [
      ["Pok??dex"],
      ["React App Nov-21"],
      ["https://miguel-lopez-pokedex-api.netlify.app/"],
      ["media/images/Prof_Carousel/P_Pokedex.png"],
      [
        "Esta Aplicaci??n de ReactJS, permite Utilizar conceptos avanzados de renderizaci??n, consumo din??mico de APIs as?? como navegaci??n interna, este proyecto sigue en mejoramiento continuo con la finalidad de a??adir m??s funcionalidades, Para ir al despliegue de clic en la imagen superior",
      ],
      ["https://github.com/Miguel-Lopez-97/Pokedex"],
      ["3%", "21%", "76%"],
    ],
    [
      ["Kyrio's Pizza"],
      ["Market Place ReactJS Nov-21"],
      ["https://miguel-lopez-market-place.netlify.app/"],
      ["media/images/Prof_Carousel/P_Market_Place_pizza.png"],
      [
        "Este MarketPlace Realizado con ReactJS para un negocio de comidas r??pidas real, le permite a los clientes interactuar con el men?? disponible, a??adir sus compras al carrito y enviar su pedido directamente al restaurante, Para ir al despliegue de clic en la imagen superior",
      ],
      ["https://github.com/Miguel-Lopez-97/kyrios-pizza"],
      ["1%", "40%", "59%"],
    ],
  ];
  this.x = 0;
  this.y = 1;
  this.z = 2;

  this.loadMatrixProfessional = function (x, y, z) {
    document.getElementById("prof_carousel_aux_1").style.opacity = 0.1;
    document.getElementById("prof_carousel_main_0").style.opacity = 0.2;
    document.getElementById("prof_carousel_aux_2").style.opacity = 0.1;

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
    document.getElementById("p_tag_html_0").style.width =
      this.dataMatrix[y][6][0];
    document.getElementById("p_tag_css_0").style.width =
      this.dataMatrix[y][6][1];
    document.getElementById("p_tag_js_0").style.width =
      this.dataMatrix[y][6][2];
    document.getElementById("p_tag_html").innerHTML = this.dataMatrix[y][6][0];
    document.getElementById("p_tag_css").innerHTML = this.dataMatrix[y][6][1];
    document.getElementById("p_tag_js").innerHTML = this.dataMatrix[y][6][2];

    document.getElementById("prof_main_name_1").innerHTML =
      this.dataMatrix[z][0];
    document.getElementById("prof_main_key_1").innerHTML =
      this.dataMatrix[z][1];
    document.getElementById("prof_main_img_1").src = this.dataMatrix[z][3];
    document.getElementById("prof_main_text_1").innerHTML =
      this.dataMatrix[z][4];
    setTimeout(function () {
      document.getElementById("prof_carousel_aux_1").style.opacity = 1;
      document.getElementById("prof_carousel_main_0").style.opacity = 1;
      document.getElementById("prof_carousel_aux_2").style.opacity = 1;
    }, 500);
  };
  this.changeMatrixProfessionalRight = function () {
    if (this.x === 0) {
      this.x = this.dataMatrix.length - 1;
    } else {
      this.x--;
    }
    if (this.y === 0) {
      this.y = this.dataMatrix.length - 1;
    } else {
      this.y--;
    }
    if (this.z === 0) {
      this.z = this.dataMatrix.length - 1;
    } else {
      this.z--;
    }
    this.loadMatrixProfessional(this.x, this.y, this.z);
  };
  this.changeMatrixProfessionalLeft = function () {
    if (this.x === this.dataMatrix.length - 1) {
      this.x = 0;
    } else {
      this.x++;
    }
    if (this.y === this.dataMatrix.length - 1) {
      this.y = 0;
    } else {
      this.y++;
    }
    if (this.z === this.dataMatrix.length - 1) {
      this.z = 0;
    } else {
      this.z++;
    }
    this.loadMatrixProfessional(this.x, this.y, this.z);
  };
  this.changeMatrixProfessional = function (a, b, c) {
    this.loadMatrixProfessional(a, b, c);
  };
}

function academicMainCarousel() {
  this.dataMatrix = [
    [
      ["Calabozos"],
      ["JV-Canvas Game Nov-21"],
      ["https://miguel-lopez-97.github.io/Juego_Calabozos/"],
      ["media/images/Academic_Carousel/P_Canvas_Game.png"],
      [
        "En este proyecto desarrolle la l??gica con JS para simular un juego de mazmorras hecho en Canvas, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/Juego_Calabozos"],
      ["media/ico/Ico_Web-development.png"],
      ["13%", "0%", "87%"],
    ],
    [
      ["Hackathon-Benatural"],
      ["Market Place Feb-22"],
      [null],
      ["media/images/Academic_Carousel/P_BeNatural.png"],
      [
        "Elaborado con React en el frontend y en el backend Java y SQL, trabaj?? como l??der de Frontend en este proyecto colaborativo con Espa??a en la Hackathon F5 2022, la producci??n en Heroku est?? pendiente, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/hackathon-benatural"],
      ["media/ico/Ico_Web-development.png"],
      ["2%", "40%", "45%"],
    ],
    [
      ["Jurassic Park"],
      ["Landing page Nov-21"],
      ["https://miguel-lopez-jurassic-world-landingpage.netlify.app/"],
      ["media/images/Academic_Carousel/P_Jurassic_Park.png"],
      [
        "Esta es mi primera p??gina web de mi saga favorita, uso de CSS y HTML, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      [
        "https://github.com/Miguel-Lopez-97/Landing-page-Jurassic-World-Novedades",
      ],
      ["media/ico/Ico_Web-development.png"],
      ["51%", "49%", "0%"],
    ],
    [
      ["Hangman Game"],
      ["Game page with JS Nov-21"],
      ["https://juegoahorcadodiplo99.netlify.app"],
      ["media/images/Academic_Carousel/P_Ahorcado.png"],
      [
        "Este Juego del Ahorcado realizado con JavaScript, permite aplicar conocimientos b??sicos de m??todos y funciones, as?? como manejar una p??gina web din??mica, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/Juego-del-Ahorcado"],
      ["media/ico/Ico_Web-development.png"],
      ["21%", "31%", "48%"],
    ],
    [
      ["Rick and Morty"],
      ["React Project Api JS Ene-22"],
      ["https://miguel-lopez-api-ricky-and-morty.netlify.app/"],
      ["media/images/Academic_Carousel/P_Rick_Morty_API.png"],
      [
        "Esta es mi primer aplicativo con el uso de ReactJS, en el cual hay renderizado de componentes de manera din??mica a partir del consumo de una API externa, as?? como navegaci??n interna y otras funcionalidades, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/rick-and-morty"],
      ["media/ico/Ico_Web-development.png"],
      ["2%", "22%", "76%"],
    ],
    [
      ["Tetris Game"],
      ["Game page with JS Nov-21"],
      ["https://miguel-lopez-valentina-rippe-tetris-game.netlify.app/"],
      ["media/images/Academic_Carousel/P_Tetris.png"],
      [
        "Este Juego del Tetris realizado con JavaScript, permite aplicar conocimientos b??sicos de m??todos y funciones, as?? como manejar una p??gina web din??mica, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/Juego-de-Tetris"],
      ["media/ico/Ico_Web-development.png"],
      ["11%", "14%", "75%"],
    ],
    [
      ["To Do List App"],
      ["React App Ene-22"],
      ["https://miguel-lopez-todo-list.netlify.app/"],
      ["media/images/Academic_Carousel/P_ToDoList.png"],
      [
        "Este aplicativo desarrollado con ReactJS, cumple con los requerimientos de un CRUD aplicados en una lista de tareas diarias as?? como el manejo global de estados (Redux) y comunicaci??n entre componentes, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/toDo-list"],
      ["media/ico/Ico_Web-development.png"],
      ["5%", "31%", "64%"],
    ],
    [
      ["App Weather"],
      ["React App Ene-22"],
      ["https://miguel-lopez-weather-app.netlify.app/"],
      ["media/images/Academic_Carousel/P_App_Weather.png"],
      [
        "Este aplicativo desarrollado con ReactJS, cumple con los requerimientos del consumo de API, as?? como el manejo global de estados y comunicaci??n entre componentes, Para ir al despliegue de clic en la imagen superior o en el icono de cohete.",
      ],
      ["https://github.com/Miguel-Lopez-97/Api-Clima"],
      ["media/ico/Ico_Web-development.png"],
      ["13%", "38%", "49%"],
    ],
  ];
  this.x = 6;
  this.y = 7;

  this.loadMatrixAcademical = function (x, y) {
    document.getElementById("a_carousel_main_0").style.opacity = 0.1;
    document.getElementById("a_carousel_main_1").style.opacity = 0.1;

    document.getElementById("a_main_img_0").src = this.dataMatrix[x][3];
    document.getElementById("a_main_imgclass_0").src = this.dataMatrix[x][6];
    document.getElementById("a_main_link_deploy_0").href =
      this.dataMatrix[x][2];
    document.getElementById("a_main_link_github_0").href =
      this.dataMatrix[x][5];
    document.getElementById("a_main_name_0").innerHTML = this.dataMatrix[x][0];
    document.getElementById("a_main_key_0").innerHTML = this.dataMatrix[x][1];
    document.getElementById("a_main_text_0").innerHTML = this.dataMatrix[x][4];

    document.getElementById("a_tag_html_0").style.width =
      this.dataMatrix[x][7][0];
    document.getElementById("a_tag_css_0").style.width =
      this.dataMatrix[x][7][1];
    document.getElementById("a_tag_js_0").style.width =
      this.dataMatrix[x][7][2];
    document.getElementById("p_a_tag_html_0").innerHTML =
      this.dataMatrix[x][7][0];
    document.getElementById("p_a_tag_css_0").innerHTML =
      this.dataMatrix[x][7][1];
    document.getElementById("p_a_tag_js_0").innerHTML =
      this.dataMatrix[x][7][2];

    document.getElementById("a_main_img_1").src = this.dataMatrix[y][3];
    document.getElementById("a_main_imgclass_1").src = this.dataMatrix[y][6];
    document.getElementById("a_main_link_deploy_1").href =
      this.dataMatrix[y][2];
    document.getElementById("a_main_link_github_1").href =
      this.dataMatrix[y][5];
    document.getElementById("a_main_name_1").innerHTML = this.dataMatrix[y][0];
    document.getElementById("a_main_key_1").innerHTML = this.dataMatrix[y][1];
    document.getElementById("a_main_text_1").innerHTML = this.dataMatrix[y][4];

    document.getElementById("a_tag_html_1").style.width =
      this.dataMatrix[y][7][0];
    document.getElementById("a_tag_css_1").style.width =
      this.dataMatrix[y][7][1];
    document.getElementById("a_tag_js_1").style.width =
      this.dataMatrix[y][7][2];
    document.getElementById("p_a_tag_html_1").innerHTML =
      this.dataMatrix[y][7][0];
    document.getElementById("p_a_tag_css_1").innerHTML =
      this.dataMatrix[y][7][1];
    document.getElementById("p_a_tag_js_1").innerHTML =
      this.dataMatrix[y][7][2];

    setTimeout(function () {
      document.getElementById("a_carousel_main_0").style.opacity = 1;
      document.getElementById("a_carousel_main_1").style.opacity = 1;
    }, 500);
  };

  this.changeMatrixAcademicalLeft = function () {
    if (window.screen.width > 769) {
      if (this.x === 0) {
        this.x = this.dataMatrix.length - 1;
      } else {
        this.x--;
      }
      if (this.y === 0) {
        this.y = this.dataMatrix.length - 1;
      } else {
        this.y--;
      }
      this.loadMatrixAcademical(this.x, this.y);
    } else {
      if (this.x === 0) {
        this.x = this.dataMatrix.length - 1;
      } else {
        this.x--;
      }
      this.loadMatrixAcademical(this.x, this.x);
    }
  };
  this.changeMatrixAcademicalRight = function () {
    if (window.screen.width > 769) {
      if (this.x === this.dataMatrix.length - 1) {
        this.x = 0;
      } else {
        this.x++;
      }
      if (this.y === this.dataMatrix.length - 1) {
        this.y = 0;
      } else {
        this.y++;
      }

      this.loadMatrixAcademical(this.x, this.y);
    } else {
      if (this.x === this.dataMatrix.length - 1) {
        this.x = 0;
      } else {
        this.x++;
      }
      this.loadMatrixAcademical(this.x, this.x);
    }
  };
  this.changeMatrixAcademical = function (a, b) {
    this.loadMatrixAcademical(a, b);
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
        "Miguel es un excelente desarrollador con gran capacidad de aplicaci??n de soluciones reales, sin duda trabajar??a con el cada que lo requiera.",
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
        "Miguel es un l??der nato, expresa sus opiniones con asertividad y entusiasmo, aporta ideas a nivel log??stico y creativo manteniendo un equilibrio entre creatividad, funcionalidad y objetivos de la tarea que tenga a cargo. Si necesitas una persona para liderar tu equipo y que realice un trabajo ordenado y pulcro, !No dudes en contactarlo!",
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
    if (this.dataMatrix[x][4] === "N/A") {
      Close("s_main_link_github");
    } else {
      document.getElementById("s_main_link_github").href =
        this.dataMatrix[x][4];
      Open("s_main_link_github");
    }
    if (this.dataMatrix[x][5] === "N/A") {
      Close("s_main_link_linkedin");
    } else {
      document.getElementById("s_main_link_linkedin").href =
        this.dataMatrix[x][5];
      Open("s_main_link_linkedin");
    }
    if (this.dataMatrix[x][6] === "N/A") {
      Close("s_main_link_deploy");
    } else {
      document.getElementById("s_main_link_deploy").href =
        this.dataMatrix[x][6];
      Open("s_main_link_deploy");
    }
  };
}
let numberSocial = 0;
let segNow=0;
function time1() {
  
  setTimeout(function () {
      console.log(numberSocial, "init");
      this.widthValue = 0 + "%";
      document.getElementById("s_main_bar").style.width = this.widthValue;
      document.getElementById("s_carousel_main").style.opacity = 0;
  }, 10);

  setTimeout(function () {
    document.getElementById("s_carousel_main").style.opacity = 1;
    document.getElementById("s_main_bar").style.opacity = 1;
  }, 1000);

  /* setTimeout(function () {
    setInterval(function () {
      if (segNow < 2750) {
        this.width = 0.036 * segNow;
        this.widthValue = this.width + "%";
        document.getElementById("s_main_bar").style.width = this.widthValue;
        console.log(segNow, "--",this.widthValue);
        segNow++;
        }
        else{
          document.getElementById("s_main_bar").style.opacity=0;
          document.getElementById("s_main_bar").style.width = "0%";
          segNow=0;
        };
      }, 10)
  }, 1500); */

  setTimeout(function () {
    document.getElementById("s_carousel_main").style.opacity = 0;
    document.getElementById("s_main_bar").style.opacity = 0;
    numberSocial++;
    console.log(numberSocial, "neww");
  }, 28500);

  setTimeout(function () {
    if (numberSocial < socialRecommendation.dataMatrix.length) {
      socialRecommendation.loadMatrixSocial(numberSocial);
    }
    if (numberSocial === socialRecommendation.dataMatrix.length) {
      numberSocial = 0;
      socialRecommendation.loadMatrixSocial(numberSocial);
      console.log(numberSocial, "reset");
    }
    }, 29500);
}

let professionalRepository;
let academicalRepository;
let socialRecommendation;
function principal() {
  mainCarousel();
  professionalMainCarousel();
  professionalRepository.loadMatrixProfessional(0, 1, 2);
  academicMainCarousel();
  academicalRepository.loadMatrixAcademical(6, 7);
  socialMainCarousel();
  socialRecommendation.loadMatrixSocial(0);
  document.getElementById("number_professional_projects").innerHTML =
    professionalRepository.dataMatrix.length;
  document.getElementById("number_academic_projects").innerHTML =
    academicalRepository.dataMatrix.length;
}
function init() {
  professionalRepository = new professionalMainCarousel();
  academicalRepository = new academicMainCarousel();
  socialRecommendation = new socialMainCarousel();
  principal();
  time1();
  setInterval(function () {
    time();
  }, 30000);
  setInterval(function () {
    time1();
  }, 30000);
}
