<?php 

// Include Database Class
include('db.php');
// echo 1;
// Start Database Object
$db = new DB();

// echo json_encode($_POST);

// Write SQL Statement
$sql = "
        DELETE FROM flashcard 
         WHERE flashcard_id = {$_POST['flashcard_id']};
       ";

// Execute SQL Statement
$results = $db->execute($sql);
echo $results;
 ?>