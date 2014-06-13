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

    // ***********************************************

        // loadpage initializes the page with nextCard(0)
        function loadPage () {
            nextCard(0);
        }

        // The nextCard function takes the parameter count, adds 1
        // to the card count and selects the appropriate card. 
        var nextCard = function (count) {
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

    // ***********************************************
        // randomly select .answer1 or .answer2 to place the 
        // right answer content.
        function placeAnswerOn (card) {

            //determine wrong_answer by selecting a random 
            // right answer from the same deck as long as it is not 
            // the same answer

            var createWrongAnswer = function () {
                wrong_answer = deck[Math.floor(Math.random() * max)].right_answer;
                // console.log(wrong_answer);
                // console.log(card.right_answer);
                    if (wrong_answer == card.right_answer ) {
                        createWrongAnswer();
                    }
                }
            createWrongAnswer();

            if (headsOrTails<0.5) {
                // set the right answer to .answer1
                // set the wrong answer to .answer2
                $('.answer1').html(card.right_answer);
                r_answerClicked = '.answer1';
                $('.answer2').html(card.wrong_answer);
                w_answerClicked = '.answer2';
            } else {
                // set the right answer to .answer2
                // set the wrong answer to .answer1
                $('.answer2').html(card.right_answer);
                r_answerClicked = '.answer2';
                $('.answer1').html(card.wrong_answer);
                w_answerClicked = '.answer1';
            }
            clickedThisButton(r_answerClicked,w_answerClicked);
        }

    // ***********************************************

        $('body').on('click', '.go', function() {
            if (count == max -1) {
              count = 0;
            } else {
              count++;
            }
            nextCard(count);
        });

        var arrPushOne = function() {
                answerArray.push(1);
        }

        var arrPushZero = function() {
            answerArray.push(0);
        }

    function clickedThisButton (r_answerClicked, w_answerClicked) {
        console.log('Right answer is ' + r_answerClicked + '-- The Wrong answer is ' + w_answerClicked);

            $(r_answerClicked).one('click', function(){
                arrPushOne();
                console.log(answerArray);
            });

            $(w_answerClicked).one('click', function(){
                arrPushZero();
                console.log(answerArray);
            });

    }

        loadPage();

    });

})(jQuery);