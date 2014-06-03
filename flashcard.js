// hide all flashcards except the first one
$(function() {
  
  $('.back').hide();

  $('body').on('click', '.back', function() {
    $(this).hide(200);
    $('.front').show(200);
  }); 

  $('body').on('click', '.front', function() {
      $(this).hide(200);
      $('.back').show(200);
  })
  



  for (var i = 1; i < 4; i++) {
    console.log(i);
    
  };

  $('.badge').hide();

});