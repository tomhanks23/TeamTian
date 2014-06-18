<?php

// Include Database Class
include('db.php');
// echo 1;
// Start Database Object
$db = new DB();

// echo json_encode($_POST);

// Write SQL Statement
$sql = "
  INSERT INTO flashcard (
                        flashcard_deck_id,
                        user_id,
                        front_text,       
                        back_text,        
                        front_image,      
                        back_image,       
                        front_bg_color,   
                        back_bg_color,
                        right_answer
                        )
                VALUES( '{$_POST['flashcard_deck_id']}',
                        '{$_POST['user_id']}',
                        '{$_POST['front_text']}',
                        '{$_POST['back_text']}',
                        '{$_POST['front_image']}',
                        '{$_POST['back_image']}',
                        '{$_POST['front_bg_color']}',
                        '{$_POST['back_bg_color']}',
                        '{$_POST['right_answer']}'
                        )";
//echo $sql;

// Execute SQL Statement
if ($db->execute($sql)) {
      print_r($db->insert_id());
}
