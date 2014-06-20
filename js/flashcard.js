;var App = App || {};

(function($){

    // hide all flashcards except the first one
    $(function() {
        var count = 0,
        totalCount = 0,
        answerArray = [],
        wrong_answer,
        card,
        min = 0,
        r_answerClicked,
        w_answerClicked,
        max = Object.keys(deck).length;

        // activated when the right answer is clicked
        function answerPerformanceArr(n) {
            return answerArray.push(n);
        }

        function clickedThisButton (r_answerClicked, w_answerClicked) {
            // remove all previous click events from these elements 
            $(r_answerClicked).off();
            $(w_answerClicked).off();
            showAnswerButtons();

            $(r_answerClicked).click( function(){
                setCard();
                answerPerformanceArr(1);
            });

            $(w_answerClicked).click( function(){
                $(this).effect('shake', 400, function() {
                setCard();
                answerPerformanceArr(0);
                });
            });
            // console.log(answerArray);
        }

        function createWrongAnswer() {
            wrong_answer = deck[Math.floor(Math.random() * max)].right_answer;
                if (wrong_answer == card.right_answer ) {
                    createWrongAnswer();
                }
            }

        function createModalPopup () {

            if (totalCount == 4) {
                $('#modalBadge').bPopup({
                    position: [0,100],
                    autoClose: [5000],
                })
                    .load('includes-fc/modal.php .modalPopUp1');
            }

            if (totalCount == 7) {
                $('#modalBadge').bPopup({
                    position: [0,100],
                    autoClose: [5000],
                })
                    .load('includes-fc/modal.php .modalPopUp2');
            }



        }

        // this is fired on page load and ...
        // loadpage initializes the page with nextCard(0)
        function loadPage() {
            nextCard(0);
        };

        function nextCard(count) {
            // console.log(deck);
            card = deck[count];
            $('.fc-side2').hide();
            $('.fc-side1').show();

            $('  .fc-side1   ').html(
               '   <p class="fc-side1-text">   '
              + card.front_text
              + '   </p><img class="fc-big" src="   '
              + card.front_image
              + '  " alt=""></div>    '
              );

            $('.fc-side2').html('<img class="fc-small" src="'
              + card.back_image
              + '  " alt="">'
              + ' <div><p class="fc-side2-text">'
              + card.back_text
              + '</p></div> ' 
              );

            $('.fc-motivation').hide();

            placeAnswerOn(card);
            totalCount++
            console.log('totalCount is ' + totalCount);
            createModalPopup();
          };

        function placeAnswerOn(card) {
            createWrongAnswer();
            headsOrTails = Math.random();
            // console.log(headsOrTails);

            if (headsOrTails<0.5) {
                // set the right answer to .answer1
                // set the wrong answer to .answer2
                $('.fc-answer1').html(card.right_answer);
                r_answerClicked = '.fc-answer1';
                $('.fc-answer2').html(wrong_answer);
                w_answerClicked = '.fc-answer2';
            } else {
                // set the right answer to .answer2
                // set the wrong answer to .answer1
                $('.fc-answer2').html(card.right_answer);
                r_answerClicked = '.fc-answer2';
                $('.fc-answer1').html(wrong_answer);
                w_answerClicked = '.fc-answer1';
            }

            clickedThisButton(r_answerClicked,w_answerClicked);
        }

        function setCard () {
            $('.fc-side1').hide(400);
            $('.fc-side2').show(400);
            $(r_answerClicked).hide(400);
            $(w_answerClicked).hide(400, function() {
                $('.fc-motivation').slideDown(400).text(card.right_answer);
            });
        }

        function showAnswerButtons () {
            $(r_answerClicked).show();
            $(w_answerClicked).show();
        }

        $('.fc-motivation').click( function() {
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