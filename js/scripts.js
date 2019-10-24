$(document).ready(function() {


  var userHeigth = parseInt(prompt("How tall are you (in inches)?"));

  var eligible = (function(userHeigth) {
    if(userHeigth <= 36) {
      $(".rideBaby").show();
    }

    else if(userHeigth <= 48) {
        $(".rideShorty").show();
    }

    else if(userHeigth <= 80) {
        $(".rideScary").show();

    }

    else {
      $(".rideNone").show();
    }




  });

  eligible(userHeigth);



});
