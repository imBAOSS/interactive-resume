$(document).ready(function() {

  $(window).keydown((e) => {
    switch (e.keyCode) {
      case 40:
        return processDownArrow();
      case 38:
        return processUpArrow();
      default:

    }
  })

})

function processDownArrow() {
  let $top = $('.content').position().top;
  let $left = $('.content').position().left;
  console.log($top);

  let height = $(window).height();
  let width = $(window).width();


  if ($top <= -height && $left <= -width) {
    $left -= width*0.05
    $('.content').css('left', `${$left}px`)
  } else {
    $top -= height*0.05
    $('.content').css('top', `${$top}px`)
  }
}

function processUpArrow() {
  let $top = $('.content').css('top');
  let $left = $('.content').css('left');

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
