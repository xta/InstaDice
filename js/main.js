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

  var roll_dice = function(){
    var roll_one = random_dice_roll(),
        roll_two = random_dice_roll(),
        event_log;

    $('#dice-one').text(roll_one);
    $('#dice-two').text(roll_two);

    event_log = current_time() +'. Dice: [' + roll_one + '], [' + roll_two + '].';
    $("ul#log").prepend($("<li></li>").html(event_log));
  };

  // on page load, insert new dice roll
  roll_dice();

  // on click #roll_the_dice
  $('#re-roll').click(function() {
    roll_dice();
  });

});
