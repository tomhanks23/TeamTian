<?php 

if (isset($_FILES)) {

    if ($_FILES["file"]["error"] > 0) {
      echo "Error: " . $_FILES["file"]["error"] . "<br>";
    } else {

        if ($_FILES["file"]["name"]) {
            $file_name = microtime(true) . $_FILES["file"]["name"];
            move_uploaded_file($_FILES["file"]["tmp_name"], 'user_files/' . $file_name);
            echo $img = '<img src=user_files/' . $file_name . ' height="100" width="160">';
        } else {
            $url = "http://imgs.tuts.dragoart.com/how-to-draw-a-river_1_000000007978_5.jpg";
            echo $img = '<img src="' . $url . '" height="100" width="160">';
        }

    }


}