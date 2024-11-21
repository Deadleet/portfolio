function updateContent() {
  // Modifier le contenu du h1
  document.querySelector('.card-text h1').textContent = 'Explorez la Beauté de l\'Islande';

  // Modifier le contenu des spans
  let spans = document.querySelectorAll('.hover-appear');
  spans[0].textContent = 'L\'Islande est un pays fascinant, connu pour ses paysages volcaniques, ses geysers et ses glaciers majestueux.';
  spans[1].textContent = 'Avec une culture unique, l\'Islande combine nature sauvage et traditions nordiques ancestrales.';

  // Modifier le background-image de .card-image
  document.querySelector('.card-image').style.backgroundImage = "url('../assets/irland.jpg')";
}
