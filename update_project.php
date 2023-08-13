<?php
require_once 'db_connection.php';

$id = $_POST['id'];
$newTitle = $_POST['new_title'];
$newDescription = $_POST['new_description'];

$sql = "UPDATE projects SET Title='$newTitle', Description='$newDescription' WHERE ID=$id";

if ($connection->query($sql) === TRUE) {
    echo 'Project updated successfully.';
} else {
    echo 'Error updating project: ' . $connection->error;
}

$connection->close();
?>
