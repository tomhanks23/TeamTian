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


    $(".test").on("click", function() {

      var reader = new FileReader();

      reader.onload = (function(e){
        var img = new Image();
        img.src = e.target.result;
        var c = $("#canvas");
        var ctx = c[0].getContext("2d");
        ctx.drawImage(img, 0,0);
      });

      reader.readAsDataURL(document.getElementById('addImg_front').files[0]);

      // $("#addImg_front").files[0].appendTo($(".fc_front"));
      $(".fc_front").css("background-image", document.getElementById('addImg_front').files[0]);
      
    })
})