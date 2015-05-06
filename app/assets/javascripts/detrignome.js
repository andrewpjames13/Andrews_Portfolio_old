var metronome = (function(){
  var sig = 0;

var animation = function(speed, direction){
  $('.needle-con').css({ 'transform':'rotate('+direction+'20deg)', 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-left").css({"margin-left": direction+"=27%", 'transition':'all ' +(speed)+'ms ease-in-out'});
  $(".eye-big").css({"margin-left": direction+"=65%", 'transition':'all ' +(speed)+'ms ease-in-out'});

  signature();
};

var time = function(bpm){
  return (60/bpm)*1000;
};

var signature = function(){
  var bass = new Audio("assets/kick_01.mp3");
  var pipe = new Audio("assets/metal_pipe.mp3");
  var sigVal = $('.sig-btn option:selected').text();

  var fourFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 3){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var threeFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 2){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  var twoFour = function(){
    if(sig === 0){
      sig++;
      return pipe.play();
    }else if(sig == 1){
      sig = 0;
      return bass.play();
    }else{
      sig++;
      return bass.play();
    }
  };

  if(sigVal == "4/4"){
    return fourFour();
  }else if (sigVal == "3/4"){
    return threeFour();
  }else{
    return twoFour();
  }

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
    // $('input').trigger('change');
    bpmDelay();
  });
};

  return{
    init: init,
  };

})();
