$(document).ready(function() {

  $.fn.scrollPath('getPath', {scrollSpeed: 10})
    .moveTo(500, 360, {name: 'title-page'})
    .lineTo(500, 1080, {name: 'start'})
    .lineTo(1500, 1080, {name: 'first'});

  $(".background-image").scrollPath({ drawPath: true });

  $(window).scroll(function(event) {
    console.log(`event: ${event.type}`);
    console.log(`event: ${event}`);
    let scrollPos = getScrollPosition();
    console.log(`scrollPos: ${scrollPos}`);
  });

  function getScrollPosition() {
    return $(window).scrollTop().valueOf();
  }

  function orientHarry() {
    // get scroll DIRECTION
  }

})
