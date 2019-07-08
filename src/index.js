import { about } from "./about";
import { contact } from "./contact";
import { menu } from "./menu";
import { load } from "./load";


function tabClick(id){
  load();
  displayChoice(id);
}

function displayChoice(id){
  switch (id) {
    case 'about':
      about();
      break;

    case 'menu':
      menu();
      break;

    case 'contact':
      contact();
      break;
  
    default:
      about();
      break;
  }
}


function body(){

  let aboutTab = document.getElementById('about');
  aboutTab.addEventListener('click', () => {
    tabClick('about');
  });

  let contactTab = document.getElementById('contact');
  contactTab.addEventListener('click', () => {
    tabClick('contact');
  });

  let menuTab = document.getElementById('menu');
  menuTab.addEventListener('click', () => {
    tabClick('menu');
  });

  var btns = document.getElementsByClassName("tabs__item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.querySelector(".active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
    });
  }
}


body();
tabClick('about');

