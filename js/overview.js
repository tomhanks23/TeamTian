$(function() {


  // create an empty card object
  var card = {};


  // select class-'add' and run this function
    // GET the class='fc_front' value
    // GET the class='.fc_back Value'
  $(".add").on("click", function() {
    $(".fc_front").val("");
    $(".fc_back").val("");
  });


  // select class='submit' and run this function
    // set variables and collect their values
  $(".submit").on("click", function() {
    var fc_front_text = $(".fc_front").val();
    var fc_back_text = $(".fc_back").val();


    // Print a list item with the following text and variables
      // make a PLAY button and stick it on the ass-end of the class='container'
    $("<li>").text("Front: [" + fc_front_text + "] " + "Back: [" + fc_back_text + "] ")
      .append("<button>Play</button")
      .appendTo(".container");
    });



    //When you click on the list item button run this function
      //open the linked page (flashcard.html)
    $(".container").on("click", "li button", function() {
        window.location.href = "flashcard.html";
    });


    //Run this function when you click on the class='test'
      // SUPPOSEDLY you can load an image file and place it in the 
      // specified area...
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
      
    });

});