<?php 

// Include Database Class
include('db.php');
// echo 1;
// Start Database Object
$db = new DB();

// Write SQL Statement
$sql = "
        SELECT * 
          FROM flashcard 
         WHERE flashcard_id = {$_POST['flashcard_id']};
       ";

// Execute SQL Statement
$results = $db->execute($sql);

$rowArray = array();
$row = $results->fetch_assoc();
    

echo json_encode($row);

 ?>