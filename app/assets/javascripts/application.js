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
  //navigation
  $('.welcome-page .header a, #sidebar a').on('click', function(e) {
    var scrollTo = $.attr(this, 'href').replace('/', '');
    e.preventDefault();
    $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
  });

  var count = 0;
  $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
    $('#menu-icon').each(function() {
      if (count === 0) {
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
  // var mouseStillDown = false;
  // var Rad2DdeG = 180 / Math.PI;
  // var knob = $(".knob");
  // var min = 0;
  // var max = 270;
  // knob.centerX = knob.offset().left + knob.width()/2;
  // knob.centerY = knob.offset().top + knob.height()/2;
  //
  // $('.knob').mousedown(function(e){
  //   mouseStillDown = true;
  //   offset = Math.atan2(knob.centerY - e.pageY, e.pageX - knob.centerX);
  //   $('.knob').css({'transition':'all 0s ease-in-out' });
  //
  // });
  //
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
  //       degree = min
  //     }
  //
  //     if (degree > 270) {
  //       degree = max
  //     }
  //
  //     $('.knob').css({ 'transform':'rotate('+degree+'deg)' });
  //     var activeTicks = (Math.round(degree / 10) + 1);
  //     $('.tick').removeClass('activetick');
  //     $('.tick').slice(0,activeTicks).addClass('activetick');
  //
  //     deg = degree
  //   }
  // });
  //
  // $('.knob').mouseup(function(e){
  //   mouseStillDown = false;
  //
  //   if (mouseStillDown == false) {
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
  //   activeTicks = 1
  //
  // });

  //Detrignome

  //BPM Slider

  //BPM Slider

  bpm = 0;
  $(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 90,
      min: 1,
      max: 225,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        $('input').trigger('change');
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) );
    var time = function(bpm){return (60/bpm)*1000;};
    var turnedOn = null;
    var direction = "+";
    var animation = function(speed, direction){
      $("div[class^='eye']").animate({ "left": direction +"=17%", easing: 'easeInOutQuart' }, speed );
      // $('.needle').css({ 'transform':'rotate('+direction+'50deg)', 'transition':'all 'speed''+'s ease-in-out' });
    };

    // $('.on-btn').css({cursor: "pointer"}).on('click', function() {
    //   var counter = 0;
    //   if (counter === 0){
    //     counter = 1;
    //     var inputValue = $( "#amount" ).val();
    //     bpm = parseInt(inputValue);
    //     var speed = time(bpm);
    //     var firstTime = true;
    //     window.clearInterval(turnedOn);
    //     turnedOn = window.setInterval(function(){
    //       animation(speed, direction)
    //       if (direction == "+"){
    //         direction = "-"
    //       }else{
    //         direction = "+"
    //       }
    //     },speed);
    //   }else if(count == 1) {
        $( "input[type='text']" ).change(function() {
          var inputValue = $(this).val();
          bpm = parseInt(inputValue);
          var speed = time(bpm);
          var firstTime = true;
          window.clearInterval(turnedOn);
          turnedOn = window.setInterval(function(){
            animation(speed, direction);
            if (direction == "+"){
              direction = "-";
            }else{
              direction = "+";
            }
          },speed);
        });
      // }

    });

  // });

});
