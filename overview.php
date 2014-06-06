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
  <?php include 'upload.php';?>
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
    <form class="deckdd" name="cardDeck" method="POST">
      <div align="center">
        <select name="cardDeck">
          <option value="choose">Choose A Deck</option>
          <option value="colors">Colors</option>
          <option value="shapes">Shapes</option>
          <option value="numbers">Numbers</option>
        </select>
      </div>
    </form>
  <!-- Text Area Card Content -->
    <!-- <textarea class="fc_front" rows="2" cols="20" placeholder="Front text."></textarea>
    <canvas id="canvas" style="border:1px solid black; height: 0px; width: 0px;"></canvas> -->

    <div class="fc_front">

      <img id="uploadPreview" style="width: 200px; height: 100px;">
      <textarea rows="2" cols="20" placeholder="Front text."></textarea>
    </div>

    <input class="color" value=""><br>
    


    <form action="" method="post"
      enctype="multipart/form-data">
      <label for="file">Filename:</label>
      <input type="file" name="file" id="file"><br>
      <input type="submit" name="submit" value="Submit">
    </form>


    <!-- <button class="addImg_front">Add Image</button> -->
    <br>
    <!-- <a href="#" class="test">update image</a> -->
    <br>
    <textarea class="fc_back" rows="2" cols="20" placeholder="Back text."></textarea>
    <button class="addImg_back">Add Image</button><br>
    <button class="add">Add New Card</button>
    <button class="submit">Done</button>
  </div>
  <!-- Card Deck-->
  <div>
    <div class="container">
      <h1>
        Your Deck
      </h1>
    </div>
  </div>

</body>

</html>