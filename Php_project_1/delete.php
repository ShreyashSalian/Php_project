
<?php
    require 'connection.php';
    $grocery = new Grocery();
    $data = stripslashes(file_get_contents("php://input"));
    $mydata = json_decode($data,true);
    $id = $mydata['id'];
    $grocery->deleterecord('users','user_id='.$id.'');    


?>