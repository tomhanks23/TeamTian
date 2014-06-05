// hide all flashcards except the first one
$(function() {

  $('.side2').hide();

    $('div').on('click', '.answer2', function(){
      $('.answer2').effect('shake', 'slow').css('background-color','red');
    });


  $('body').on('click', '.answer1', function() {
      $('.answer1').css('background-color','green');
      $('.side1').hide(200);
      $('.side2').show(200);
  })

  for (var i = 1; i < 4; i++) {
    console.log(i);
  };


    

});