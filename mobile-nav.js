/* The Jitz Guild — mobile navigation.
   Self-contained: builds a hamburger button + slide-in drawer from the existing
   desktop nav so phones (where the desktop nav is hidden) can navigate the whole
   site. No framework/runtime dependency; safe alongside the dc prototype runtime. */
(function () {
  function init() {
    var header = document.querySelector('header');
    if (!header) return;
    var primary = header.querySelector('nav[aria-label="Primary"]');
    if (document.querySelector('.wc-burger')) return; // already built

    // Links: clone the primary nav, then append a few key support links.
    var links = [];
    if (primary) {
      primary.querySelectorAll('a').forEach(function (a) {
        links.push({ href: a.getAttribute('href'), label: (a.textContent || '').trim() });
      });
    }
    [['shop.html', 'SHOP ALL'], ['size-guide.html', 'SIZE GUIDE'], ['contact.html', 'CONTACT']]
      .forEach(function (x) {
        if (!links.some(function (l) { return l.href === x[0]; })) links.push({ href: x[0], label: x[1] });
      });

    // Hamburger button — appended to <body> (NOT into the header) so the
    // prototype runtime's re-render can't strip it. Fixed-position via CSS.
    var burger = document.createElement('button');
    burger.className = 'wc-burger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'wc-drawer');
    burger.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(burger);

    // Backdrop + drawer
    var backdrop = document.createElement('div');
    backdrop.className = 'wc-backdrop';

    var drawer = document.createElement('nav');
    drawer.className = 'wc-drawer';
    drawer.id = 'wc-drawer';
    drawer.setAttribute('aria-label', 'Mobile');
    var html = '<button class="wc-drawer-close" aria-label="Close menu">&times;</button>'
      + '<div class="wc-drawer-brand">&#9824; &#9829; &#9827; &#9830;</div><ul>';
    links.forEach(function (l) {
      html += '<li><a href="' + l.href + '">' + l.label + '</a></li>';
    });
    html += '</ul>';
    drawer.innerHTML = html;

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    function open() {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    burger.addEventListener('click', open);
    backdrop.addEventListener('click', close);
    drawer.querySelector('.wc-drawer-close').addEventListener('click', close);
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
