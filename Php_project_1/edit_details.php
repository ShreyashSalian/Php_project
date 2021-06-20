<?php
require 'connection.php';
$grocery = new Grocery();
if(isset($_POST['readrecord'])){
    $value = '<table class="table table-bordered">
            <thead>
                <tr>
                    <td> User ID </td>
                    <td> User</td>
                    <td> User Email</td>
                    <td> Edit </td>
                    <td> Delete </td>
                </tr>
                </thead> <tbody id="tbody">';
    $gro = $grocery->SelectTabledata("select * from users");
    foreach ($gro as $c) {
        $value.= ' 
       
        <tr>
                        <td> '.$c['user_id'].' </td>
                        <td> '.$c['user_name'].' </td>
                        <td> '.$c['email'].'</td>
                        <td><button class="btn btn-warning btn-edit" onclick="UpdateUser('.$c['user_id'].')" data-toggle="modal" data-target="#update_modal">Edit</button></td>
                        <td><button class="btn btn-danger btn-delete" onclick="DeleteUser('.$c['user_id'].')">DELETE</button><td>
                    </tr>';
    }
    $value.='</tbody></table>';
    echo $value;
}


?>