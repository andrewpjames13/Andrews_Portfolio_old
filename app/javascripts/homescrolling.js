$(document).ready(function() {

  var homeScroll = (function(){

    // var scrollToAnchor = function(){
    //   $('.welcome-page .header a, #sidebar a').on('click', function(e) {
    //     var scrollTo = $.attr(this, 'href').replace('/', '');
    //     e.preventDefault();
    //     $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
    //   });
    // };

    // $('a[href=#portfolio]').click(function(){
  	// 		//$('#vertScroll').animate({scrollTop:$('#proj1').position().top}, 0);
    //     var scrollTo = $.attr(this, 'href').replace('/', '');
  	// 		$('.welcome-page').animate({scrollTop:$(scrollTo).css('top')}, 1000, 'easeInOutExpo');
  	// 		return false;
  	// 	});

//   		$('.container').each(function(){
//   			//Setting the top property for CSS to the position().top [jQuery]
//   			//The top was set to auto - but to be overwritten by position().top
//   			//position().top = 5100 set css('top') = 5100px
//   			$(this).css({'top': $(this).position().top});
//   		});
//
//   		$('a[href=#portfolio]').click(function(){
//         console.log('hi');
//   			var targetDiv = $(this).attr('href');
//
//   			var listItem = $(targetDiv);
//   			var targetIndex = ($(".container > div").index(listItem));
//   			var destination = ((parseInt($('.container').css('height'))+parseInt($('.container').css('padding-bottom')))*targetIndex);
// console.log(destination);
//         debugger;
//   												//scrollTop uses a integer to scroll - parseInt to remove the 'px' from the top property of the CSS
//   												// parse(5100px) = 5100
//   			$('.welcome-page').animate({scrollTop:destination}, 1000, 'easeInOutExpo');
//   			return false;
//   		});

    // var scrollToAnchor = function(){
    //   $('.welcome-page .header a, #sidebar a').on('click', function() {
    //     var scrollTo = $.attr(this, 'href').replace('/', '');
    //     console.log(scrollTo);
    //   $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart'}, 'slow');
    //   });
    // };

    var scrollToAnchor = function(){

    $('.header a, #sidebar a').click(function(e){
      e.preventDefault();
      console.log('hi');
        $('html,body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 800);
        return false;
    });
    };

    var init = function(){
      scrollToAnchor();
    };

    return{
      init: init,
    };

  })();

  homeScroll.init();

});
