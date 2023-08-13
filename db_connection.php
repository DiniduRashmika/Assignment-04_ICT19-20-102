<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'quily';

$connection = new mysqli($host, $user, $password, $database);

if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

?>
