document.addEventListener(
  'DOMContentLoaded',
  function() {
    var overlay__slider = document.getElementsByClassName('overlay__slider');
    var slider = document.getElementsByClassName('slider');

    var setSliderWidth = function() {
      var paddingTop = parseInt(
        getComputedStyle(overlay__slider[0]).paddingTop
      );
      var paddingBottom = parseInt(
        getComputedStyle(overlay__slider[0]).paddingBottom
      );
      slider[0].style.width =
        overlay__slider[0].clientHeight - (paddingTop + paddingBottom) + 'px';
    };

    window.addEventListener(
      'resize',
      function() {
        setSliderWidth();
      },
      true
    );

    setSliderWidth();
  },
  false
);
