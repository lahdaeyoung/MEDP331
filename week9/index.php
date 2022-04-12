<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name
    $servername = "localhost:3308";
    $username = "web06";
    $password = "SP2022web06";
    $dbname = "web06db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";
a
    //pull form data and store in variables
    if (isset($_POST['ID'], $_POST['price'], $_POST['category'], $_POST['color'], $_POST['size'])) {
        $ID = $_POST['ID'];
        $price = $_POST['price'];
        $category = $_POST['category'];
        $color = $_POST['color'];
        $size = $_POST['size'];

    } else {
        echo 'You need to input all the details.';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and firstname, lastname, class, year are the names of my columns
    $sql = "INSERT INTO clothingdata (ID, price, category, color, size)
    VALUES ('$ID', '$price', '$category', '$color', '$size')";
    
    //return status to user
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection
    mysqli_close($conn);
?>