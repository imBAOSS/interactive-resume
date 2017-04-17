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

    console.log($('.content').position());



      // first downward vertical navigation
    if ($top > -($height*2)) {
      $top -= $height*0.05
      $('.content').css('top', `${$top}px`)

      // first rightward horizontal navigation
    } else if ($top >= $height*2 && $left >= -$width*8 ) {
      $left -= $width*0.05
      $('.content').css('left', `${$left}px`)

      // second downward vertical navigation
    } else if ($left < -$width*8 && $top > -$height*3) {
      $top -= $height*0.05
      $('.content').css('top', `${$top}px`)

      // second rightward horizontal navigation
    } else if ($top <= -$height*3 && $left >= -$width*9) {
      $left -= $width*0.05
      $('.content').css('left', `${$left}px`)
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

let $height = $(window).height();
let $width = $(window).width();

let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map