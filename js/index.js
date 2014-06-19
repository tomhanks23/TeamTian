$(function(){

    //homepage card flip demo
    // $("#flipbox").flip({
    // direction:'tb'
    // })

//-----------------Login/Register Modal Windows--------
    $('.registerButton').on('click', function(){
        $('.overlay').css('display','inline');
        $('.registerModal').show();
        console.log("register button clicked");  
    });
    $('.close').on('click', function(){
        console.log("close clicked");
        $('.overlay').css('display','none');
        $('.registerModal').hide();
        return false; 
     });

    // $(".Register").on('submit', function(){
        // $(document).append(<div><?php echo $errors ?></div>);
    // }
    



//-----------------Register Validation----------
    function validateRegister(form, evt){
        var firstName = $("[name='firstName']").val();
        var lastName = document.register.lastName.value;
        var email = document.register.email.value;
        var password = document.register.password.value;
        var password2 = document.register.password2.value;
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

        if(password != password2){
            errors.push("your passwords don't match");
        }

        if(errors.length > 0){
            reportErrors(errors);
            evt.preventDefault();
        }

        function checkLength(text, min, max){
            min = min || 2;
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

    $(".Register").on('submit', function(evt){
        var valid= validateRegister(this, evt);
         if(!valid){
            return false;
        }
    });
//----------------Log In Validation-------------    
function validateLogin(login, evt){
        var email  = $('.logIn input.email').val();
        var password = $('.logIn input.password').val();
        var errors = [];

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
        return true;

        function checkLength(text, min, max){
            if (text == undefined) {
                return false; 
            }
            min = min || 5;
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

    $(".logIn").on('submit', function(){
        var valid = validateLogin(this);

        if(!valid){
            return false;
        }

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
        back : 'å–µ'
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