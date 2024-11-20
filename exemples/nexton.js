// Logo 1 - turn
function turnTheCircle() {
  // Sélectionner l'élément ayant l'ID 'circle1'
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');
  const hovercircle = document.getElementById('hovercircle');

  // Désactiver le hover temporairement
  disableHoverTemporarily(hovercircle, 3000)
  // Vérifier si l'élément existe
  if (!circle1) {
      console.error("Aucun élément avec l'ID 'circle1' n'a été trouvé.");
      return; // Arrête la fonction si l'élément n'existe pas
  }
  // P1 - exentrer les cercles
  console.log('P1 - exentrer les cercles');
  circle1.style.transition = 'transform 0.5s ease-in-out';
  circle1.style.transform = 'rotate(-45deg) translateX(85px) rotate(-45deg)';
  circle2.style.transition = 'transform 0.5s ease-in-out';
  circle2.style.transform = 'rotate(135deg) translateX(85px) rotate(45deg)';

  // P2 - tourner les cercles
  setTimeout(() => {
    console.log('P2 - tourner les cercles');
    circle1.style.transition = 'transform 2s ease-in-out';
    circle2.style.transition = 'transform 2s ease-in-out';
    circle1.style.transform = 'rotate(315deg) translateX(85px) rotate(-45deg)';
    circle2.style.transform = 'rotate(495deg) translateX(85px) rotate(45deg)';
  }, 500);
  // P3 - concentrer les cercles
  setTimeout(() => {
    console.log('P3 - concentrer les cercles');
    circle1.style.transition = 'transform 0.5s ease-in-out';
    circle2.style.transition = 'transform 0.5s ease-in-out';
    circle1.style.transform = 'rotate(315deg) translateX(65px) rotate(-45deg)';
    circle2.style.transform = 'rotate(495deg) translateX(65px) rotate(45deg)';
  }, 2500);
  // P4 - Reset
  setTimeout(() => {
    console.log('P4 - Reset');
    circle1.style.transition = 'transform 0s ease-in-out';
    circle2.style.transition = 'transform 0s ease-in-out';
    circle1.style.transform = 'rotate(-45deg) translateX(65px) rotate(-45deg)';
    circle2.style.transform = 'rotate(135deg) translateX(65px) rotate(45deg)';
  }, 3000);
}
// Logo 2 - concentrate
function concentrateCircle(typeEvent) {
  console.log('TypeEvent:', typeEvent);

  // Déclarer la variable transformations avant les conditions
  let transformations = [];

  if (typeEvent === 1) {
    // Liste des cercles avec leurs transformations pour typeEvent === 1
    transformations = [
      { id: 'circle3', transform: 'rotate(-45deg) translateX(49px) rotate(45deg)' },
      { id: 'circle4', transform: 'rotate(45deg) translateX(47px) rotate(45deg)' },
      { id: 'circle5', transform: 'rotate(-135deg) translateX(49px) rotate(45deg)' },
      { id: 'circle6', transform: 'rotate(135deg) translateX(49px) rotate(45deg)' },
      { id: 'circle7', transform: 'rotate(-80deg) translateX(30px) rotate(45deg)' },
      { id: 'circle8', transform: 'rotate(7deg) translateX(41px) rotate(45deg)' },
      { id: 'circle9', transform: 'rotate(-189deg) translateX(28px) rotate(45deg)' },
      { id: 'circle10', transform: 'rotate(83deg) translateX(42px) rotate(45deg)' }
    ];
  } else if (typeEvent === 2) {
    // Liste des cercles avec leurs transformations pour typeEvent === 2
    transformations = [
      { id: 'circle3', transform: 'rotate(-45deg) translateX(65px) rotate(45deg)' },
      { id: 'circle4', transform: 'rotate(45deg) translateX(65px) rotate(45deg)' },
      { id: 'circle5', transform: 'rotate(-135deg) translateX(65px) rotate(45deg)' },
      { id: 'circle6', transform: 'rotate(135deg) translateX(65px) rotate(45deg)' },
      { id: 'circle7', transform: 'rotate(-80deg) translateX(40px) rotate(45deg)' },
      { id: 'circle8', transform: 'rotate(7deg) translateX(52px) rotate(45deg)' },
      { id: 'circle9', transform: 'rotate(-189deg) translateX(41px) rotate(45deg)' },
      { id: 'circle10', transform: 'rotate(83deg) translateX(52px) rotate(45deg)' }
    ];
  }

  // Appliquer les transformations
  transformations.forEach(({ id, transform }) => {
    const circle = document.getElementById(id);
    if (circle) {
      circle.style.transform = transform;
    }
  });
}
// Fonction pour désactiver le hover temporairement
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
