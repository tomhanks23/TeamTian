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
        max = Object.keys(deck).length;

        // this is fired on page load and ...
        // loadpage initializes the page with nextCard(0)
        function loadPage() {
            nextCard(0);
        };

        // activated when the right answer is clicked
        function answerPerformanceArr(n) {
            return answerArray.push(n);
        }

        function nextCard(count) {
            console.log(deck);
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

            $('.motivation').hide();

            placeAnswerOn(card);

          };

        function createWrongAnswer() {
            wrong_answer = deck[Math.floor(Math.random() * max)].right_answer;
                if (wrong_answer == card.right_answer ) {
                    createWrongAnswer();
                }
            }

        function placeAnswerOn(card) {

            createWrongAnswer();
            headsOrTails = Math.random();
            console.log(headsOrTails);


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

        function setCard () {
            $('.side1').hide(300);
            $('.side2').show(300);
            $(r_answerClicked).hide();
            $(w_answerClicked).hide();
            $('.motivation').show();
        }

        function showAnswerButtons () {
            $(r_answerClicked).show();
            $(w_answerClicked).show();
        }

        function clickedThisButton (r_answerClicked, w_answerClicked) {
            // remove all previous click events from these elements 
            $(r_answerClicked).off();
            $(w_answerClicked).off();
            showAnswerButtons();

                $(r_answerClicked).click( function(){
                    $('.motivation').css('background', 'url(green-check.png) no-repeat center center fixed');
                    setCard();
                    answerPerformanceArr(1);
                });

                $(w_answerClicked).click( function(){
                    $('.motivation').css('background', 'url(redx.png) no-repeat center center fixed');
                    setCard();
                    answerPerformanceArr(0);
                });
            console.log(answerArray);
        }

        // $('body').on('click', '.go', function() {
            $('.motivation').click( function() {
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