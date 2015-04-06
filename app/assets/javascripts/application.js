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

$(document).ready(function(){
  var toggle = 0;
  $('#menu-icon').click(function() {
    $('#menu-icon').each(function() {
      if (toggle == 0) {
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'+=35%'}, 500, function() {});
        toggle = 1;
      } else if(toggle == 1){
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'-=35%'}, 500, function() {});
        toggle = 0;
      }
    });
  });
});

$(document).ready(function() {
  $('.welcome-page .header a').click(function(e) {
    var scrollTo = $.attr(this, 'href').replace('/', '')
    e.preventDefault();
    $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
  });
});
