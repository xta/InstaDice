/* InstaDice 2012-2014 by rexfeng */
$(document).ready(function() {

  var random_dice_roll  = function(){ return Math.floor((Math.random()*6)+1); };

  var current_time = function(){
    var now     = new Date(),
        year    = now.getFullYear(),
        month   = now.getMonth()+1,
        day     = now.getDate(),
        hour    = now.getHours(),
        minute  = now.getMinutes(),
        second  = now.getSeconds(),
        dateTime;

    if(minute.toString().length == 1) {
      minute = '0'+minute;
    }
    if(second.toString().length == 1) {
      second = '0'+second;
    }
    dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
    return dateTime;
  };

  var rolling = false;

  var roll_dice = function(animate){
    var roll_one = random_dice_roll(),
        roll_two = random_dice_roll(),
        event_log;

    $('#dice-one').text(roll_one);
    $('#dice-two').text(roll_two);

    if(animate) {
      $('#dice-one, #dice-two').addClass('rolled');
      // reduced-motion disables the animation, so animationend would never fire
      var style = window.getComputedStyle($('#dice-one')[0]),
          name  = style.animationName || style.webkitAnimationName;
      rolling = !!name && name !== 'none';
      if(!rolling) {
        $('#dice-one, #dice-two').removeClass('rolled');
      }
    }

    event_log = current_time() +'. Dice: [' + roll_one + '], [' + roll_two + '].';
    $("ul#log").prepend($("<li></li>").html(event_log));
  };

  // on page load, insert new dice roll
  roll_dice();

  // when the animation finishes, clear it and allow the next roll
  $('#dice-one').on('animationend webkitAnimationEnd', function() {
    $('#dice-one, #dice-two').removeClass('rolled');
    rolling = false;
  });

  // on click #roll_the_dice, ignored while the dice are still animating
  $('#re-roll').click(function() {
    if(rolling) { return; }
    roll_dice(true);
  });

});
