$(function(){

    //homepage card flip demo
    // $("#flipbox").flip({
    // direction:'tb'
    // })


//-----------------Register Validation----------
    function validate(form){
        var firstName = $("[name='firstName']").val();
        var lastName = document.register.lastName.value;
        var email = document.register.email.value;
        var password = document.register.password.value;
        var errors = [];

        if(!checkLength(firstName)){
            errors.push("You must enter a first name.");
        }
        if(!checkLength(lastName)){
            errors.push("You must enter a last name.");
        }
        if(!checkLength(email)){
            errors.push("You must enter an email.");
        }
        if(!checkLength(password)){
            errors.push("You must enter a password.");
        }

        if(errors.length > 0){
            reportErrors(errors);
            return false;
        }

        function checkLength(text, min, max){
            min = min || 1;
            max = max || 50;
            if (text.length < min || text.length > max){
                return false;
            }
            return true;
        }

        function reportErrors(errors){
            var msg = "There were some problems...\n";
            var numError;
            for(var i=0; i<errors.length; i++){
                numError = i + 1;
                msg +="\n" + numError + "." + errors[i];
            }
            alert(msg);
        }
    }

    $(".submit").on('click', function(){
        validate(this);
    });
//-----------------End Reigster Validation------    


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