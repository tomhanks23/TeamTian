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
        window.location.href = "fc_ctrl.php";
    });


    // submit the form when image is selected
    // front
    $('.fc_front #imgform_front').on('change',function(){
      $('.fc_front #imgform_front').ajaxForm({target: '.fc_front #view',
       beforeSend: function(){
        $('.fc_front #imageloader').show();
        $('.fc_front #view').html('');

       },success: function(){ 
        $('.fc_front #imageloader').hide();

       },error: function() {
        $('.fc_front #imageloader').hide();

       }
      }).submit();
     });

    // back
    $('.fc_back #imgform_front').on('change',function(){
      $('.fc_back #imgform_front').ajaxForm({
        target: '.fc_back #view',
        beforeSend: function(){
          $('.fc_back #imageloader').show();
          $('.fc_back #view').html('');

         },success: function(){ 
          $('.fc_back #imageloader').hide();

         },error: function() {
          $('.fc_back #imageloader').hide();

         }
      }).submit();
     });

    $( document ).ready(function() {
      // Handler for .ready() called.

      console.log("%cThank you!"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");

    });


    $('[name="submit"]').on("click", function() {

        // return false;

    })


    $("#front_color").on("change", function() {
      $(".fc_front").css("background-color", "#" + this.color.toString());
    });

    $("#back_color").on("change", function() {
      $(".fc_back").css("background-color", "#" + this.color.toString());
    });

    $(".add").on("click", function() {
      // get the item info prepared
      var flashcard_deck_id = 100;
      var user_id = 100;
      var front_text = $(".fc_front textarea").val();
      var back_text = $(".fc_back textarea").val();
      var front_image =$(".fc_front #view img").prop('src');
      var back_image = $(".fc_back #view img").prop('src');
      var front_bg_color = $(".fc_front").css("background-color");
      var back_bg_color = $(".fc_back").css("background-color");
      var right_answer = $("#right_answer").val();


      $.ajax({
          url: "./savecard.php",
          type: "POST",
          dataType: "json",
          cache: false,
          data: {
            flashcard_deck_id: flashcard_deck_id,
            user_id: user_id,
            front_text: front_text,
            back_text: back_text,
            front_image: front_image,
            back_image: back_image,
            front_bg_color: front_bg_color,
            back_bg_color: back_bg_color,
            right_answer: right_answer
          },
          success: function(data) {
             1;
          },
          error: function(a, b, c) {
            console.log(b);
            console.log(c);
          }
      });

      return false;

    })

});