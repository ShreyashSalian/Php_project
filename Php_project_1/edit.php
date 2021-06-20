
<?php

require 'connection.php';
$grocery = new Grocery();

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data,true);
$id = $mydata['id'];
$id = $mydata['id'];
$row = $grocery->display_record_by_id('users','user_id='.$id.'');
echo json_encode($row);
?>