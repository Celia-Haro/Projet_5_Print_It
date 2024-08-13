const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Définir mes variables const contexte global

const leftArrow = document.querySelector("#banner .arrow_left");
const rightArrow = document.querySelector("#banner .arrow_right");

const pathImage = "./assets/images/slideshow/";
const bannerImage = document.querySelector("#banner .banner-img");
const bannerTagLine = document.querySelector("#banner p");

// Création de la fonction de gestion de l'index

let currentIndex = 0;

function indexControl(direction) {
  currentIndex += direction;
  const length = slides.length - 1;
  if (currentIndex < 0) {
    currentIndex = length;
  } else if (currentIndex > length) {
    currentIndex = 0;
  }
  return currentIndex;
}

// Gestion de l'actualisation de la slide (img.src + p innerHTML)

function updateSlide() {
  bannerImage.setAttribute("src", pathImage + slides[currentIndex].image);
  bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}

// Fonction de l'actualisation des dots en fonction de currentIndex
function updateDot() {
  const allDots = document.querySelectorAll(".dots .dot");

  allDots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  allDots[currentIndex].classList.add("dot_selected");
}

// Gestion des évènements
leftArrow.addEventListener("click", () => {
  currentIndex = indexControl(-1);
  updateSlide();
  updateDot();
  console.log("J'ai cliqué sur la flèche de gauche");
});

rightArrow.addEventListener("click", () => {
  currentIndex = indexControl(1);
  updateSlide();
  updateDot();
  console.log("J'ai cliqué sur la flèche de droite");
});
