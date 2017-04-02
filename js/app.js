$(document).ready(init)

function init() {

  function createScrollPath() {
    $.fn.scrollPath('getPath')
      .moveTo(500, 360, {name: 'title-page'})
      .lineTo(500, 1080, {name: 'start'})
      .lineTo(1500, 1080, {name: 'first'});
  }

  $(".background-image").scrollPath({ drawPath: true });

};
