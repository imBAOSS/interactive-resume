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
  let $top = $('.background-image').css('top');
  let $left = $('.background-image').css('left');
  let top = Number($top.match(/\-?\d+/))
  let left = Number($left.match(/\-?\d+/))

  if (top < -2300 && left <= 0) {
    left -= 100
    $('.background-image').css('left', `${left}px`)
    console.log(left);
  } else {
    top -= 100
    $('.background-image').css('top', `${top}px`)
  }
}

function processUpArrow() {
  let $top = $('.background-image').css('top');
  let $left = $('.background-image').css('left');
  let top = Number($top.match(/\-?\d+/))
  let left = Number($left.match(/\-?\d+/))

  if (top < -2300 && left >= 0) {
    left += 100
    $('.background-image').css('left', `${left}px`)
  } else {
    top += 100
    $('.background-image').css('top', `${top}px`)
  }
}
