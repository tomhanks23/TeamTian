<?php 
// error_reporting(E_ALL);
// ini_set('display_errors', 'on');
// session_start();
// include_once("user.php");
// if (!is_numeric($_SESSION['user_id'])) {
//   die('Youre not logged in');
// }

// // store session data
// $user_id = $_SESSION['user_id'];
// $user = getUserById($user_id);
// $first_name= $user['first_name'];
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
  
    <!-- user_id -->
  <input type="hidden" id="user_id" value="<?php echo $user_id ?>">
  <div class="greeting"> Welcome <?php echo $first_name; ?></div>

  <?php include('header.php'); ?>

  <div class="page">

    <div class="mediaObj">

      <!-- Card Creator Section with Drop Down Menu -->
      <div class="left">

        <h4>Choose your deck:</h4>
        <select name="cardDeck" class="cardDeck">
          <?php 
            include ('getdeck.php');
           ?>
        </select>
        <br>
        

      <!-- Text Area Card Content -->
        <!-- <textarea class="fc_front" rows="2" cols="20" placeholder="Front text."></textarea>
        <canvas id="canvas" style="border:1px solid black; height: 0px; width: 0px;"></canvas> -->

        <div class="fc_front">
          <h5>Front of Card</h5>

          <form action="upload.php" id="imgform_front" method="post" enctype="multipart/form-data">
            <div id="imageloader" style="height:auto">
              <img src="http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg" style="height:100px; width:160px">
            </div>
            <div id="view" style="height:auto"></div>
            <input type="file" name="file" id="file">
          </form>
            <input type="input" id="front_link" style="width:130px" placeholder="Page link.">
          <textarea rows="2" cols="20" placeholder="What's this?" name="fc_front_text"></textarea>

          Background color:
          <input class="color" id="front_color" value=""><br>

        </div>
        
        <p>Card name(Right answer):</p>
        <input type="input" id="right_answer" placeholder="apple" value="">

        <div  class="fc_back">
          <h5>Back of Card</h5>

          <form action="upload.php" id="imgform_front" method="post" enctype="multipart/form-data">
            <div id="imageloader" style="height:auto">
              <img src="http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg" style="height:100px; width:160px">
            </div>
            <div id="view" style="height:auto"></div>
            <input type="file" name="file" id="file" style="width:90px"><br>
          </form>
            <input type="input" id="back_link" style="width:130px" placeholder="Page link.">
          <textarea placeholder="Rockit?" name="fc_back_text"></textarea>

          Background color:
          <input class="color" id="back_color" value=""><br>

        </div>

        <button class="add" type="submit">Add New Card</button>
        
        <!-- <button class="submit">Done</button> -->

      </div> <!-- End of .left-->

      <div class="container">
          <h4>Your Deck</h4>
          <button class = "play">PLAY</button>
      </div>

    </div> <!-- End of .mediaObj -->

  <?php include('footer.php'); ?>
  
  </div> <!-- End of .page -->

</body>

</html>