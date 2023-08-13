<?php

include 'insert_project.php';

// Validate and sanitize form inputs
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Perform validation
$errors = [];
if (!$name || !preg_match('/^[A-Za-z ]+$/', $name)) {
    $errors[] = 'Please enter a valid name containing only letters and spaces.';
}
if (preg_match('/\d/', $name)) {
    $errors[] = 'Name cannot include numbers.';
}
if (!$email || strlen($email) < 5 || strpos($email, '@') === false) {
    $errors[] = 'Please enter a valid email address.';
}
if (!$message) {
    $errors[] = 'Please enter a valid message.';
}

// Display errors or process the form
if (!empty($errors)) {
    echo '<h2>Error</h2>';
    echo '<ul>';
    foreach ($errors as $error) {
        echo '<li style="color: red;">' . $error . '</li>';
    }
    echo '</ul>';
} else {
    insert($name,$email,$msg);
}

?>
