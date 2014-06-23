<?php

// Database wrapper
class Db {
  // The database connection 
  protected static $connection;

  // connect to the database
  // @return bool false on failure / mysqli MySQLi object instance on success
  public function connect() {

    // Try and connect to the db
    if ( !isset (self::$connection) ) {
      self::$connection = new mysqli_connect('localhost', 'root', '', teamtian);

      //Load configuration as an array. Use the actual location of your
      // configuration file
      // $config = parse_ini_file('../config.ini');
      // self::$connection = new mysqli_connect('rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com',
      //   $config['username'],
      //   $config['password'],
      //   $config['dbname'] );

    }

    // if the connection was not successful, handle error
    if (self::$connection === false) {
      echo "No connection ... *sigh";
      return false;
    }

    return self::$connection;

  }


  // Query the DB
  // @param $query the query string
  // @return mixed the result of the mysqli::query() function

  public function query($query) {
    // connect to the db
    $connection = $this -> connect();

    // query db
    $result = $connection -> query($query);

    return $result;
  }


  // Fetch Rows from the db (SELECT query)
  // @param $query the query string
  // @return bool false on failure / array Database rows on success
  public function select($query) {
    $rows = array();
    $result = $this -> query($query);
    if($result === false) {
      return false;
    }
    while ($row = $result -> fetch_assoc() ) {
      $rows[] = $row;
    }
    return $rows;
  }

  // Fetch the last error from the db
  // @return string Database error message
  public function error() {
    $connection = $this -> connect();
    return $connection -> error;
  }

  // quote and escape value for use in a database query
  // @param string $value The value to be quoted and escaped
  // @return string The quoted and escaped string
  public function quote($value) {
    $connection = $this -> connect();
    return "'" . $connection -> cubrid_real_escape_string($value) . "'";
  }

}



