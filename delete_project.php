<?php
require_once 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM projects WHERE ID=$id";

if ($connection->query($sql) === TRUE) {
    echo 'Project deleted successfully.';
} else {
    echo 'Error deleting project: ' . $connection->error;
}

$connection->close();
?>
