var regulatorInit = function(initialR) {
  //пполучение размера блока
  var getSize = function(block) {
    result = { width: 0, height: 0 };
    result.width = parseInt(getComputedStyle(block).width);
    result.height = parseInt(getComputedStyle(block).height);
    return result;
  };

  var getPosition = function(block) {
    const rect = block.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  };

  var rotate = function(x1, y1, initialR) {
    x = x1 - x0;
    y = y1 - y0;
    r = 180 + settings.deg - (180 / Math.PI) * Math.atan2(y, x);
    if (initialR) r = initialR;
    var temp = document.querySelector('.regulator__text').textContent;

    if (r > 629 || r < 360) r = 629;
    if (r < 430 && r > 360) r = 430;
    if (r <= 629 && r >= 430) temp = '+' + parseInt((r - 60) / 21);

    indicator.style.webkitTransform = 'rotate(-' + r + 'deg)';
    indicator.style.MozTransform = 'rotate(-' + r + 'deg)';
    indicator.style.msTransform = 'rotate(-' + r + 'deg)';
    indicator.style.OTransform = 'rotate(-' + r + 'deg)';
    indicator.style.transform = 'rotate(-' + r + 'deg)';
    document.querySelector('.regulator__text').textContent = temp;
  };

  var settings = { deg: 270 };
  var indicator = document.getElementById('indicator');
  var x0, y0;
  x0 = getPosition(indicator).x + getSize(indicator).width / 2;
  y0 = getPosition(indicator).y + getSize(indicator).height / 2;

  indicator.addEventListener('mousemove', function(e) {
    x1 = e.pageX;
    y1 = e.pageY;
    rotate(x1, y1);
  });
  indicator.addEventListener('click', function(e) {
    x1 = e.pageX;
    y1 = e.pageY;
    rotate(x1, y1);
  });
  indicator.addEventListener('touchmove', function(e) {
    x1 = e.touches[0].clientX;
    y1 = e.touches[0].clientY;
    rotate(x1, y1);
  });
  if (initialR) rotate(0, 0, initialR);
};
