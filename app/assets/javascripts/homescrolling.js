var homeScroll = (function(){

  var scrollToAnchor = function(){
    $('.welcome-page .header a, #sidebar a').on('click', function(e) {
      var scrollTo = $.attr(this, 'href').replace('/', '');
      e.preventDefault();
      $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
    });

  // function scrollToAnchor(anchor){
  // $('.welcome-page').animate({scrollTop: $(anchor).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
  // }
  //
  // $('.welcome-page .header a, #sidebar a').on('click', function() {
  //   var scrollTo = $.attr(this, 'href').replace('/', '');
  //   scrollToAnchor(scrollTo);
  // });
  };

  var init = function(){
    scrollToAnchor();
  };

  return{
    init: init,
  };

})();
