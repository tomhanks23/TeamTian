// hide all flashcards except the first one
$(function() {
//  display each card side 1 first, one after the next. 
// console.log(deck.card1.side2_text);

// for ( var key in deck) {
//     var card = deck[key];
//    for ( var property in card) {
//     console.log(card[property]);
//    };
// };
var count = 0;
  var nextCard = function (count) {
        var newCount = count + 1;
        var card = deck["card"+newCount];
        console.log(newCount);

        $('.side2').hide();
        $('.side1').show();

        $('div').on('click', '.answer2', function(){
          $('.answer2').effect('shake', 'slow');
        });

        $('body').on('click', '.answer1', function() {
            $('.side1').hide(200);
            $('.side2').show(200);
        })

        $('  .side1   ').html(
           '   <p class="side1-text">   '
          + card.side1_text
          + '   </p><img class="big" src="   '
          + card.image_link1
          + '  " alt=""></div>    '
          );

        $('.side2').html('<img class="small" src="'
          + card.image_link2
          + '  " alt="">'
          + ' <div><p class="side2-text">'
          + card.side2_text
          + '</p></div> ' 
          );

        $('.answer1').html(card.right_answer);
        $('.answer2').html(card.wrong_answer);
  };

  $('body').on('click', '.go', function() {
    count++;
    nextCard(count);
  });

  nextCard(0);

});