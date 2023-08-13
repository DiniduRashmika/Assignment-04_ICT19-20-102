<?php
require_once 'db_connection.php';

$sql = "SELECT * FROM projects";
$result = $connection->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo 'ID: ' . $row['ID'] . '<br>';
        echo 'Title: ' . $row['Title'] . '<br>';
        echo 'Description: ' . $row['Description'] . '<br>';
        echo 'Image: ' . $row['Image'] . '<br><br>';
    }
} else {
    echo 'No projects found.';
}

$connection->close();
?>
