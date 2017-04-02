$(document).ready(

  function createScrollPath() {
    $.fn.scrollPath('getPath')
      .moveTo(400, 400, {name: 'Title Page'})
      .lineTo(400, 800, {name: 'Start'})
      .lineTo(1200, 800, {name: 'First'});
  }

  $(".content").scrollPath({
  	drawPath: true,
  	wrapAround: false,
  	scrollBar: false
  });

);
