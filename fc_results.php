<?php

  // Establish a connection with the database
  //require ( 'connector-FMD.php' );  //database
  // echo "connector-FMD.php loaded and operational <br>";
  require ('includes-fc/db_functions-FMD.php');
  // echo "db_functions-FMD loaded and operational <br>";

  $rows = db_select('SELECT *  FROM flashcard WHERE flashcard_deck_id = 13');
  if($rows == false) {
    $error = db_error();
    echo "error retrieving row from flashcard";
  }

  $jsonDoc =  json_encode ( $rows, JSON_FORCE_OBJECT );
  //echo $jsonDoc;

  // Bring in the html for the page
  require 'includes-fc/fc_head.php';
  require 'header.php';
  require 'includes-fc/fc-results-window.php';
  // echo "flashcard.php loaded and operational";
  require 'footer.php';