$(function() {

  function createScrollPath() {
    $.fn.scrollPath('getPath')
      .moveTo(400, 50, {name: 'Title Page'})
      .lineTo(400, 100, {name: 'Start'})
      .lineTo(800, 100, {name: 'First'});
  }

  $(".content").scrollPath({
  	drawPath: true,
  	wrapAround: false,
  	scrollBar: false
  });

})
