(function(){
  function buildNavHTML(){
    return [
      '<nav class="nav-container" aria-label="Main navigation">',
        '<div class="nav-toggle" id="navToggle" role="button" aria-expanded="false" aria-controls="navMenu">',
          '<div class="nav-icon" id="navIcon"><span></span><span></span><span></span></div>',
        '</div>',
        '<div class="nav-menu" id="navMenu">',
          '<a href="index.html">Home</a>',
          '<a href="https://blossomstechservice.github.io/blossomstechservice/index.html">BlossomTechService</a>',
          '<a href="embodiedcognition.html">Exploration of Embodied Cognition & Human Application</a>',
          '<a href="mpt.html">Microplastics: A Comprehensive Analysis</a>',
          '<a href="hben.html">MODALITY TESTING [HBEN Analyzer]</a>',
          '<a href="BGremoval.html">MODALITY TESTING [BG Removal]</a>',
          '<a href="resumegallery.html">Modular Class-Based Resume Gallery</a>',
        '</div>',
      '</nav>'
    ].join('');
  }

  function initNav(){
    document.body.insertAdjacentHTML('afterbegin', buildNavHTML());
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navIcon = document.getElementById('navIcon');

    function closeMenu(){
      navMenu.classList.remove('active');
      navIcon.classList.remove('active');
      navToggle.setAttribute('aria-expanded','false');
    }
    function openMenu(){
      navMenu.classList.add('active');
      navIcon.classList.add('active');
      navToggle.setAttribute('aria-expanded','true');
    }

    navToggle.addEventListener('click', function(e){
      e.stopPropagation();
      if(navMenu.classList.contains('active')) closeMenu(); else openMenu();
    });

    document.addEventListener('click', function(event){
      const inside = navToggle.contains(event.target) || navMenu.contains(event.target);
      if(!inside) closeMenu();
    });

    navMenu.addEventListener('click', function(e){ e.stopPropagation(); });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();