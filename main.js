$(function(){
    // you're hiding the flash card.
    $('.back').hide();

    // 
    $('body').on('click', '.front', function() {
        $(this).hide(200);
        $('.back').show(200);
    })


    $('body').on('click', '.back', function() {
        $(this).hide(200);
        $('.front').show(200);
    })

    var FlashCard = function(settings) {
        this.defaltSetting = $.extend({
            id : 0,
            front : '',
            back : ''
        }, settings); 
    }

    var flashCard1 = new FlashCard({
        id : 1,
        front : 'cat',
        back : '喵'
    });

    // console .log(flashCard1);


    var fcContainer = {};

    fcContainer.flashCard1 = flashCard1;
    // console.log(fcContainer);

    $('body').on('click', '.add', function() {
        console.log("create a new card.");
    });

    $('body').on('click', '.submit', function() {
        console.log("submit and close the form.");
    });
});