(function () {
  'use strict';
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const year = document.getElementById('year');
  const menuButton = document.getElementById('menu-toggle');
  const navigation = document.getElementById('main-navigation');
  if (year) year.textContent = new Date().getFullYear();

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* Storage may be unavailable. */ }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (prefersDark ? 'dark' : 'light');
  root.dataset.theme = initialTheme;

  function updateAccessibleLabel() {
    if (button) button.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  updateAccessibleLabel();
  if (button) button.addEventListener('click', function () {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) { /* Optional preference storage. */ }
    updateAccessibleLabel();
  });
  if (menuButton && navigation) {
    function closeMenu() {
      navigation.dataset.open = 'false';
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
    }
    menuButton.addEventListener('click', function () {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      navigation.dataset.open = isOpen ? 'false' : 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    });
    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  }
})();
