<?php
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
      array_push($errors, "username already exists");
    }else{
      echo "user doesn't exist";
    }
  }else{
    echo "sent from login";
  }
}
// Check the database to see if the password matches the username
// if($_POST){
//   if($_POST['action']=='login'){
//     $select = "select * from user where password = '{$_POST['password']}'";
//     $results = $db->execute($select);
//     if($results->num_rows > 0) {
//       array_push($errors, "username and/or password not found");
//       echo "username and/or password not found";
//     }else{
//       echo "";
//     }
//   }else{
//     echo "sent from login";
//   }
// }

?>

<!DOCTYPE html>
<html>
<head>
  <title>Fun Flash!</title>
  <!-- fonts-->
  <link href='http://fonts.googleapis.com/css?family=Graduate' rel='stylesheet' type='text/css'>
  <!-- fonts end -->
  <script src="js/jquery-2.1.1.min.js"></script>
  <!--<script src="js/main.js"></script> -->
  <script src="js/index.js"></script>
  <link rel="stylesheet" type="text/css" href="css/index-styles.css">
</head>

<body>

 <h1>Welcome to Fun Flash!
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
          <input type="text" name="email" placeholder ="Email Address"><br>
          <input type="password" name="password" placeholder = "Password"><br><br>
          <input type="hidden" name="action" value="login">
          <!-- <button type="submit">Log In</button> -->
          <a href="overview.php">Log In</a>
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

</body>

<?php include('footer.php'); ?>

</html>