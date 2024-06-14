<?php

session_start();

include('db.php');

if (isset($_POST['login']))

{

$username = $_POST['username'];

$password = $_POST['password'];

$query = $connection->prepare("SELECT * FROM users WHERE username=:username");

$query->bindParam("username", $username, PDO::PARAM_STR);

$query->execute();

$result = $query->fetch(PDO::FETCH_ASSOC);

if (!$result)

{

echo '<p class="error">Username password combination is wrong!</p>';

}

else

{

if (password_verify($password, $result['password']))

{

$_SESSION['user_name'] = $result['username'];

header("location: indexElla.html");

exit;

}

else

{

echo '<p class="error">Username password combination is wrong!</p>';

}

}

}

?>
