<?php
require 'connection.php';
$grocery = new Grocery();
// echo "Hello";
// $grocery->display_record();
    echo "hello";
    $userid = $_POST['deleteId'];
    echo $userid;
    die();
    $grocery->deleterecord($userid);


?>