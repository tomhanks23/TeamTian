// hide all flashcards except the first one
$(function() {

  // console.log(jsonObj);
  // the count value represents the first flashcard
  var count = 0,
          answerArray = [],
          min = 0,
          max = Object.keys(deck).length;
        // console.log("the deck length is ...." + max);


  // The nextCard function takes the parameter count, adds 1
  // to the card count and selects the appropriate card. 
  var nextCard = function (count) {

        // var card = deck["card"+newCount];
        var card = deck[count];
        // console.log(count);
        // console.log(card.back_image);

        $('.side2').hide();
        $('.side1').show();

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

        // --------------------------------------
        $(function() {
            var headsOrTails = Math.random();
            
            // randomly select .answer1 or .answer2 to place the 
            // right answer content.
            if (headsOrTails<0.5) {
              // set the right answer to .answer1
              // set the wrong answer to .answer2
              $('.answer1').html(card.right_answer);
              var r_answerClicked = '.answer1';
              $('.answer2').html(card.wrong_answer);
              var w_answerClicked = '.answer2';

            } else {

              // set the right answer to .answer2
              // set the wrong answer to .answer1
              $('.answer2').html(card.right_answer);
              var r_answerClicked = '.answer2';
              $('.answer1').html(card.wrong_answer);
              var w_answerClicked = '.answer1';

            }

            // ---------------------------------------
            console.log('The right answer is .... ' + r_answerClicked);
            // $('div').one('click', w_answerClicked , function(){
            //   // $(w_answerClicked).effect('shake', 'slow');
            //   answerArray.push(0);
            //   console.log(answerArray);
            // });

            $(w_answerClicked).click(function(){
              $(w_answerClicked).effect('shake', 'slow');
              answerArray.push(0);
              console.log(answerArray);
            });

            $(r_answerClicked).click(function(){
              answerArray.push(1);
              console.log(answerArray);
              //$('.side1').hide(200);
              //$('.side2').show(200);
            });

          });

        // ----------------------------------------
  
  };

  $('body').on('click', '.go', function() {
    if (count == max -1) {
      count = 0;
    } else {
      count++;
    }
      
    nextCard(count);

  });

  nextCard(0);


});