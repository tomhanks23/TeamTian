<?php

// print_r($_FILES); // will show contents of the variable passed into it.
// echo "<br>";
// print_r($_POST);


// access a key within the post array
// example  ---    $_FILES['bootcamp_file']['name'];


echo $_FILES['bootcamp_file']['name'];
// the POST doesn't run until the file gets all the way there
// the upload screen won't change until the file arrives and 
// then the submission file.php will show.

// store files on fileserver
// for the time being upload to user_files
// file_id   |   user_id    |    name     |   Active    
//      1     |       17       |   asu.png   |      1    (present)
//      2     |       5         |   asu.png   |       0   inactive (deleted)

 ?>

