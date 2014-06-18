<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link href='http://fonts.googleapis.com/css?family=Unkempt:700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/flashcard-styles.css">
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="js/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript">
      var deck =  <?php echo $jsonDoc; ?> ;
      // console.log(deck);
    </script>
    <script src="js/flashcard.js"></script>

</head>

<body>
  <div class="page-container">
    <div class="navigation">
      <div class="title">
        <h1>
          FUN FLASH!
        </h1>
      </div>
      <a class="nav" href="overview.php">HOME</a>
      <div class="clear"></div>
    </div>

    <div class="flashcard">
      <div class="flashcard-content">
        <div class="indexCard">
          <div class="side1">
          </div>
          <div class="side2">
          </div>
        </div>
      </div>
    </div>

    <div class="answer-block">
      <div class="answer1">
      </div>
      <div class="motivation">
      </div>
      <div class="answer2">
      </div>
      <div class="clear"></div>
    </div>
  </div>