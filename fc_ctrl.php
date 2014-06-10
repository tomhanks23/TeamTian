<?php

  // Establish a connection with the database
  require ( 'connector-FMD.php' );  //database
  echo "connector-FMD.php loaded and operational <br>";
  require ('db_functions-FMD.php');
  echo "db_function-FMD loaded and operational <br>";

  $rows = db_select('SELECT *  FROM flashcard');
  if($rows == false) {
    $error = db_error();
    echo "error retrieving row from flashcard";
  }

  $jsonDoc =  json_encode ( $rows, JSON_FORCE_OBJECT );
  // echo $jsonDoc;

  // Bring in the html for the page
  require 'flashcard.php';
  echo "flashcard.php loaded and operational";