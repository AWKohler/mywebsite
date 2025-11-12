<?php
  // Database connection settings
  $host = 'localhost';
  $user = 'root';
  $pass = 'hussle'; // The password you set for MySQL
  $db = 'mussle_hustle';             // The database you created

  // Create connection
  $conn = new mysqli($host, $user, $pass, $db);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
?>