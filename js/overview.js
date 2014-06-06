$(function() {

  // create an empty card object
  var card = {};


  // set variables and collect their values
  $(".add").on("click", function() {
    $(".fc_front").val("");
    $(".fc_back").val("");

    var fc_front_text = $(".fc_front").val();
    var fc_back_text = $(".fc_back").val();


    // Print a list item with the following text and variables
      // make a PLAY button and stick it on the ass-end of the class='container'
    $("<li>").text("Front: [" + fc_front_text + "] " + "Back: [" + fc_back_text + "] ")
      .appendTo(".container");

  });




    //When you click on the button run this function
      //open the linked page (flashcard.html)
    $(".container").on("click", "button", function() {
        window.location.href = "flashcard.html";
    });


    //Run this function when you click on the class='test'
      // SUPPOSEDLY you can load an image file and place it in the 
      // specified area...
    // $(".test").on("click", function() {
    //   var reader = new FileReader();
    //   reader.onload = (function(e){
    //     var img = new Image();
    //     img.src = e.target.result;
    //     var c = $("#canvas");
    //     var ctx = c[0].getContext("2d");
    //     ctx.drawImage(img, 0,0);
    //   });

    //   reader.readAsDataURL(document.getElementById('addImg_front').files[0]);

    //   // $("#addImg_front").files[0].appendTo($(".fc_front"));
    //   $(".fc_front").css("background-image", document.getElementById('addImg_front').files[0]);
      
    // });

    $( document ).ready(function() {
      // Handler for .ready() called.

      try {
        $("#uploadPreview").css("background-image", 'url(' + "user_files/foo.gif" + ')');
      } catch(err) {
        console.log(err);
      }

      console.log("%cThank you!"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:10em");

    });

    // $('[name="submit"]').on("click", function() {
    //     $.ajax({
    //           type: "POST",
    //           url: "upload.php"
    //       })
    //       .done(function( msg ) {
    //         alert( "Data Saved: " + msg );
            
    //       });
    // })


    $(".color").on("change", function() {
      $(".fc_front").css("background-color", "#" + this.color.toString());
    })

});