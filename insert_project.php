<?php

include 'db_connection.php';

function insert($name,$email,$msg){
	$sql = "INSERT INTO contacts (Name, Email, Message) VALUES ('$name', '$email', '$msg')";
	if ($connection->query($sql) === TRUE) {
    echo 'Contact inserted successfully.';
	} else {
		echo 'Error: ' . $sql . '<br>' . $connection->error;
	}

}

?>
