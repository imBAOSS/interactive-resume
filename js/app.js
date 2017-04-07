$(document).ready(function() {

  // $(window).keydown((e) => {
  //   switch (e.keyCode) {
  //     case 40:
  //       return processDownArrow();
  //     case 38:
  //       return processUpArrow();
  //     default:
  //
  //   }
  // })

})

function moveLayers(e) {
  switch (e.keyCode) {
    case 40:
      return processDownArrow();
    case 38:
      return processUpArrow();
  }
}

function processDownArrow() {
  let $top = $('.content').position().top;
  let $left = $('.content').position().left;

  console.log($('.content').position());

  let $height = $(window).height();
  let $width = $(window).width();

  if ($top <= -$height*0.95 && $left >= -$width*0.95*2) {
    $left -= $width*0.05
    $('.content').css('left', `${$left}px`)
  } else {
    $top -= $height*0.05
    $('.content').css('top', `${$top}px`)
  }
  console.log($('.content').position());

}

function processUpArrow() {
  let $top = $('.content').position().top;
  let $left = $('.content').position().left;

  let height = $(window).height();
  let width = $(window).width();

  if ($top <= -height && $left <= -width) {
    $left += width*0.05
    $('.content').css('left', `${$left}px`)
  } else {
    $top += height*0.05
    $('.content').css('top', `${$top}px`)
  }
}

function  triggerAnimations() {
  let $left = $('.content').position().left;

  if ($left <= -1070) {
    $('.three').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('animated fadeOut');
    })
  }
}

$(window).keydown(function(e) {
  moveLayers(e);
  triggerAnimations();
  // positionHarry();
})

$(window).resize(function() {
  // centerContent();
  // calculate windowHeight and windowWidth
  // calculate distance needed to travel
})
