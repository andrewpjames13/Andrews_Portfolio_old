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


  // function abc() {
  //   // Some code
  //   var a =  $("#amount").val();
  //   $(".knob").css({ 'transform':'rotate('+degree+'deg)' });
  //
  // }
  // $(function() {
  //    $("#slider").slider({
  //      range: "min",
  //      value: 100,
  //      min: 0,
  //      max: 225,
  //      slide: function(event, ui) {
  //        $("#amount").val(ui.value);
  //        abc()
  //        }
  //      });
  //    });

  // var mouseStillDown = false;
  // var degree = 10;
  // $('.knob').mousedown(function(){
  //   mouseXStart = Math.round (event.clientX);
  //   mouseYStart = Math.round (event.clientY);
  //   mouseStillDown = true;
  //
  //   if (mouseStillDown == true) {
  //     $('.knob').mousemove(function(event){
  //       mouseX = Math.round (event.clientX);
  //       mouseY = Math.round (event.clientY);
  //
  //       // console.log(mouseXStart, mouseYStart);
  //       // console.log(mouseX, mouseY);
  //       // degree = (mouseX - mouseXStart) + (mouseY - mouseYStart);
  //       console.log(degree);
  //     });
  //   }
  //
  //   $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
  //   console.log(mouseStillDown);
  // });
  //
  //
  // $('.knob').mouseup(function(){
  //   mouseStillDown = false;
  //   console.log(mouseStillDown);
  //
  // });

  // var mouseStillDown = false;
  // var RAD2DEG = 180 / Math.PI;
  // var knob = $(".knob");
  // var min = 0;
  // var max = 270;
  // knob.centerX = knob.offset().left + knob.width()/2;
  // knob.centerY =  knob.offset().top + knob.height()/2;
  //
  // $('.knob').mousedown(function(e){
  //   mouseStillDown = true;
  //   offset = Math.atan2(knob.centerY - e.pageY, e.pageX - knob.centerX);
  // });
  //
  // $('.knob').mouseup(function(){
  //   mouseStillDown = false;
  // });
  //
  // $('.knob').mousemove(function(e){
  //   if (mouseStillDown) {
  //     var mouseX = e.pageX;
  //     var mouseY = e.pageY;
  //     var radians = Math.atan2(mouseX, mouseY);
  //     var newOffset = Math.atan2(knob.centerY - e.pageY, e.pageX - knob.centerX);
  //
  //     var degree = (offset - newOffset) * RAD2DEG;
  //
  //     $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
  //     console.log(degree);
  //
  //   }
  // });

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
  });

  $('.knob').mouseup(function(){
    mouseStillDown = false;
  });

  $('.knob').mousemove(function(e){
    if (mouseStillDown) {
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      var radians = Math.atan2(mouseX, mouseY);
      var newOffset = Math.atan2(knob.centerY - mouseY, mouseX - knob.centerX);

      var degree = (offset - newOffset) * Rad2DdeG;
      degree = (degree + 360) % 360;

      if (degree < 0)  {
        degree = 360 + degree
      }

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
