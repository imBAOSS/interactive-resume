/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
    // console.log(`Left: ${$harryLeft}`);
    // console.log(`Top: ${$harryTop}`);

    console.log(`Left: ${$left}`);
    console.log(`Top: ${$top}`);


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
    } else if ($left < -10700 && $top > -$height*3) {
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
    } else if ($top <= -$height*2 && $left >= -$width*15 ) {
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
    triggerPortraitAnimations($harryLeft);
    triggerSkill1Animations($harryLeft);
  }

  function triggerSkill1Animations(harryPosition) {
    if (harryPosition > 8100) {
      $('.skill-1').addClass('bounce-master')
    }

    if (harryPosition > 8200) {
      $('.skill-2').addClass('bounce-expert')
    }

    if (harryPosition > 8300) {
      $('.skill-3').addClass('bounce-master')
    }

    if (harryPosition > 8400) {
      $('.skill-4').addClass('bounce-master')
    }
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

  function triggerPortraitAnimations(harryPosition) {
    if (harryPosition > 4500) {
      $('.portrait-1').addClass('fadeout')
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
    if (animatingHarry) {

    } else {
      if (e.keyCode === 40) {
        animatingHarry = true;
        harry.addClass('walk-face-right-2')
        setTimeout(function() {
          harry.removeClass('walk-face-right-2')
          animatingHarry = false;
        }, 1000);
        // setTimeout(function() {
        //   harry.addClass('walk-face-right-1')
        // }, 500);
        // setTimeout(function() {
        //   harry.removeClass('walk-face-right-1')
        // }, 500);
      }
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
let animatingHarry = false;

let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map