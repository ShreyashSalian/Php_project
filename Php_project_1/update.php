<?php
require 'connection.php';
$grocery = new Grocery();

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);
// echo $mydata;
$array = [
    "user_name" => $mydata['name'],
    "email"=> $mydata['email']
];
//$grocery->insertInTable('users',$array);
$id = $mydata['id'];
$grocery->updateTable('users',$array,'user_id='.$id.'');

?>