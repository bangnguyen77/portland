$(document).ready(function() {
  $(".click1").hover (function() {

    $(".infoLandmarks").hide();
    $(".infoHike").hide();
    $(".infoSports").fadeIn();
  });
});

$(document).ready(function() {
  $(".click2").hover (function() {

    $(".infoSports").hide();

    $(".infoHike").hide();
    $(".infoLandmarks").fadeIn();
  });
});

$(document).ready(function() {
  $(".click3").hover (function() {

    $(".infoLandmarks").hide();
    $(".infoSports").hide();
    $(".infoHike").fadeIn();
  });
});
