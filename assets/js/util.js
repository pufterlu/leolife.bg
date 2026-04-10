(function () {
  var logo = document.getElementById('logoContainer');
  var toggler = document.querySelector('.custom-toggler');

  function isMobile() {
    return window.getComputedStyle(toggler).display !== 'none';
  }

  // Initialize: hide logo if mobile and menu is already open on load
  logo.style.transition = 'none';
  if (isMobile() && toggler.getAttribute('aria-expanded') === 'true') {
    logo.style.height = '0';
    logo.style.opacity = '0';
  }

  var hideHandled = false;

  // Menu starts CLOSING: grow and fade logo in exactly in sync with Bootstrap's collapse animation
  document.addEventListener('hide.bs.collapse', function (e) {
    if (hideHandled || !e.target.classList.contains('navbarSupportedContent')) return;
    hideHandled = true;

    var naturalHeight = logo.scrollHeight; // correct even when height is 0 + overflow:hidden
    logo.offsetHeight; // force reflow to commit current state
    logo.style.transition = 'height 0.35s ease, opacity 0.5s ease';
    logo.style.height = naturalHeight + 'px';
    logo.style.opacity = '1';

    // After animation, release to natural/auto height so the element stays responsive
    setTimeout(function () {
      logo.style.transition = 'none';
      logo.style.height = '';
      hideHandled = false;
    }, 400);
  });

  // Menu starts OPENING: instantly collapse logo (no animation)
  document.addEventListener('show.bs.collapse', function (e) {
    if (!e.target.classList.contains('navbarSupportedContent')) return;
    logo.style.transition = 'none';
    logo.style.height = '0';
    logo.style.opacity = '0';
  });
})();
