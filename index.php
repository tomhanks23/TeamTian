<?php
session_start();
include ("db.php");
// include ("header.php");
// include ("footer.php");

$db = new DB();
$errors = [];

//Checking the database to see if the username exists for Login
if($_POST){

  if($_POST['action']=='login'){
    $select = "select * from user where email = '{$_POST['email']}'";
    $results = $db->execute($select);

    if($results->num_rows > 0) {
      while ($row = $results->fetch_assoc()) {
        $_SESSION["user_id"] = $row['user_id'];
        header('Location: http://localhost/TeamTian/overview.php');
      }
    }else{
      echo "username not found";
    }
  }else{
    echo "sent from login";
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>Fun Flash!</title>
  <!-- fonts-->
<<<<<<< HEAD
  <link href='http://fonts.googleapis.com/css?family=Unkempt:700' rel='stylesheet' type='text/css'>
  <!-- Graduate Font -->
=======
>>>>>>> 7dcc0ef8367a359c5cb689d1fc32592dcaa9fcb9
  <link href='http://fonts.googleapis.com/css?family=Graduate' rel='stylesheet' type='text/css'>
  <!-- fonts end -->
  <script src="js/jquery-2.1.1.min.js"></script>
  <!--<script src="js/main.js"></script> -->
  <script src="js/index.js"></script>
  <link rel="stylesheet" type="text/css" href="css/index-styles.css">
   <!--  <link rel="stylesheet" type="text/css" href="flip.css"> -->

</head>

<body>
<<<<<<< HEAD
  <h1>Welcome to Fun Flash!
=======

 <h1>Welcome to Fun Flash!
>>>>>>> 7dcc0ef8367a359c5cb689d1fc32592dcaa9fcb9
    <div class = "flip-container" ontouchstart="this.classList.toggle('hover');">
     <div class = "flipper">
      <a class="front">Fun</a>
      <a class="back">Flash</a>
     </div>
    </div>
  </h1>

  <div class = "mediaObject">
    <div class="about">What is Fun Flash? 
      <p>Welcome to Fun Flash, the single-most important educational product to hit since the
        chalkboard. With this wonderful product you will see your child's intelligence blossom.  We use state of the art educational algorithms to practice the problem areas and reward perceptivity. With Fun Flash, you can be assured that your child will only see educational content.
    </div>

    <div class = "logIn">
        <p>Log In</p>
        <form action="" method="POST">
          <input type="text" name="email" placeholder ="Email Address" class='email'><br>
          <input type="password" name="password" placeholder = "Password" class='password'><br><br>
          <input type="hidden" name="action" value="login">
<<<<<<< HEAD
          <button type="submit">Submit</button>
=======
          <!-- <button type="submit">Log In</button> -->
          <a href="overview.php">Log In</a>
>>>>>>> 7dcc0ef8367a359c5cb689d1fc32592dcaa9fcb9
        </form>
    
      <div>

          <p>Register</p>
          <form method="POST" action="" name="register">
            <input type="text" name="firstName" placeholder="First Name"><br>
            <input type="text" name="lastName" placeholder="Last Name"><br>
            <input type="text" name="email" placeholder="Email"><br>
            <input type="password" name="password" placeholder="Password"><br>
            <input type="password2" name="password2" placeholder="Re-enter Password"><br>
            <input type="hidden" name="action" value="register"> <br>
            <button type="submit">Submit</button>
          </form>

      </div>

    </div>

  </div>

  <footer>Contact Us</footer>

</body>

<?php include('footer.php'); ?>

</html>