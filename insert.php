<?php

// Include Database Class
include('db.php');

// Start Database Object
$db = new DB();

// Insert Values
$sql_values = [
  'exampleProp' => 'String',
  'exampleProp2' => 'string2',
  'exampleProp3' => 0
];

// Execute SQL Statement
$db->insert('user', $sql_values);