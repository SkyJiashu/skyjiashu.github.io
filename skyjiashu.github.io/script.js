(function () {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const navigation = document.getElementById('main-navigation');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const year = document.getElementById('year');
  const narrowScreen = window.matchMedia('(max-width: 540px)');
  const darkPreference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* Preferences are optional. */ }

  function setTheme(theme, persist) {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';
    if (metaTheme) metaTheme.content = isDark ? '#161c19' : '#f6f5f1';
    if (themeButton) {
      themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeButton.setAttribute('aria-pressed', String(isDark));
    }
    if (persist) {
      savedTheme = root.dataset.theme;
      try { localStorage.setItem('portfolio-theme', savedTheme); } catch (_) { /* Storage can be blocked. */ }
    }
  }

  function closeMenu(restoreFocus) {
    if (!menuButton || !navigation) return;
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    navigation.dataset.open = 'false';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus && wasOpen) menuButton.focus();
  }

  setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (darkPreference.matches ? 'dark' : 'light'), false);
  if (year) year.textContent = String(new Date().getFullYear());
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', function () { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true); });
  }
  if (menuButton && navigation) {
    menuButton.hidden = false;
    closeMenu(false);
    root.classList.add('js-ready');
    menuButton.addEventListener('click', function () {
      const opening = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      navigation.dataset.open = String(opening);
      if (opening) {
        const firstLink = navigation.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });
    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(false); });
    });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(true); });
    document.addEventListener('click', function (event) {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu(false);
    });
    narrowScreen.addEventListener('change', function () { closeMenu(false); });
  }
  darkPreference.addEventListener('change', function (event) {
    if (savedTheme !== 'light' && savedTheme !== 'dark') setTheme(event.matches ? 'dark' : 'light', false);
  });
  document.querySelectorAll('.paper-image img').forEach(function (image) {
    function showFallback() {
      const card = image.closest('.paper-card');
      if (card) card.classList.add('image-unavailable');
    }
    image.addEventListener('error', showFallback);
    if (image.complete && !image.naturalWidth) showFallback();
  });
})();
