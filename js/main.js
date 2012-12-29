/* InstaDice 2012 by rexfeng */
$(document).ready(function() {

  var random_dice_roll  = function(){ return Math.floor((Math.random()*6)+1); };

  // on page load, insert new dice roll
    $('#dice-one').text(random_dice_roll());
    $('#dice-two').text(random_dice_roll());

  // on click #roll_the_dice
  $('#re-roll').click(function() {
    $('#dice-one').text(random_dice_roll());
    $('#dice-two').text(random_dice_roll());
  });



});