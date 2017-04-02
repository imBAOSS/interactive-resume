$(document).ready(init)

function init() {

  $.fn.scrollPath('getPath', {scrollSpeed: 10})
    .moveTo(500, 360, {name: 'title-page'})
    .lineTo(500, 1080, {name: 'start'})
    .lineTo(1500, 1080, {name: 'first'});

  $(".background-image").scrollPath({ drawPath: true });

};

function getScrollPosition() {
  return $(window).scrollTop().valueOf();
}

$(window).scroll(function(event) {
  let scrollPos = getScrollPosition();
  console.log(scrollPos);
});

function orientHarry() {
  // get scroll DIRECTION
}
