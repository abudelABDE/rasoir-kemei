// Sélectionne le conteneur
const container = document.querySelector('.imjs');

// Liste de tes images
const images = ['IMG1.png', 'IMG2.png', 'IMG3.png', 'IMG4.png'];

// Index actuel
let current = 0;

// Crée l'élément <img> initial
const imgElement = document.createElement('img');
imgElement.src = images[current];
container.appendChild(imgElement);

// Fonction pour changer l'image
function changeImage() {
  current++; // passe à l'image suivante
  if (current >= images.length) {
    current = 0; // retourne à la première image
  }
  imgElement.src = images[current];
}

// Change l'image toutes les 1 seconde
setInterval(changeImage, 2000);
