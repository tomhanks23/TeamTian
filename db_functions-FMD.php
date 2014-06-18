<?php 

// Connect to the db
// @return bool false on failrure / mysqli mysqli object instance on succes
function db_connect() {

  // define connection as a static variable, to avoid connecting more than
  // once
  static $connection;

  // Try and connect to the db, if a connection has not been established yet
  if(!isset($connection)) {
    // load config as an array. Use the actual location of your config file
    // $config = parse_ini_file('../config.ini');
    // $connection = mysqli_connect('rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com',
    //     $config['username'],
    //     $config['password'],
    //     $config['dbname']);
    $connection = mysqli_connect('localhost', 'root','','teamtian');
  }

  if($connection === false) {
    // handle error
    return mysqli_connect_error();
  }
  return $connection;
}

// Query the database
// @param $query the query string
// @return mixed The result fo the mysqli::query() function
  function db_query($query) {
    // connect to db
    $connection = db_connect();

    //Query the DB
    $result = mysqli_query($connection,$query);

    return $result;
  }


// Fetch Rows from the database (SELECT query)
// @param $query the query string
// @return bool False on failure / array database rows on success

  function db_select($query) {
    $rows = array();
    $result = db_query($query);

    // if query failed, return 'false'
    if($result === false) {
      echo "db_select returned FALSE";
      return false;
    };

// if query was successful, retrieve all the rows into an array
    while ( $row = mysqli_fetch_assoc($result) ) {
      $rows[] = $row;
    }
    return $rows;
  }


// Fetch the last error from the database
// @return string Database error message
  function db_error() {
    $connection = db_connect();
    return mysqli_error($connection);
  }


// Quote and escape value for use in a db query
// @param string $value The value to be quoted and escaped
// @return string the quoted and escaped string

  function db_quote($value) {
    $connection = db_connect();
    return "'" . mysqli_real_escape_string($connetion,$value) . "'";
  }

 ?>