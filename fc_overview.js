$(function() {

    var card = {};


    $(".add").on("click", function() {
        $(".fc_front").val("");
        $(".fc_back").val("");
    });


    $(".submit").on("click", function() {
        

        var fc_front_text = $(".fc_front").val();
        var fc_back_text = $(".fc_back").val();
        
        $("<li>").text("Front: [" + fc_front_text + "] " + "Back: [" + fc_back_text + "] ")
                   .append("<button>Play</button")
                   // .append("<button>Del</button")
                   // .addClass(item)
                   .appendTo(".container");

    });

    $(".container").on("click", "li button", function() {
        window.location.href = "flashcard.html";
    });
})