let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', changeColor);

function changeColor(){
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}


