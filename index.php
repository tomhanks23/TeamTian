<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');
session_start();
include_once("db.php");
include_once("user.php");

$db = new DB();
$errors = [];

//Checking the database to see if the username exists for Login
if($_POST){

  if($_POST['action']=='login'){
    $user = getUserByEmail($_POST['email']);
    if($user){
        $_SESSION["user_id"] = $user['user_id'];
        header('Location: http://localhost/TeamTian/overview.php');
        exit();

    }else{
      echo "username not found";   
    }

  } else { 
      $firstName = $_POST['firstName'];
      $lastName = $_POST['lastName'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $user = getUserByEmail($email);

      if($user){
         array_push($errors, "username already exists");
      } else {
        insertUser($firstName, $lastName, $email, $password);

        // $insertuser = "INSERT INTO user(first_name, email, password) VALUES ('$firstName', '$email', '$password')";
        // $db->execute($insertuser);
        // ("Thanks for registering. Please log in");
      }
    }
}  

?>

<!DOCTYPE html>
<html>
<head>
  <title>Fun Flash!</title>
  <!-- fonts-->
  <link href='http://fonts.googleapis.com/css?family=Unkempt:700' rel='stylesheet' type='text/css'>
  <!-- Graduate Font -->

  <link href='http://fonts.googleapis.com/css?family=Graduate' rel='stylesheet' type='text/css'>
  <!-- fonts end -->
  <script src="js/jquery-2.1.1.min.js"></script>
  <!--<script src="js/main.js"></script> -->
  <script src="js/index.js"></script>
  <link rel="stylesheet" type="text/css" href="css/index-styles.css">
   <!--  <link rel="stylesheet" type="text/css" href="flip.css"> -->

</head>

<body>

  <div class="page">

    <?php include('header.php'); ?>
   
    <div class = "mediaObject">
      <div class="about">
        <h4>What is Fun Flash?</h4><br>
        <p>Welcome to Fun Flash, the single-most important educational product to hit since the
          chalkboard. With this wonderful product you will see your child's intelligence blossom.  We use state of the art educational algorithms to practice the problem areas and reward perceptivity. With Fun Flash, you can be assured that your child will only see educational content.</p>
      </div>  

      <?php include("loginform.php"); ?>
      <?php include("registerform.php"); ?>
  <!--  End of mediaObject -->
    </div> 

    <?php include('footer.php'); ?>

<!-- End of page div -->
  </div>

</body>

</html>