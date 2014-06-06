<?php 

if (isset($_FILES)) {

    if ($_FILES["file"]["error"] > 0) {
      echo "Error: " . $_FILES["file"]["error"] . "<br>";
    } else {
        // move_uploaded_file($_FILES["file"]["tmp_name"], 'user_files/' . $_FILES["file"]["name"]);

        // Make a database record for this file in a 'file' table

        // So your first file will be file id 1
        $file_id = 6;

        // move file to be 1.gif ( or 1.png or whichever )


        move_uploaded_file($_FILES["file"]["tmp_name"], 'user_files/' . $file_id . '.png');

    }


}