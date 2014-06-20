<?php 

// Include Database Class
include('db.php');
// echo 1;
// Start Database Object
$db = new DB();

// echo json_encode($_POST);

// Write SQL Statement
$sql = "
  UPDATE flashcard SET 
                    front_text = '{$_POST['front_text']}',       
                    back_text = '{$_POST['back_text']}',   
                    front_image = '{$_POST['front_image']}',    
                    back_image = '{$_POST['back_image']}',
                    front_bg_color = '{$_POST['front_bg_color']}', 
                    back_bg_color = '{$_POST['back_bg_color']}',
                    right_answer = '{$_POST['right_answer']}'
                 WHERE
                    flashcard_id = '{$_POST['flashcard_id']}'
                    ";
//echo $sql;

// Execute SQL Statement
if ($db->execute($sql)) {
      echo $_POST['flashcard_id'];
}