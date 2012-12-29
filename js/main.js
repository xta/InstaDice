/* InstaDice 2012 by rexfeng */
$(document).ready(function() {

  var random_dice_roll  = function(){ return Math.floor((Math.random()*6)+1); },
      dice_one          = random_dice_roll(),
      dice_two          = random_dice_roll();

  // on page load, insert new dice roll
    $('#dice-one').text(dice_one);
    $('#dice-two').text(dice_two);

  // // on click #roll_the_dice
  // $('#roll-the-dice').click(function() {

  // // move dice to Past Rolls

  // // generate two random 1-12 in Latest Roll
  //   $('#dice-one').html(dice_one);
  //   $('#dice-two').html(dice_two);
  // });



});