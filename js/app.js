$(document).ready(function() {

  $.fn.scrollPath('getPath', {scrollSpeed: 20})
    .moveTo(500, 360, {name: 'title-page'})
    .lineTo(500, 1080, {name: 'start'})
    .lineTo(1500, 1080, {name: 'first'});

  $(".background-image").scrollPath({ drawPath: true });

  $('.background-image').scroll(function(event) {
    let posY = $(document).scrollTop().valueOf();
    let posX = $(document).scrollLeft().valueOf();
    console.log(posY);
    console.log(posX);
  });

  function getScrollPosition() {
    return $(document).scrollTop().valueOf();
  }

  function orientHarry() {
    // get scroll DIRECTION
  }

  console.log($('.first').position());
  console.log($('.harry').position());
})
