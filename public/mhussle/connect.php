<?php
  // Database connection settings
  $host = 'localhost';
  $user = 'root';
  $pass = 'YOUR_MYSQL_PASSWORD_HERE'; // The password you set for MySQL
  $db = 'muscle_hustle';             // The database you created

  // Create connection
  $conn = new mysqli($host, $user, $pass, $db);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
?>