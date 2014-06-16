;var App = App || {};

(function($){

    // hide all flashcards except the first one
    $(function() {
        var count = 0,
        answerArray = [],
        wrong_answer,
        card,
        min = 0,
        r_answerClicked,
        w_answerClicked,
        headsOrTails = Math.random(),
        max = Object.keys(deck).length;


        // loadpage initializes the page with nextCard(0)
        function loadPage() {
            nextCard(0);
        };

        // activated when the right answer is clicked
        function arrPushOne() {
            answerArray.push(1);
        }

        // activated when the wrong answer is clicked
        function arrPushZero() {
            answerArray.push(0);
        }

        // this is fired on page load and ...
        function clickedThisButton (r_answerClicked, w_answerClicked) {
            //console.log('Right answer is ' + r_answerClicked + '-- The Wrong answer is ' + w_answerClicked);

                $(r_answerClicked).click( function(){
                    $(this).css('background-color', 'green');
                    $('.side1').hide(300);
                    $('.side2').show(300);
                    // arrPushOne();
                    // console.log(answerArray);
                });

                $(w_answerClicked).click( function(){
                    $(this).css('background-color', 'red');
                    // arrPushZero();
                    // console.log(answerArray);
                });

        }

        function nextCard(count) {
            card = deck[count];
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

            placeAnswerOn(card);

          };

        function createWrongAnswer() {
            wrong_answer = deck[Math.floor(Math.random() * max)].right_answer;
            // console.log(wrong_answer);
            // console.log(card.right_answer);
                if (wrong_answer == card.right_answer ) {
                    createWrongAnswer();
                }
            }

        function placeAnswerOn (card) {

            createWrongAnswer();

            if (headsOrTails<0.5) {
                // set the right answer to .answer1
                // set the wrong answer to .answer2
                $('.answer1').html(card.right_answer);
                r_answerClicked = '.answer1';
                $('.answer2').html(wrong_answer);
                w_answerClicked = '.answer2';
            } else {
                // set the right answer to .answer2
                // set the wrong answer to .answer1
                $('.answer2').html(card.right_answer);
                r_answerClicked = '.answer2';
                $('.answer1').html(wrong_answer);
                w_answerClicked = '.answer1';
            }

            clickedThisButton(r_answerClicked,w_answerClicked);
        }


        // $('body').on('click', '.go', function() {
            $('.go').click( function() {
                $('.answer1').css('background-color', 'white');
                $('.answer2').css('background-color', 'white');
            if (count == max -1) {
              count = 0;
            } else {
              count++;
            }
            nextCard(count);
        });

        loadPage();

    });




})(jQuery);