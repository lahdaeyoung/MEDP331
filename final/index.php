<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $servername = "localhost:3308";
    $username = "web06dbuser";
    $password = "SP2022web3985";
    $dbname = "web06db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";

    //pull form data and store in variables
    if (isset($_POST['lik'], $_POST['sav'], $_POST['for'], $_POST['hear'], $_POST['suggestions'])) {
        $ID = $_POST['lik'];
        $price = $_POST['sav'];
        $category = $_POST['for'];
        $color = $_POST['hear'];
        $size = $_POST['suggestions'];

    } else {
        echo 'Please complete the survey';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and firstname, lastname, class, year are the names of my columns

    $sql = "INSERT INTO survey (lik , sav, for, hear, suggestions)
    VALUES ('$lik', '$sav', '$for', '$hear', '$suggestions')";
    
    //return status to user
    if (mysqli_query($conn, $sql)) {
        echo "Thank you for submitting!";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection
    mysqli_close($conn);
?>