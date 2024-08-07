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

// Gestion des flèches, vérifications

const leftArrow = document.querySelector("#banner .arrow_left");
const rightArrow = document.querySelector("#banner .arrow_right");

leftArrow.addEventListener("click", () => {
  console.log("J'ai cliqué sur la flèche de gauche");
});

rightArrow.addEventListener("click", () => {
  console.log("J'ai cliqué sur la flèche de droite");
});

// Décomposition de mon tableau pour récupérer des objets

const [slide1, slide2, slide3, slide4] = slides;

// Définition des variables pour gérer mes slides

const pathImage = "../assets/images/slideshow/";
const bannerImage = document.querySelector("#banner .banner-img");
const bannerTagLine = document.querySelector("#banner p");

// Définition des variables pour gérer les bullet points

const dotSlide1 = document.querySelector(".dots .dot:nth-child(1)");
const dotSlide2 = document.querySelector(".dots .dot:nth-child(2)");
const dotSlide3 = document.querySelector(".dots .dot:nth-child(3)");
const dotSlide4 = document.querySelector(".dots .dot:nth-child(4)");

// Gestion des clics sur la flèche de droite

rightArrow.addEventListener("click", () => {
  if (bannerTagLine.innerHTML === slide1.tagLine) {
    bannerImage.setAttribute("src", pathImage + slide2.image);
    bannerTagLine.innerHTML = slide2.tagLine;
    dotSlide1.classList.remove("dot_selected");
    dotSlide2.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide2.tagLine) {
    bannerImage.src = pathImage + slide3.image;
    bannerTagLine.innerHTML = slide3.tagLine;
    dotSlide2.classList.remove("dot_selected");
    dotSlide3.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide3.tagLine) {
    bannerImage.src = pathImage + slide4.image;
    bannerTagLine.innerHTML = slide4.tagLine;
    dotSlide3.classList.remove("dot_selected");
    dotSlide4.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide4.tagLine) {
    bannerImage.src = pathImage + slide1.image;
    bannerTagLine.innerHTML = slide1.tagLine;
    dotSlide4.classList.remove("dot_selected");
    dotSlide1.classList.add("dot_selected");
  }
});

// Gestion des clics sur la flèche de gauche

leftArrow.addEventListener("click", () => {
  if (bannerTagLine.innerHTML === slide4.tagLine) {
    bannerImage.setAttribute("src", pathImage + slide3.image);
    bannerTagLine.innerHTML = slide3.tagLine;
    dotSlide4.classList.remove("dot_selected");
    dotSlide3.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide3.tagLine) {
    bannerImage.src = pathImage + slide2.image;
    bannerTagLine.innerHTML = slide2.tagLine;
    dotSlide3.classList.remove("dot_selected");
    dotSlide2.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide2.tagLine) {
    bannerImage.src = pathImage + slide1.image;
    bannerTagLine.innerHTML = slide1.tagLine;
    dotSlide2.classList.remove("dot_selected");
    dotSlide1.classList.add("dot_selected");
  } else if (bannerTagLine.innerHTML === slide1.tagLine) {
    bannerImage.src = pathImage + slide4.image;
    bannerTagLine.innerHTML = slide4.tagLine;
    dotSlide1.classList.remove("dot_selected");
    dotSlide4.classList.add("dot_selected");
  }
});
