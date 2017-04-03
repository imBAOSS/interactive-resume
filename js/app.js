$(document).ready(function() {

  $.fn.scrollPath('getPath', {scrollSpeed: 20})
    .moveTo(500, 360, {name: 'title-page'})
    .lineTo(500, 1080, {name: 'start'})
    .lineTo(1500, 1080, {name: 'first'});

  $(".background-image").scrollPath({ drawPath: true });

  $(window).on('scroll', function(event) {
    debugger;
    let scrollPosition = $(document).scrollTop().valueOf();
    console.log(scrollPosition);
  });

  function getScrollPosition() {
    return $(document).scrollTop().valueOf();
  }

  function orientHarry() {
    // get scroll DIRECTION
  }

})
