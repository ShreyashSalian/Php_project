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
$grocery->insertInTable('users',$array);



// if(isset($_POST['user_name']) && isset($_POST['email'])){
//         $array = [
//             "user_name" => $_POST['user_name'],
//             "email" => $_POST['email'],
//         ];
//         $grocery->insertInTable('users',$array);
// }



// // delete the user
// if(isset($_POST['deleteId'])){
//     echo "hello";
//     $userid = $_POST['deleteId'];
//     echo $userid;
//     die();
//     $grocery->deleterecord($userid);

// }






?>