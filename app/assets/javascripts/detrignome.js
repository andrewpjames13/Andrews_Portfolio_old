var metronome = (function(){

var animation = function(speed, direction){
  $('.needle-con').css({ 'transform':'rotate('+direction+'20deg)', 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-left").css({"margin-left": direction+"=27%", 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-big").css({"margin-left": direction+"=65%", 'transition':'all ' +(speed)+'ms ease-in-out'});
  var bass = $("audio")[0];
  bass.play();
};

var time = function(bpm){
  return (60/bpm)*1000;
};

var slider = function(){
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
};

var bpmDelay = function(){
  var turnedOn = null;
  var direction = "+";

  $( "input[type='text']" ).change(function() {
    bpm = 0;
    var inputValue = $(this).val();
    bpm = parseInt(inputValue);
    var speed = time(bpm);

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
};

var init = function(){
  slider();
  $('.on-btn').on('click', function(){
    bpmDelay();
  });
};

  return{
    init: init,
  };

})();
