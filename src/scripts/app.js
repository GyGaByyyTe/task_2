document.addEventListener(
  'DOMContentLoaded',
  function() {
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

    window.addEventListener(
      'resize',
      function() {
        setSliderWidth();
      },
      true
    );

    setSliderWidth();

    var overlayButtons = document.getElementsByClassName('overlay__button');
    var overlays = document.getElementsByClassName('overlay');
    var contentBlock = document.getElementById('content');

    for (var i = 0; i < overlayButtons.length; i++) {
      overlayButtons[i].addEventListener('click', function(ev) {
        ev.preventDefault();
        for (var j = 0; j < overlays.length; j++) {
          overlays[j].style.display = 'none';
        }
        contentBlock.classList.toggle('content--blur');
      });
    }
  },
  false
);
