(function() {
  if (typeof document === 'undefined' || !document.querySelector) return;

  var revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  var opts = { rootMargin: '0px 0px -10% 0px', threshold: 0 };
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, opts);

  revealEls.forEach(function(el) {
    var delay = parseInt(el.getAttribute('data-reveal-delay'), 10);
    if (delay) el.style.transitionDelay = delay + 'ms';
    observer.observe(el);
  });
})();
