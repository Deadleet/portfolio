addEventListener("DOMContentLoaded", function () {
  // Récupère tous les éléments avec la classe "text-appears"
  const textAppears = document.getElementsByClassName('text-appears');

  // Crée une instance de l'Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const target = entry.target;
      if (entry.isIntersecting) {
        // Si la div est visible, ajoute une classe pour appliquer les styles appropriés
        target.classList.add('appear');
      } else {
        // Si la div n'est plus visible, retire la classe pour rétablir les styles d'origine
        target.classList.remove('appear');
      }
    });
  }, { threshold: 0 });

  // Commence à observer chaque élément avec la classe "text-appears"
  for (let i = 0; i < textAppears.length; i++) {
    observer.observe(textAppears[i]);
  }
});
