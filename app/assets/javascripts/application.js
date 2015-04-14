// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

// $(document).ready(function(){
//   $('#menu-icon').click(function() {
//     $('#sidebar-t').toggle("slide");
//     $('.sidecontainer').animate({left:'+=35%'}, 500);
//
//     // $('#sidebar-t').on("mouseleave", function() {
//     //   $('.sidecontainer').animate({left:'-=35%'}, 500);
//     // });
//   });
// });


// $(document).ready(function(){
//   $('#menu-icon').click(function() {
//     $('#menu-icon').each(function(i) {
//       if (this.click == ":odd") {
//         // $('#sidebar-t').toggle("slide");
//         $('.sidecontainer').animate({left:'-=35%'}, 500);
//       } else {
//         // $('#sidebar-t').toggle("slide");
//         $('.sidecontainer').animate({left:'+=35%'}, 500);
//       }
//     });
//   });
// });


$(document).ready(function() {
  $('.welcome-page .header a, #sidebar a').on('click', function(e) {
    var scrollTo = $.attr(this, 'href').replace('/', '');
    e.preventDefault();
    $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
  });

  var count = 0;
  $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
    $('#menu-icon').each(function() {
      if (count == 0) {
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'+=35%'}, 400, function() {});
        count = 1;
      } else if(count == 1){
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'-=35%'}, 400, function() {});
        count = 0;
      }
    });
  });

  //Knob
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
        degree = min
      }

      if (degree > 270) {
        degree = max
      }
      console.log(degree);

      $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
      var activeTicks = (Math.round(degree / 10) + 1);
      $('.tick').removeClass('activetick');
      $('.tick').slice(0,activeTicks).addClass('activetick');

    }
  });

  $('.knob').mouseup(function(e){
    mouseStillDown = false;

    if (mouseStillDown == false) {
      // for(i=0; i<300; i++) {
      activeTicks = 1
      // }
      $('.knob').css({ 'transform':'rotate('+0+'deg)', 'transition':'all 1s ease-in-out' });
      // $('.tick').removeClass('activetick');
      $('.tick').removeClass('activetick').css({'transition':'all 60s ease-out'});
      $('.tick').slice(0,activeTicks).addClass('activetick');
    }
  });

});




// var mouseStillDown = false;
//
// $(document).mousedown(function(event) {
//     mouseStillDown = true;
//     doSomething();
// });
//
// function doSomething() {
//     if (!mouseStillDown) { return; } // we could have come back from
//                                      // SetInterval and the mouse is no longer down
//     // do something
//
//     if (mouseStillDown) { setInterval("doSomething", 100); }
// }
//
// $(document).mouseup(function(event) {
//     mouseStillDown = false;
// });



// $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
//   // $('#menu-icon, header').fadeOut('fast')
//   $('#menu-icon').each(function() {
//       $('#sidebar').toggle("slide");
//       $('.sidecontainer').animate({left:'+=35%'}, 400, function() {});
//   });
// });
//
// $('.side-nav-icon').on('click', function() {
//   $('#menu-icon, header').fadeIn('fast')
//   $('#sidebar').toggle("slide");
//   $('.sidecontainer').animate({left:'-=35%'}, 400, function() {});
// });
