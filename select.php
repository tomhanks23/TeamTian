<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

// Write SQL Statement
$sql = "
  SELECT * FROM table
  ";

// Execute SQL Statement
$results = $db->execute($sql);

// Loop over results and make a $row variable for each result
while ($row = $results->fetch_assoc()) {
  echo $row['property'] . '<br>';
}