<?php 

session_start();
// store session data
$_SESSION['deck_id'] = $_POST['deck_id'];

// Include Database Class
include('db.php');
// echo 1;
// Start Database Object
$db = new DB();

// Write SQL Statement
$sql = "
        SELECT * 
          FROM flashcard 
         WHERE user_id = {$_SESSION['user_id']}
           AND flashcard_deck_id = {$_SESSION['deck_id']};
       ";

// Execute SQL Statement
$results = $db->execute($sql);

$rowArray = array();

while ($row = $results->fetch_assoc()) {
    $array = array('flashcard_id'=>$row['flashcard_id'],
                      'front_bg_color'=>$row['front_bg_color'],
                      'back_bg_color'=>$row['back_bg_color'],
                      'right_answer'=>$row['right_answer']
                      );
    array_push($rowArray, $array);
}


echo json_encode($rowArray);
