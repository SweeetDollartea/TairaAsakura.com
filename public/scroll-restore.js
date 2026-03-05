(function() {
  var path = window.location.pathname || window.location.href;
  var name = (path.split('/').pop() || '').split('?')[0];
  var key = 'scrollPos_' + (name || 'index');

  function saveScroll() {
    try {
      sessionStorage.setItem(key, String(window.scrollY || window.pageYOffset || 0));
    } catch (e) {}
  }

  function restoreScroll() {
    try {
      var saved = sessionStorage.getItem(key);
      if (saved !== null) {
        var y = parseInt(saved, 10);
        if (!isNaN(y) && y > 0) {
          window.scrollTo(0, y);
        }
      }
    } catch (e) {}
  }

  history.scrollRestoration = 'manual';

  window.addEventListener('scroll', (function() {
    var t;
    return function() {
      clearTimeout(t);
      t = setTimeout(saveScroll, 150);
    };
  })(), { passive: true });

  window.addEventListener('pagehide', saveScroll);
  window.addEventListener('beforeunload', saveScroll);

  var isReturning = false;
  try { isReturning = sessionStorage.getItem('returningFromProject'); } catch (e) {}

  var projectPages = ['ganson', 'tdp', 'strybuc', 'site-optics', 'design-challenge'];
  var isProjectPage = projectPages.indexOf(name) !== -1;

  if (isProjectPage) {
    window.scrollTo(0, 0);
  } else if (isReturning) {
    sessionStorage.removeItem('returningFromProject');
    function doRestore() {
      requestAnimationFrame(function() {
        restoreScroll();
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', doRestore);
    } else {
      doRestore();
    }
  } else if (document.readyState === 'complete') {
    setTimeout(restoreScroll, 100);
  } else {
    window.addEventListener('load', function() {
      setTimeout(restoreScroll, 100);
    });
  }

})();
