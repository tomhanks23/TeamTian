<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

// Write SQL Statement
$sql = "
  SELECT flashcard_deck_id,
         flashcard_deck_name 
    FROM flashcard_deck
ORDER BY flashcard_deck_id;
  ";

// Execute SQL Statement
$results = $db->execute($sql);

echo "<option value='-'>-</option>";

// Loop over results and make a $row variable for each result
while ($row = $results->fetch_assoc()) {
  echo "<option value='$row[flashcard_deck_id]'>$row[flashcard_deck_name]</option>";
}