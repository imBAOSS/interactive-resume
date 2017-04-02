$(document).ready(init)

function init() {

  function createScrollPath() {
    $.fn.scrollPath('getPath')
      .moveTo(400, 400, {name: 'title-page'})
      .lineTo(400, 800, {name: 'start'})
      .lineTo(1200, 800, {name: 'first'});
  }

  $(".content").scrollPath({ drawPath: true });

};
