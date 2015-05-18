$(document).ready(function() {

//SideBarNav
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

});
