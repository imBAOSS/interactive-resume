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
    let $harryLeft = $('.harry-container').position().left;
    let $harryTop = $('.harry-container').position().top;
    console.log($harryLeft);

    // console.log($('.content').position());



      // first downward vertical navigation
    if ($top > -$height*2) {
      $top -= $height*0.05
      $('.content').css('top', `${$top}px`)

      // first rightward horizontal navigation
    } else if ($top <= -$height*2 && $left >= -$width*8 ) {
      $left -= $width*0.05
      $harryLeft += $width*0.05
      console.log($harryLeft);

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)

      // second downward vertical navigation
    } else if ($left < -$width*8 && $top > -$height*3) {
      $top -= $height*0.05
      $harryTop += $height*0.05

      $('.content').css('top', `${$top}px`)
      $('.harry-container').css('top', `${$harryTop}px`)

      // second rightward horizontal navigation
    } else if ($top <= -$height*3 && $left >= -$width*9) {
      $left -= $width*0.05
      $harryLeft += $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)
    }

    // console.log($('.content').position());
  }

  function processUpArrow() {
    let $top = $('.content').position().top;
    let $left = $('.content').position().left;
    let $harryLeft = $('.harry-container').position().left;
    let $harryTop = $('.harry-container').position().top;
    console.log($harryLeft);

    // console.log($('.content').position());



      // first downward vertical navigation
    if ($top > -$height*2) {
      $top += $height*0.05
      $('.content').css('top', `${$top}px`)

      // first rightward horizontal navigation
    } else if ($top <= -$height*2 && $left >= -$width*8 ) {
      $left += $width*0.05
      $harryLeft -= $width*0.05
      console.log($harryLeft);

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)

      // second downward vertical navigation
    } else if ($left < -$width*8 && $top > -$height*3) {
      $top += $height*0.05
      $harryTop -= $height*0.05

      $('.content').css('top', `${$top}px`)
      $('.harry-container').css('top', `${$harryTop}px`)

      // second rightward horizontal navigation
    } else if ($top <= -$height*3 && $left >= -$width*9) {
      $left += $width*0.05
      $harryLeft -= $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)
    }

    // console.log($('.content').position());
    // let $top = $('.content').position().top;
    // let $left = $('.content').position().left;
    //
    // let height = $(window).height();
    // let width = $(window).width();
    //
    // if ($top <= -height && $left <= -width) {
    //   $left += width*0.05
    //   $('.content').css('left', `${$left}px`)
    // } else {
    //   $top += height*0.05
    //   $('.content').css('top', `${$top}px`)
    // }
  }

  function  triggerAnimations() {
    let $left = $('.content').position().left;
    let $harryLeft = $('.harry-container').position().left;

    triggerBannerAnimations($harryLeft);

  }

  function triggerBannerAnimations(harryPosition) {
    if (harryPosition > 2100) {
      $('.g-banner-container').addClass('drop-down')
    }

    if (harryPosition > 2400) {
      $('.h-banner-container').addClass('drop-down')
    }

    if (harryPosition > 2900) {
      $('.r-banner-container').addClass('drop-down')
    }

    if (harryPosition > 3400) {
      $('.s-banner-container').addClass('drop-down')
    }
  }

  function resetHarryPosition(e) {
    if (e.keyCode === 40) {
      $('.harry').addClass('walk-face-right-1')
      setTimeout(function() {
        $('.harry').removeClass('walk-face-right-1')
      }, 1000);
    }
  }
  function animateHarry(e) {
    let harry = $('.harry');
    if (e.keyCode === 40) {
      harry.addClass('walk-face-right-2')
      setTimeout(function() {
        harry.removeClass('walk-face-right-2')
      }, 500);
      // setTimeout(function() {
      //   harry.addClass('walk-face-right-1')
      // }, 500);
      // setTimeout(function() {
      //   harry.removeClass('walk-face-right-1')
      // }, 500);
    }
  }

  $(window).keyup(function(e) {
    resetHarryPosition(e);
  })

  $(window).keydown(function(e) {
    moveLayers(e);
    triggerAnimations();
    animateHarry(e);
    // positionHarry();
  })

  $(window).resize(function() {
    // centerContent();
    // calculate windowHeight and windowWidth
    // calculate distance needed to travel
    $height = $(window).height();
    $width = $(window).width();
})

})

console.log($('.background').height());
console.log($('.background').width());

let $height = $(window).height();
let $width = $(window).width();

let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
