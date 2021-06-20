<?php
require 'config.php';
class Grocery
{
    private $host = DB_HOST;
    private $user = DB_USER;
    private $password = DB_PWD;
    private $db_name = DB_NAME;
    public $url = URL;
    public $cust_url = cust_URL;
    // for connection we use con
    public $con;

    public function __construct()
    {
        $this->con = mysqli_connect($this->host, $this->user, $this->password, $this->db_name);
        if (!$this->con) {
            echo "There is some error" . mysqli_connect_error($this->con);
        }	
    }
    function insertInTable($table,$data){
        $col = "insert into $table (`".implode("` , `",array_keys($data))."`)";
        $col.= " values('";    
        foreach($data as $key => $value) {

            $fields[$key] = mysqli_escape_string($this->con,$value);
        }
    
        $col.= implode("' , '",array_values($fields))."');";      
        $query = mysqli_query($this->con,$col);
        if($query)
        {
            echo "inserted successfuuly";
        }
        else{
            echo "there is some error".mysqli_error($this->con);
        }
       
    }
    function SelectTabledata($query){   
        $result = mysqli_query ($this->con,$query);
        $count = 0;
           $data = array();
           while ( $row = mysqli_fetch_array($result)){
               $data[$count] = $row;
            $count++;
           }
           return $data;	
    }
    // Display Data Function
   

    //------------------------- insert The admin side data------------------------  
    function deleterecord($table,$condition){
        $sql = "delete from ".$table." where ".$condition.";";
        $query = mysqli_query($this->con, $sql);
        echo $sql;
        die();
        if ($query) {
            //header('location:' . $this->url . 'views/admin.php?msg3=delete');
            echo "data deleted";
        } else {
            echo "data deleted";
        }    
    }
    public function display_record_by_id($table,$condition)
    {
        $sql = "select * from ".$table." where ".$condition.";";
        $query = mysqli_query($this->con, $sql);
        $num = mysqli_num_rows($query);
        if ($num > 0) {
            while ($row = mysqli_fetch_assoc($query)) {
                return $row;
            }
        }
        echo "No Records Found";
    }
    function updateTable($table,$data,$condition)
    {
        $key = array_keys($data);  //get key( column name)
        $value = array_values($data);  //get values (values to be inserted)
        $sql = "update $table set ";
       
        foreach($data as $key => $value) 
            {
                $fields[$key] = " `$key`='".mysqli_escape_string($this->con,$value)."'";
            }
        $sql .= implode(" , ",array_values($fields))." where ".$condition.";";    
        $query = mysqli_query($this->con,$sql);
        if($sql){
          echo "Data Updated successfully";
         }
        else{
            echo "error".mysqli_error($this->con);
        }
            
    }
}




?>

