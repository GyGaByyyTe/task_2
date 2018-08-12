document.addEventListener(
  'DOMContentLoaded',
  function() {
    var hamburgerButton = document.querySelector('.hamburger');
    var naviationMenu = document.querySelector('.menu');
    var hamburgerLines = document.querySelector('.hamburger__link');

    hamburgerButton.addEventListener('click', function(ev) {
      ev.preventDefault();
      hamburgerLines.classList.toggle('hamburger__link--pressed');
      naviationMenu.classList.toggle('menu--active');
    });

    var overlay__slider = document.getElementsByClassName('overlay__slider');
    var sliders = document.getElementsByClassName('slider');

    var setSliderWidth = function() {
      for (var i = 0; i < sliders.length; i++) {
        var paddingTop = parseInt(
          getComputedStyle(overlay__slider[i]).paddingTop
        );
        var paddingBottom = parseInt(
          getComputedStyle(overlay__slider[i]).paddingBottom
        );
        sliders[i].style.width =
          overlay__slider[i].clientHeight - (paddingTop + paddingBottom) + 'px';
      }
    };

    function resize() {
      if (window.width >= 1280) {
        setSliderWidth();
        // updateSlide();
      }
    }
    window.addEventListener('resize', resize, true);
    if (window.width >= 1280) {
      setSliderWidth();
    }

    // открытие сценария на весь экран

    var contentBlock = document.getElementById('content');
    var wrapperBlock = document.getElementById('wrapper');
    var openedOverlay = '';

    var overlayTermostate = document.getElementById('termostate');
    var overlayTemperature = document.getElementById('temperature');
    var overlayLamp = document.getElementById('lamp');

    var clickScript = function(type, target) {
      openedOverlay = target;

      var overlayBlock = document.getElementById(type);
      var overlayApply = overlayBlock.querySelector('.overlay__button--apply');
      var overlayClose = overlayBlock.querySelector('.overlay__button--close');

      var clear = function(block) {
        overlayApply.removeEventListener('click', listener, false);
        overlayClose.removeEventListener('click', listener, false);
      };
      var listener = function(block) {
        overlayBlock.classList.toggle('overlay--shown');
        contentBlock.classList.toggle('content--blur');
        wrapperBlock.classList.toggle('wrapper--blur');
        clear();
      };
      overlayApply.addEventListener('click', listener, false);
      overlayClose.addEventListener('click', listener, false);

      overlayBlock.classList.toggle('overlay--shown');
      contentBlock.classList.toggle('content--blur');
      wrapperBlock.classList.toggle('wrapper--blur');
      if (type === 'termostate') {
        console.log(type);
        overlayBlock.addEventListener('animationend', regulatorInit);
      } else {
        if (window.width >= 1280) {
          setSliderWidth();
        }
      }
    };

    var arrayBulb = document.querySelectorAll('.bulb');

    var arrayTemperature = document.querySelectorAll('.temperature');

    var arrayTermostate = document.querySelectorAll('.termostate');

    for (var i = 0; i < arrayBulb.length; i++) {
      arrayBulb[i].addEventListener('click', function(event) {
        clickScript('lamp', this);
      });
    }
    for (var i = 0; i < arrayTemperature.length; i++) {
      arrayTemperature[i].addEventListener('click', function(event) {
        clickScript('temperature', this);
      });
    }
    for (var i = 0; i < arrayTermostate.length; i++) {
      arrayTermostate[i].addEventListener('click', function(event) {
        clickScript('termostate', this);
      });
    }
  },
  false
);
