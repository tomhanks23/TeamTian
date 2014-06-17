<?php
session_start();
include ("db.php");

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

  <?php include('header.php'); ?>
 
  <div class = "mediaObject">
    
    <div class="about">What is Fun Flash? 
      <p>Welcome to Fun Flash, the single-most important educational product to hit since the
        chalkboard. With this wonderful product you will see your child's intelligence blossom.  We use state of the art educational algorithms to practice the problem areas and reward perceptivity. With Fun Flash, you can be assured that your child will only see educational content.</p>
    </div>  

    <div class = "logIn">

        <p>Log In</p>
        <form action="" method="POST">
          <input type="text" name="email" placeholder ="Email Address" class='email'><br>
          <input type="password" name="password" placeholder = "Password" class='password'><br><br>
          <input type="hidden" name="action" value="login">
          <button type="submit">Log In</button>
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
            <button type="submit">Register</button>
          </form>
      </div>

    </div>

  </div>
  
      <p>Login</p>
    <form action="" method="POST">
      <input type="text" name="email" placeholder ="Email Address" class='email'><br>
      <input type="password" name="password" placeholder = "Password" class='password'><br><br>
      <input type="hidden" name="action" value="login">
      <button type="submit">Submit</button>
    </form>      

  <div>
    <p>Not a member?</p>
    <button class="registerButton">Register!</button>
  </div>  
 </div>  


<!-- Register Modal -->
<div class="overlay">
  <div class="registerModal">
    <div class="registerContent Register">
      <h3>Register</h3>
      <form method="POST" action="" name="register">
        <input type="text" name="firstName" placeholder="First Name"><br>
        <input type="text" name="lastName" placeholder="Last Name"><br>
        <input type="text" name="email" placeholder="Email"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="password" name="password2" placeholder="Re-enter Password"><br>
        <input type="hidden" name="action" value="register"> <br>
        <button type="submit">Submit</button>
        <button class="close">Close</button>
      </form>
    </div>  
  </div>  
</div>  


</div>
</body>

<?php include('footer.php'); ?>

</html>