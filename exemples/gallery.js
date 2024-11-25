const background = document.getElementById('background');
const images = Array.from(document.getElementsByClassName('image'));
var i = 0; // Déclare une variable pour suivre l'index actif

//btn for click stop


// Ajout des gestionnaires d'événements pour les images
images.forEach((image, index) => {
  image.dataset.myValue = index; // Ajoute un index aux données de chaque image
  image.addEventListener('click', () => {
    background.style.backgroundImage = `url(${image.src})`; // Change le fond
    i = index; // Met à jour l'index actif
    console.log(`Image sélectionnée, index : ${i}`);
  });
});

// Navigation gauche-droite
const left = document.getElementById('left');
const right = document.getElementById('right');

const clickImages = document.getElementsByClassName('click-image');

Array.from(clickImages).forEach((clickImage) => {
  clickImage.addEventListener('click', () => {
    disableHoverTemporarily(clickImage, 500)
  })
})

// Gestion du clic sur le bouton "left"
left.addEventListener('click', () => {
  i = (i - 1 + images.length) % images.length; // Décrémente et boucle
  console.log(`Image précédente, index : ${i}`);
  background.style.backgroundImage = `url(${images[i].src})`; // Met à jour le fond
});

// Gestion du clic sur le bouton "right"
right.addEventListener('click', () => {
  i = (i + 1) % images.length; // Incrémente et boucle
  console.log(`Image suivante, index : ${i}`);
  background.style.backgroundImage = `url(${images[i].src})`; // Met à jour le fond
});

function disableHoverTemporarily(element, duration) {
  if (!element) {
      console.error('Aucun élément valide fourni.');
      return;
  }

  // Ajouter une classe qui désactive le hover
  element.classList.add('no-hover');

  // Après la durée spécifiée, retirer la classe
  setTimeout(() => {
      element.classList.remove('no-hover');
  }, duration);
}
