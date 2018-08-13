var sliderScriptInit = function() {
  var pages = document.querySelectorAll('.scripts__page');
  var slideNow = 1;
  var slideCount = pages.length;
  var translateWidth = 600;

  var btnsPrev = document.querySelector('.scripts__prev');
  var btnsNext = document.querySelector('.scripts__next');
  btnsPrev.addEventListener('click', function(ev) {
    ev.preventDefault();
    prevSlide();
  });
  btnsNext.addEventListener('click', function(ev) {
    ev.preventDefault();
    nextSlide();
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      pages.forEach(element => {
        // element.style.left += 100 * slideNow + '%';
        console.log(element.style.left);
      });
      slideNow = 1;
    } else {
      //   translateWidth = Math.ceil(-$('.carousel__viewport').width() * slideNow);
      //   $('.carousel__wrapper').css({
      //     transform: 'translate(' + translateWidth + 'px, 0)',
      //     '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      //     '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      //   });
      pages.forEach(element => {
        // element.style.left += 100 * slideNow + '%';
        console.log(element.style.left);
      });
      slideNow++;
    }
  }

  function prevSlide() {
    // if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    //   translateWidth = -$('.carousel__viewport').width() * (slideCount - 1);
    //   $('.carousel__wrapper').css({
    //     transform: 'translate(' + translateWidth + 'px, 0)',
    //     '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    //     '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    //   });
    //   slideNow = slideCount;
    // } else {
    //   translateWidth = -$('.carousel__viewport').width() * (slideNow - 2);
    //   $('.carousel__wrapper').css({
    //     transform: 'translate(' + translateWidth + 'px, 0)',
    //     '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    //     '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    //   });
    //   slideNow--;
    // }
  }

  function updateSlide() {
    // if (slideNow != 1) {
    //   translateWidth = -$('.carousel__viewport').width() * (slideNow - 1);
    //   $('.carousel__wrapper').css({
    //     transform: 'translate(' + translateWidth + 'px, 0)',
    //     '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
    //     '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    //   });
    // }
  }
};
