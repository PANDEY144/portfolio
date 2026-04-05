(function () {
  'use strict';

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -2.5rem 0px' }
  );
  reveals.forEach((el) => observer.observe(el));

  document.querySelectorAll('.strength-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  const nav = document.querySelector('.site-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('primary-navigation');

  function setMenuOpen(open) {
    if (!navToggle || !nav) return;
    navToggle.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (navToggle && nav && navLinks) {
    navToggle.addEventListener('click', () => {
      const next = !nav.classList.contains('menu-open');
      setMenuOpen(next);
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 56.26em)').matches) {
        closeMenu();
      }
    });
  }
})();
