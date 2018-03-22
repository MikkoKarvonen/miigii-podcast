$('.squareContainer').mouseover(function() {
  $(this.getElementsByClassName('squareText')).css("visibility","visible");
});

$('.squareContainer').mouseout(function() {
  $(this.getElementsByClassName('squareText')).css("visibility","hidden");
});