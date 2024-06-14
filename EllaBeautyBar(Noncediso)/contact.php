<?php
session_start();
include('db.php');

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Insert the contact message into the database
    $query = $connection->prepare("INSERT INTO contacts (name, email, message) VALUES (:name, :email, :message)");
    $query->bindParam("name", $name, PDO::PARAM_STR);
    $query->bindParam("email", $email, PDO::PARAM_STR);
    $query->bindParam("message", $message, PDO::PARAM_STR);
    $result = $query->execute();

    if ($result) {
        echo '<p class="success">Your message was sent successfully!</p>';
    } else {
        echo '<p class="error">There was an error sending your message. Please try again later.</p>';
    }
}
?>


