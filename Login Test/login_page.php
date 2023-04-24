<?php

if (isset($_POST["submit"])) {
    $username = $_POST["uid"];
    $pwd = $_POST["pwd"];

    require_once 'database_handler.php';
    require_once 'functions.php';

    if (emptyInputLogin($username, $pwd) !== false) {
        header("location: index.html?error=emptyinput");
        exit();
    }

    loginUser($conn, $username, $pwd);
}
else {
    header("location: index.html");
    exit();
}