$('.squareContainer').hover(
  function(){
     $(this).find('.squareText').fadeIn(200); 
  },
  function(){
     $(this).find('.squareText').fadeOut(200); 
  }
);