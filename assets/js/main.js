(function() {
  var sections = document.querySelectorAll('.tab-section');
  var links    = document.querySelectorAll('[data-tab]');

  // Función para mostrar la pestaña seleccionada
  function showTab(tabId) {
    sections.forEach(function(s) {
      s.classList.toggle('tab-section--active', s.id === 'tab-' + tabId);
    });
    links.forEach(function(l) {
      l.classList.toggle('nav-link--active', l.dataset.tab === tabId);
    });
    // Al cambiar de pestaña, vuelve al inicio de la página suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Evento click para los enlaces de navegación
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showTab(link.dataset.tab);
      // Cerrar el menú móvil después de hacer clic
      document.querySelector('.navbar__links').classList.remove('navbar__links--open');
    });
  });

  // Control del menú hamburguesa en móviles
  var hamburger = document.querySelector('.navbar__hamburger');
  var navMenu   = document.querySelector('.navbar__links');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('navbar__links--open');
    });
  }

  // Mostrar la pestaña de "Inicio" (home) por defecto al cargar la página
  showTab('home');
})();