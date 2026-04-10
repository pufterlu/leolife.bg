(function () {
  var logo = document.getElementById('logoContainer');
  // When the menu finishes collapsing, fade the logo in from invisible
  logo.addEventListener('hidden.bs.collapse', function () {
    logo.style.transition = 'none';
    logo.style.opacity = '0';
    logo.offsetHeight; // force reflow so snap to 0 is applied first
    logo.style.transition = 'opacity 0.7s ease-in';
    logo.style.opacity = '1';
  });
  // When the menu starts expanding, instantly hide the logo (no fade needed)
  logo.addEventListener('show.bs.collapse', function () {
    logo.style.transition = 'none';
    logo.style.opacity = '';
  });
})();
