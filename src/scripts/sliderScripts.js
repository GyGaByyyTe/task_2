var sliderScriptInit = function() {
  var slideNow = 1;
  var slideCount = document.querySelectorAll('.scripts__page').length;
  var translateWidth = 600;

  $('.carousel__btn--next').click(function() {
    nextSlide();
  });

  $('.carousel__btn--prev').click(function() {
    prevSlide();
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.carousel__wrapper').css('transform', 'translate(0, 0)');
      slideNow = 1;
    } else {
      translateWidth = Math.ceil(-$('.carousel__viewport').width() * slideNow);
      $('.carousel__wrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow++;
    }
  }

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('.carousel__viewport').width() * (slideCount - 1);
      $('.carousel__wrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow = slideCount;
    } else {
      translateWidth = -$('.carousel__viewport').width() * (slideNow - 2);
      $('.carousel__wrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow--;
    }
  }

  function updateSlide() {
    if (slideNow != 1) {
      translateWidth = -$('.carousel__viewport').width() * (slideNow - 1);
      $('.carousel__wrapper').css({
        transform: 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
    }
  }
};
