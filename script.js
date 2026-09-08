/* =====================================================
   CURRENT YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =====================================================
   MOUSE PARALLAX
===================================================== */

const background = document.querySelector(".background");
const moonSystem = document.querySelector(".moon-system");
const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


window.addEventListener("mousemove", (event) => {

  mouseX =
    (event.clientX / window.innerWidth - 0.5);

  mouseY =
    (event.clientY / window.innerHeight - 0.5);

});


function animateParallax() {

  currentX +=
    (mouseX - currentX) * 0.035;

  currentY +=
    (mouseY - currentY) * 0.035;


  if (background) {

    background.style.transform =
      `scale(1.01)
             translate(
                ${currentX * -5}px,
                ${currentY * -5}px
             )`;

  }


  if (moonSystem) {

    moonSystem.style.transform =
      `translate(
                ${currentX * 10}px,
                ${currentY * 10}px
             )`;

  }


  if (hero) {

    hero.style.transform =
      `translate(
                ${currentX * -3}px,
                ${currentY * -3}px
             )`;

  }


  requestAnimationFrame(animateParallax);

}

animateParallax();


/* =====================================================
   SOCIAL LINK HOVER
===================================================== */

const links =
  document.querySelectorAll(".socials a");

links.forEach((link) => {

  link.addEventListener("mouseenter", () => {

    link.style.transform =
      "translateY(-2px)";

  });


  link.addEventListener("mouseleave", () => {

    link.style.transform =
      "translateY(0)";

  });

});


/* =====================================================
   KEYBOARD SHORTCUT
===================================================== */

document.addEventListener("keydown", (event) => {

  if (event.key.toLowerCase() === "g") {

    const github =
      document.querySelector(
        '.socials a[href*="github"]'
      );

    if (github) {
      github.click();
    }

  }

});