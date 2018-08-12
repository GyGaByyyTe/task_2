var regulatorInit = function() {
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

  var rotate = function(x1, y1) {
    x = x1 - x0;
    y = y1 - y0;
    r = 180 + settings.deg - (180 / Math.PI) * Math.atan2(y, x);
    indicator.style.webkitTransform = 'rotate(-' + r + 'deg)';
    indicator.style.MozTransform = 'rotate(-' + r + 'deg)';
    indicator.style.msTransform = 'rotate(-' + r + 'deg)';
    indicator.style.OTransform = 'rotate(-' + r + 'deg)';
    indicator.style.transform = 'rotate(-' + r + 'deg)';
  };

  var settings = { deg: 270 };
  var indicator = document.getElementById('indicator');
  var x0, y0;
  x0 = getPosition(indicator).x + getSize(indicator).width / 2;
  y0 = getPosition(indicator).y + getSize(indicator).height / 2;
  console.log(x0);
  console.log(y0);
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
};
