<?php 

session_start();

if (!is_numeric($_SESSION['user_id'])) {
  die('Youre not logged in');
}

// store session data
$user_id = $_SESSION['user_id'];





?>


<!DOCTYPE html>
<html>
<head>
  <title>Fun Flash!</title>
    <link href='http://fonts.googleapis.com/css?family=Graduate' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/overview-styles.css">
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/overview.js"></script>
    <script src="js/jscolor/jscolor.js"></script>
    <script src="js/jquery.form.js"></script>
</head>

<body>

  <?php include('header.php'); ?>
 
  <!-- user_id -->
  <input type="hidden" id="user_id" value="<?php echo $user_id ?>">

  <!-- Card Creator Section with Drop Down Menu -->
  <div class="left">

    Choose your deck:
    <select name="cardDeck" class="cardDeck">
      <?php 
        include ('getdeck.php');
       ?>
    </select>
    <br>
    Card name(Right answer):
    <input type="input" id="right_answer" value="" style="width:90px">

  <!-- Text Area Card Content -->
    <!-- <textarea class="fc_front" rows="2" cols="20" placeholder="Front text."></textarea>
    <canvas id="canvas" style="border:1px solid black; height: 0px; width: 0px;"></canvas> -->

    <div class="fc_front">
      <form action="upload.php" id="imgform_front" method="post" enctype="multipart/form-data">
        <div id="imageloader" style="height:auto">
          <img src="http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg" style="height:100px; width:160px">
        </div>
        <div id="view" style="height:auto"></div>
        <input type="file" name="file" id="file" style="width:90px"><br>
      </form>
      <textarea rows="2" cols="20" placeholder="Front text." name="fc_front_text"></textarea>
    </div>

    Background color:
    <input class="color" id="front_color" value="" style="width:90px"><br>

    <div  class="fc_back">
      <form action="upload.php" id="imgform_front" method="post" enctype="multipart/form-data">
        <div id="imageloader" style="height:auto">
          <img src="http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg" style="height:100px; width:160px">
        </div>
        <div id="view" style="height:auto"></div>
        <input type="file" name="file" id="file" style="width:90px"><br>
      </form>
      <textarea rows="2" cols="20" placeholder="Back text." name="fc_back_text"></textarea>
    </div>

    Background color:
    <input class="color" id="back_color" value="" style="width:90px"><br>

    <button class="add" type="submit">Add New Card</button>
    
    <!-- <button class="submit">Done</button> -->
  </div>


  <div class="container">
    <h2>
      Your Deck
      <button>PLAY</button>
    </h2>
  </div>

<<<<<<< HEAD
=======


  </div>
  </div>
>>>>>>> 6ec3083e02e5aa41ab1145e1e87d9dff0acfc542

</body>

</html>