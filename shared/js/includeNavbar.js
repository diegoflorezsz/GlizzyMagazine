document.addEventListener('DOMContentLoaded', () => {
  fetch('../../shared/components/navbar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
    })
    .catch(error => console.error('Error al cargar el navbar:', error));
});