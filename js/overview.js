$(function() {

  // set deck_id to session
  $(".cardDeck").on("change", function() {
    
    if ( $(".cardDeck").find(':selected').val() == "-" ) {
      clearContainer();
      return;
    }

    $.ajax({
          url: "./savedeckid.php",
          type: "POST",
          dataType: "json",
          cache: false,
          data: {
            deck_id: $(".cardDeck").find(':selected').val()
          },
          success: function(data) {
              clearContainer();
              for (i in data) {
                 fillContainer(data[i]);
              }
          },
          error: function(a, b, c) {
            console.log(b);
            console.log(c);
          }
        });
  });

  var clearContainer = function() {
      $(".container li").remove();
  }

  // set variables and collect their values
  var fillContainer = function(card) {

    var right_answer = card.right_answer;

    var front_bg_color = card.front_bg_color;
    var back_bg_color = card.back_bg_color;

    var flashcard_id = card.flashcard_id;

    $("<li style='margin:4px'>").append("<div style=\"background:" 
                                          // + front_bg_color + ";" 
                                          + "linear-gradient(to right,"
                                          +  front_bg_color 
                                          + "0%, "
                                          +  back_bg_color
                                          + " 100%);"
                                          + "margin-left: 20px;"
                                          + "height: 38px;"
                                          + "border-radius: 5px;"
                                          + "width: 380px;\">"
                                          + right_answer 
                                          + " <button style=\"float: right;\" "
                                          + "class='" 
                                          + flashcard_id 
                                          + "'>Delete</button>"
                                          + "</div>"
                                          )
               .appendTo(".container");
  }  

    //When you click on the button run this function
      //open the linked page (flashcard.html)
    $(".container h2").on("click", "button", function() {
        window.location.href = "fc_ctrl.php";
    });

    // delete item
    $(".container").on("click", "li div button",  function(e) {
      
      var flashcard_id = $(this).attr("class");

      $(this).parent().parent().remove();

      e.stopPropagation();

      $.ajax({
          url: "./deleteitem.php",
          type: "POST",
          dataType: "json",
          cache: false,
          data: {
            flashcard_id: flashcard_id
          },
          success: function(data) {
             1;
          },
          error: function(a, b, c) {
            console.log(b);
            console.log(c);
          }
        });
    });

    $("#front_link").on("blur", function() {
      var link = $(this).val();
      if (link) {
        $('.fc_front #imgform_front img').attr("src", link);

      } else {
        $('.fc_front #imgform_front img').attr("src", "http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg");
      }
    })

    $("#back_link").on("blur", function() {
      var link = $(this).val();
      if (link) {
        $('.fc_back #imgform_front img').attr("src", link);

      } else {
        $('.fc_back #imgform_front img').attr("src", "http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg");
      }
    })

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

      console.log("%cThank you!"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");

    });


    $("#front_color").on("change", function() {
      $(".fc_front").css("background-color", "#" + this.color.toString());
    });

    $("#back_color").on("change", function() {
      $(".fc_back").css("background-color", "#" + this.color.toString());
    });

    $(".add").on("click", function() {

      if ($(".cardDeck").find(':selected').val() == "-") {
        alert("Please choose your deck, honey!");
        $(".cardDeck").focus();
        return;
      }

      if (!$("#right_answer").val()) {
        alert("Please input cart name, honey!");
        $("#right_answer").focus();
        return;
      }

      // get the item info prepared
      var flashcard_deck_id = $(".cardDeck").find(':selected').val();
      var user_id = $("#user_id").val();
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
            var flashcard_id = data;
            addItem(flashcard_id);
          },
          error: function(a, b, c) {
            console.log(b);
            console.log(c);
          }
      });

      return false;

    })

  
  // set variables and collect their values
  var addItem = function(flashcard_id) {

    var right_answer = $("#right_answer").val();

    var front_bg_color = $(".fc_front").css("background-color");
    var back_bg_color = $(".fc_back").css("background-color");

    if (!right_answer) {
      alert("Please input cart name, honey!");
      $("#right_answer").focus();
    } else {

      $("<li style='margin:4px'>").append("<div style=\"background:" 
                                          // + front_bg_color + ";" 
                                          + "linear-gradient(to right,"
                                          +  front_bg_color 
                                          + "0%, "
                                          +  back_bg_color
                                          + " 100%);"
                                          + "margin-left: 20px;"
                                          + "height: 38px;"
                                          + "border-radius: 5px;"
                                          + "width: 380px;\">"
                                          + right_answer 
                                          + " <button style=\"float: right;\" "
                                          + "class='" 
                                          + flashcard_id 
                                          + "'>Delete</button>"
                                          + "</div>"
                                          )
               .appendTo(".container");
    }

  }

  // click on the container item
  $(".container").on("click", "li", function() {
    var flashcard_id = $(this).find("button").attr("class");
    $(".update").prop("disabled", false);

    $.ajax({
      url: "./getcard.php",
        type: "POST",
        dataType: "json",
        cache: false,
        data: {
          flashcard_id: flashcard_id
        },
        success: function(data) {

          $(".fc_front").css("background-color", data.front_bg_color);
          $(".fc_back").css("background-color", data.back_bg_color);
          
          $('.fc_front #imgform_front img').attr("src", data.front_image);
          $('.fc_back #imgform_front img').attr("src", data.back_image);

          $('.fc_front textarea').val(data.front_text);
          $('.fc_back textarea').val(data.back_text);

          $("#right_answer").val(data.right_answer);
          $('#cur_fl_id').val(data.flashcard_id);

        },
        error: function(a, b, c) {
          console.log(b);
          console.log(c);
        }
    })
  })  

  $(".update").on("click", function() {
    $(this).prop("disabled", true);
    
    var flashcard_id = $('#cur_fl_id').val();
    var flashcard_deck_id = $(".cardDeck").find(':selected').val();
    var user_id = $("#user_id").val();
    var front_text = $(".fc_front textarea").val();
    var back_text = $(".fc_back textarea").val();
    var front_image =$(".fc_front #view img").prop('src');
    var back_image = $(".fc_back #view img").prop('src');
    var front_bg_color = $(".fc_front").css("background-color");
    var back_bg_color = $(".fc_back").css("background-color");
    var right_answer = $("#right_answer").val();

    $.ajax({
      url: "./updatecard.php",
        type: "POST",
        dataType: "json",
        cache: false,
        data: {
          flashcard_id: flashcard_id,
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

          modifyItem(data);

        },
        error: function(a, b, c) {
          console.log(b);
          console.log(c);
        }
    })

  })

  // set variables and collect their values
  var modifyItem = function(flashcard_id) {

    var right_answer = $("#right_answer").val();

    var front_bg_color = $(".fc_front").css("background-color");
    var back_bg_color = $(".fc_back").css("background-color");

    if (!right_answer) {
      alert("Please input cart name, honey!");
      $("#right_answer").focus();
    } else {

      $(".container li").find("button").attr("class", flashcard_id).parent().parent()[0].remove();

      $("<li style='margin:4px'>").append("<div style=\"background:" 
                                          // + front_bg_color + ";" 
                                          + "linear-gradient(to right,"
                                          +  front_bg_color 
                                          + "0%, "
                                          +  back_bg_color
                                          + " 100%);"
                                          + "margin-left: 20px;"
                                          + "height: 38px;"
                                          + "border-radius: 5px;"
                                          + "width: 380px;\">"
                                          + right_answer 
                                          + " <button style=\"float: right;\" "
                                          + "class='" 
                                          + flashcard_id 
                                          + "'>Delete</button>"
                                          + "</div>"
                                          )
               .appendTo(".container");
    }

  }

});