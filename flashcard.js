// hide all flashcards except the first one
$(function() {


    $('div').on('click', '.answer2', function(){
      $('.answer2').effect('shake', 'slow');
    });

  $('.side2').hide();

  $('body').on('click', '.answer1', function() {
      $('.side1').hide(200);
      $('.side2').show(200);
      $('.motivation').show(1000);
  })

  for (var i = 1; i < 4; i++) {
    console.log(i);
  };


    

});