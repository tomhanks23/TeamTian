<?php
include_once("db.php");

function getUserByEmail($email){
  $db = new DB();
  $select = "select * from user where email = '$email'";
  $results = $db->execute($select);
  return $results->fetch_assoc();
}


function getUserById($user_id){
  $db = new DB();
  $select = "select * from user where user_id = $user_id";
  $results = $db->execute($select);
  return $results->fetch_assoc();
}


function insertUser($first_name, $last_name, $email, $password){
    $insertuser = "
    INSERT INTO user(first_name, last_name, email, password) 
    VALUES ('$first_name','$last_name','$email', '$password')
    ";
    $db = new DB();
    $db->execute($insertuser);
    
}