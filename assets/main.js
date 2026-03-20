// ============================================
// NAVBAR — ocultar/mostrar al hacer scroll
// ============================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// ANIMACIONES al hacer scroll
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// ============================================
// MENÚ MÓVIL
// ============================================
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


/*## 🎨 FASE 4 — FLUJO DE TRABAJO PROFESIONAL

### Orden correcto para desarrollar
Un profesional sigue siempre este orden:
```
1. Estructura HTML primero    → sin estilos, solo el esqueleto
2. Estilos globales           → variables, reset, tipografía
3. Sección por sección        → HTML + CSS juntos
4. JavaScript al final        → interactividad cuando todo está listo
5. Responsive                 → adaptar a móviles
6. Revisión y limpieza        → eliminar código innecesario*/