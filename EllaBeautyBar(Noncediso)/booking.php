<?php
session_start();
include('db.php'); //

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo '<p>Form submitted via POST.</p>';
    if (isset($_POST['book'])) {
        echo '<p>Book button clicked.</p>';

        $name = $_POST['name'];
        $email = $_POST['email'];
        $service = $_POST['service'];
        $date = $_POST['date'];
        $time = $_POST['time'];

        // Normalize the time input if needed
        $timeMap = [
            '9am' => '09:00:00',
            '10am' => '10:00:00',
            '11am' => '11:00:00',
            '1pm' => '13:00:00',
            '2pm' => '14:00:00',
            '3pm' => '15:00:00',
            '4pm' => '16:00:00',
            '5pm' => '17:00:00',
            '6pm' => '18:00:00'
        ];

        if (array_key_exists($time, $timeMap)) {
            $time = $timeMap[$time];
        } else {
            echo '<p class="error">Invalid time slot selected.</p>';
            exit;
        }

        try {
            // Check if the time slot is already booked
            $checkQuery = $connection->prepare("SELECT * FROM bookings WHERE date = :date AND time = :time AND service = :service");
            $checkQuery->bindParam(":date", $date, PDO::PARAM_STR);
            $checkQuery->bindParam(":time", $time, PDO::PARAM_STR);
            $checkQuery->bindParam(":service", $service, PDO::PARAM_STR);
            $checkQuery->execute();

            if ($checkQuery->rowCount() > 0) {
                echo '<p class="error">This time slot is already booked. Please choose a different time.</p>';
            } else {
                // Insert the booking into the database
                $insertQuery = $connection->prepare("INSERT INTO bookings (name, email, service, date, time) VALUES (:name, :email, :service, :date, :time)");
                $insertQuery->bindParam(":name", $name, PDO::PARAM_STR);
                $insertQuery->bindParam(":email", $email, PDO::PARAM_STR);
                $insertQuery->bindParam(":service", $service, PDO::PARAM_STR);
                $insertQuery->bindParam(":date", $date, PDO::PARAM_STR);
                $insertQuery->bindParam(":time", $time, PDO::PARAM_STR);
                $result = $insertQuery->execute();

                if ($result) {
                    echo '<p class="success">Your booking was successful!</p>';
                } else {
                    echo '<p class="error">Your booking was not successful. Please try again later.</p>';
                }
            }
        } catch (PDOException $e) {
            echo '<p class="error">Error: ' . $e->getMessage() . '</p>';
        }
    } else {
        echo '<p>Book button not clicked.</p>';
    }
} else {
    echo '<p>Form not submitted via POST.</p>';
}
?>
