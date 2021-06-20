<?php
require 'connection.php';
$grocery = new Grocery();
$row = $grocery->SelectTabledata("select * from users");
echo json_encode($row);



?>