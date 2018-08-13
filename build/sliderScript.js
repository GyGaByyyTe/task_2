var sliderScriptInit = function() {
  var pages = document.querySelectorAll('.scripts__page');

  var slideNow = 1;
  var slideCount = pages.length;
  var translateWidth = 100;

  var btnsPrev = document.querySelectorAll('.scripts__prev');
  var btnsNext = document.querySelectorAll('.scripts__next');
  btnsPrev.forEach(element => {
    element.addEventListener('click', function(ev) {
      ev.preventDefault();
      prevSlide();
    });
  });
  btnsNext.forEach(element => {
    element.addEventListener('click', function(ev) {
      ev.preventDefault();
      nextSlide();
    });
  });

  function nextSlide() {
    var currentLeft = 0;
    if (slideNow == slideCount || slideNow > slideCount) {
      pages.forEach(element => {
        element.style.left = currentLeft + '%';
      });
      slideNow = 1;
    } else {
      pages.forEach(element => {
        currentLeft = parseInt(element.style.left)
          ? parseInt(element.style.left) + translateWidth
          : translateWidth;
        element.style.left = '-' + currentLeft + '%';
      });
      slideNow++;
    }
  }

  function prevSlide() {
    var currentLeft = 0;

    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      pages.forEach(element => {
        element.style.left = '-' + (slideCount - 1) * translateWidth + '%';
      });
      slideNow = slideCount;
    } else {
      pages.forEach(element => {
        currentLeft = parseInt(element.style.left)
          ? parseInt(element.style.left) + translateWidth
          : translateWidth;
        element.style.left = '-' + currentLeft + '%';
      });
      slideNow--;
    }
  }

  function updateSlide() {
    if (slideNow != 1) {
      pages.forEach(element => {
        element.style.left = '-' + (slideCount - 1) * translateWidth + '%';
      });
    }
  }
};
