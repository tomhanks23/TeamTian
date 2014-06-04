// hide all flashcards except the first one
$(function() {

  $('.side2').hide();

  $('body').on('click', '.side1', function() {
      $(this).hide(200);
      $('.side2').show(200);
  })
  
  $('body').on('click', '.side2', function() {
    $(this).hide(200);
    $('.side1').show(200);
  }); 

  for (var i = 1; i < 4; i++) {
    console.log(i);
    
  };

});