var homeScroll = (function(){

  var scrollToAnchor = function(){
    $('.welcome-page .header a, #sidebar a').on('click', function(e) {
      var scrollTo = $.attr(this, 'href').replace('/', '');
      e.preventDefault();
      $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
    });
  };

  // var scrollToAnchor = function(){
  //   $('.welcome-page .header a, #sidebar a').on('click', function() {
  //     var scrollTo = $.attr(this, 'href').replace('/', '');
  //     console.log(scrollTo);
  //   $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart'}, 'slow');
  //   });
  // };


  var init = function(){
    scrollToAnchor();
  };

  return{
    init: init,
  };

})();
