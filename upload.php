<?php 

if ($_FILES["file"]["error"] > 0) {
  echo "Error: " . $_FILES["file"]["error"] . "<br>";
} else {
    // move_uploaded_file($_FILES["file"]["tmp_name"], 'user_files/' . $_FILES["file"]["name"]);
    move_uploaded_file($_FILES["file"]["tmp_name"], 'user_files/foo.gif');
}
