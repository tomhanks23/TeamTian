<?php
  
include('upload.php');

?>


<!DOCTYPE html>
<html>
<head>
  <title></title>
    <link href='http://fonts.googleapis.com/css?family=Unkempt:700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/overview-styles.css">
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/overview.js"></script>
    <script src="js/jscolor/jscolor.js"></script>
</head>

<body>
  <!-- link to flashcard.html -->
  <!--     Title  -->
  <div class="cardCreator">
    <h1 id="h1">
        Card Creator
    </h1>
    <script src="js/rainbow.js">
    </script>
  </div>

  <!-- Card Creator Section with Drop Down Menu -->
  <div class="left">
      <div>
      Choose your deck:
        <select name="cardDeck">
          <?php 
            include ('getdeck.php');
           ?>
        </select>
      </div>
  <!-- Text Area Card Content -->
    <!-- <textarea class="fc_front" rows="2" cols="20" placeholder="Front text."></textarea>
    <canvas id="canvas" style="border:1px solid black; height: 0px; width: 0px;"></canvas> -->

    <form action="" method="post" enctype="multipart/form-data">
    <div class="fc_front">

      

      <?php echo $img; ?>
      <textarea rows="2" cols="20" placeholder="Front text." name="fc_front_text"></textarea>
    </div>

    <input class="color" value=""><br>
    


      <label for="file">Filename:</label>
      <input type="file" name="file" id="file"><br>
      <input type="submit" name="submit" value="Submit">


    <!-- <button class="addImg_front">Add Image</button> -->
    <br>
    <!-- <a href="#" class="test">update image</a> -->
    <br>
    <textarea class="fc_back" rows="2" cols="20" placeholder="Back text." name="fc_back_text"></textarea>
    <!-- <button class="addImg_back">Add Image</button> --><br>
    <button class="add" type="submit">Add New Card</button>
    <!--<?php 

        print_r($_POST);
        // echo "back_text : ".$_POST['back_text']."<br>";
      ?>-->

    </form>
    <!-- <button class="submit">Done</button> -->
  </div>
  <!-- Card Deck-->
  <div>
    <div class="container">
      <h1>
        Your Deck
        <button>PLAY</button>
      </h1>
    </div>
  </div>

</body>

</html>