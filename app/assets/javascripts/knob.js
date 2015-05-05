var knob = (function(){
  var init = function(){

  var mouseStillDown = false;
  var Rad2DdeG = 180 / Math.PI;
  var knob = $(".knob");
  var min = 0;
  var max = 270;
  knob.centerX = knob.offset().left + knob.width()/2;
  knob.centerY = knob.offset().top + knob.height()/2;

  $('.knob').mousedown(function(e){
    mouseStillDown = true;
    offset = Math.atan2(knob.centerY - e.pageY, e.pageX - knob.centerX);
    $('.knob').css({'transition':'all 0s ease-in-out' });
  });

  $('.knob').mousemove(function(e){
    if (mouseStillDown) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var newOffset = Math.atan2(knob.centerY - mouseY, mouseX - knob.centerX);

      var degree = (offset - newOffset) * Rad2DdeG;
      degree = (degree + 360) % 360;

      if (degree < 0 || degree > 300) {
        degree = min;
      }

      if (degree > 270) {
        degree = max;
      }

      $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
      var activeTicks = (Math.round(degree / 10) + 1);
      $('.tick').removeClass('activetick');
      $('.tick').slice(0,activeTicks).addClass('activetick');

      deg = degree;
    }
  });

  $('.knob').mouseup(function(e){
    mouseStillDown = false;

    if (mouseStillDown === false) {
      tickArray = $('.ticks').children();
      activeTicks = (Math.round(deg / 10));

      for(var tick=activeTicks, degreeCount = deg; tick > 0; tick--, degreeCount = degreeCount -10) {
        var knob = function(tick) {
          $(tickArray[tick]).removeClass('activetick').css({'transition':'all .5s ease-in-out'});
        };

        setTimeout(knob, Math.round(900/activeTicks * (activeTicks - tick)), tick);

      }
      $('.knob').css({ 'transform':'rotate('+ degreeCount + 'deg)', 'transition':'all 1s ease-in-out' });

    }
    activeTicks = 1;

  });

  };

  return{
    init: init,
  };

})();


// var click = function(){
//   $('.knob').mousedown(function(e){
//     mouseStillDown = true;
//     offset = Math.atan2(knob.centerY - e.pageY, e.pageX - knob.centerX);
//     $('.knob').css({'transition':'all 0s ease-in-out' });
//   });
// };
//
// var spin = function(){
// $('.knob').mousemove(function(e){
//   if (mouseStillDown) {
//     var mouseX = e.pageX;
//     var mouseY = e.pageY;
//     var newOffset = Math.atan2(knob.centerY - mouseY, mouseX - knob.centerX);
//
//     var degree = (offset - newOffset) * Rad2DdeG;
//     degree = (degree + 360) % 360;
//
//     if (degree < 0 || degree > 300) {
//       degree = min;
//     }
//
//     if (degree > 270) {
//       degree = max;
//     }
//
//     $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
//     var activeTicks = (Math.round(degree / 10) + 1);
//     $('.tick').removeClass('activetick');
//     $('.tick').slice(0,activeTicks).addClass('activetick');
//
//     deg = degree;
//   }
// });
// };
//
// var release = function(){
// $('.knob').mouseup(function(e){
//   mouseStillDown = false;
//
//   if (mouseStillDown === false) {
//     tickArray = $('.ticks').children();
//     activeTicks = (Math.round(deg / 10));
//
//     for(var tick=activeTicks, degreeCount = deg; tick > 0; tick--, degreeCount = degreeCount -10) {
//       var knob = function(tick) {
//         $(tickArray[tick]).removeClass('activetick').css({'transition':'all .5s ease-in-out'});
//       };
//
//       setTimeout(knob, Math.round(900/activeTicks * (activeTicks - tick)), tick);
//
//     }
//     $('.knob').css({ 'transform':'rotate('+ degreeCount + 'deg)', 'transition':'all 1s ease-in-out' });
//
//   }
//   activeTicks = 1;
//
// });
// };
