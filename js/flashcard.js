// hide all flashcards except the first one
$(function() {

  // console.log(jsonObj);
  // the count value represents the first flashcard
  var count = 0;

  // The nextCard function takes the parameter count, adds 1
  // to the card count and selects the appropriate card. 
  var nextCard = function (count) {

        // var card = deck["card"+newCount];
        var card = deck[count];
        console.log(count);
        console.log(card.back_image);

        $('.side2').hide();
        $('.side1').show();

        $('div').on('click', '.answer2', function(){
          $('.answer2').effect('shake', 'slow');
        });

        $('body').on('click', '.answer1', function() {
          $('.side1').hide(200);
          $('.side2').show(200);
        });

        $('  .side1   ').html(
           '   <p class="side1-text">   '
          + card.front_text
          + '   </p><img class="big" src="   '
          + card.front_image
          + '  " alt=""></div>    '
          );

        $('.side2').html('<img class="small" src="'
          + card.back_image
          + '  " alt="">'
          + ' <div><p class="side2-text">'
          + card.back_text
          + '</p></div> ' 
          );

        $('.answer1').html(card.right_answer);
        $('.answer2').html(card.wrong_answer);

        var newCount = count + 1;
  };

  $('body').on('click', '.go', function() {
    count++;
    nextCard(count);

  });

  nextCard(0);


});