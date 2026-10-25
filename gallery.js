/* Progressive enhancement: links still open the real figure when scripts are disabled. */
(function initialiseFigureViewer() {
  'use strict';
  const links = Array.from(document.querySelectorAll('a[data-figure]'));
  links.forEach(function registerPreviewFallback(anchor) {
    const preview = anchor.querySelector('img');
    if (!preview) return;
    function showPreviewFallback() {
      preview.hidden = true;
      anchor.classList.add('preview-unavailable');
      if (!anchor.querySelector('.preview-error')) {
        const message = document.createElement('span');
        message.className = 'preview-error';
        message.textContent = 'Preview unavailable — open the original figure.';
        anchor.appendChild(message);
      }
    }
    preview.addEventListener('error', showPreviewFallback);
    if (preview.complete && !preview.naturalWidth) showPreviewFallback();
  });
  if (!links.length || typeof HTMLDialogElement === 'undefined' || typeof HTMLDialogElement.prototype.showModal !== 'function') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'figure-dialog';
  dialog.setAttribute('aria-labelledby', 'figure-viewer-title');
  dialog.setAttribute('aria-describedby', 'figure-viewer-caption');
  dialog.innerHTML = '<div class="viewer-toolbar"><span class="viewer-title" id="figure-viewer-title">Research figure</span><div class="viewer-actions"><a class="viewer-original" target="_blank" rel="noopener noreferrer">Open full-size image ↗</a><button class="viewer-close" type="button" autofocus>Close ×</button></div></div><div class="viewer-stage"><img alt=""><p class="viewer-error" role="alert" hidden>Image could not be loaded. Use the full-size image link above.</p></div><p class="viewer-caption" id="figure-viewer-caption"></p>';
  document.body.appendChild(dialog);
  const image = dialog.querySelector('img');
  image.referrerPolicy = 'no-referrer';
  const caption = dialog.querySelector('.viewer-caption');
  const original = dialog.querySelector('.viewer-original');
  const closeButton = dialog.querySelector('.viewer-close');
  const error = dialog.querySelector('.viewer-error');
  let opener = null;

  function closeViewer() {
    if (dialog.open) dialog.close();
  }

  function openViewer(event) {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = event.currentTarget;
    const thumbnail = anchor.querySelector('img');
    if (!thumbnail) return;
    event.preventDefault();
    opener = anchor;
    error.hidden = true;
    image.hidden = false;
    image.alt = thumbnail.alt;
    caption.textContent = anchor.dataset.caption || thumbnail.alt;
    original.href = anchor.href;
    image.src = anchor.href;
    document.body.classList.add('viewer-is-open');
    dialog.showModal();
    closeButton.focus();
  }

  image.addEventListener('error', function handleImageError() {
    image.hidden = true;
    error.hidden = false;
  });
  image.addEventListener('load', function handleImageLoad() {
    image.hidden = false;
    error.hidden = true;
  });
  links.forEach(function registerFigure(anchor) { anchor.addEventListener('click', openViewer); });
  closeButton.addEventListener('click', closeViewer);
  dialog.addEventListener('click', function dismissBackdrop(event) {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeViewer();
  });
  dialog.addEventListener('close', function restorePage() {
    document.body.classList.remove('viewer-is-open');
    if (opener && document.contains(opener)) opener.focus();
  });
})();
