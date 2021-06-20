$(document).ready(function(){
    showdata();
});
      // ----------------- editing data -----------------
    $("tbody").on("click",".btn-edit",function(){
        alert('hello');
        //console.log("edit button clicked");
        let id = $(this).attr("data-sid");
        alert(id);
        console.log(id);
        mydata = {id:id};
        console.log(mydata);
       $.ajax({
           url:"edit.php",
           method:"POST",
           dataType:"json",
           data:JSON.stringify(mydata),
           success:function(data){
               console.log(data.user_id);
               $("#update_user_name").val(data.user_name);
               $("#update_email").val(data.email);
               $("#id").val(data.user_id);
           }
       });
      
    });
    function showdata(){
        // let output = "";
        // $.ajax({
        //     url:"display.php",
        //     method:"post",
        //     dataType:'json',
        //     success:function(data){
        //         //console.log(data);
        //         if(data){
        //             x = data;
        //         }else{
        //             x = "";
        //         }
        //         for(i=0;i<x.length;i++){
        //             // console.log(x[i]);
        //             output+= "<tr><td>"+x[i].user_id + "</td><td>" + x[i].user_name + "</td><td>"+x[i].email+"</td><td></td<td><button class='btn btn-warning btn-edit' data-sid="+x[i].user_id+" data-toggle='modal' data-target='#update_modal'>EDit</button><button class='btn btn-danger btn-delete' data-sid="+x[i].user_id+">Delete</button></td></tr>"; 
                
                
                
        //         }
        //         $('#tbody').html(output);
        //     }
        // })
        let readrecord = "readrecord";

    $.ajax({
        url:"edit_details.php",
        type:"post",
        data:{readrecord:readrecord},
        success:function(data,status){
            $('#table').html(data);
        }
    });
    }


    // insert data
    alert('script loaded');
    $('#btnadd').click(function(e){
        e.preventDefault();
        console.log('Save Button clicked');
        let name = $('#user_name').val();
        let email = $('#email').val();
        if(name == "" || name.length < 2 || name.length > 20)
        {
            $('#show_error').html('** The userName must be filled **');
            $('#show_error').css('color','red');
            return false;

        }
        if(email == ""){
            $('#email_show_error').html('** The Email must be filled **');
            $('#email_show_error').css('color','red');
            return false;
        }
        else{
            $('#show_error').html('');
            $('#email_show_error').html('');
              //console.log(name);
            mydata = {
                name:name,
                email:email,
            }
            console.log(mydata);
            $.ajax({
                url:"action.php",
                method:"post",
                data:JSON.stringify(mydata),
                success:function(data){
                    //console.log(data);
                    msg = "<div class='alert alert-dark mt-3'>"+data+"</div>";
                    $('#msg').html(msg);
                    $('#myform')[0].reset();
                    showdata();
                }
            });
        }
      
    });
    alert('script loaded');
    $('#btnupdate').click(function(e){
        e.preventDefault();
        console.log('Update Button clicked');
        let name = $('#update_user_name').val();
        let email = $('#update_email').val();
        let id = $('#id').val();
        //console.log(name);
        mydata = {
            name:name,
            email:email,
            id:id
        }
        console.log(mydata);
        $.ajax({
            url:"update.php",
            method:"post",
            data:JSON.stringify(mydata),
            success:function(data){
                //console.log(data);
                msg = "<div class='alert alert-dark mt-3'>"+data+"</div>";
                $('#msg').html(msg);
                //$('#myform_update')[0].reset();
                $("#update_modal").modal("hide");
                showdata();
            }
        })
    });


    // delete record
    $("tbody").on("click",".btn-delete",function(){
        alert('hello');
        console.log("delete button clicked");
        let id = $(this).attr("data-sid");
        console.log(id);
        mydata = {id:id};
       // mythis = this;
        $.ajax({
            url:"delete.php",
            method:"post",
            data : JSON.stringify(mydata),
            success:function(data){
                msg = "<div class='alert alert-dark mt-3'>"+data+"</div>";
                $('#msg').html(msg);
                showdata();
                //$(mythis).closest("tr").fadeOut();
            }

        });
    });
    function DeleteUser(id){
        alert(id);
        let conf = confirm('Are you sure you wanted to delete it');
        if(conf == true){
            mydata = {id:id};
            $.ajax({
                url:"delete.php",
                method:"post",
                data : JSON.stringify(mydata),
                success:function(data){
                    msg = "<div class='alert alert-dark mt-3'>"+data+"</div>";
                    $('#msg').html(msg);
                    showdata();
                //$(mythis).closest("tr").fadeOut();
            }
                
            });
        }
    }
    function UpdateUser(id){
        mydata = {id:id};
      
        $.ajax({
           url:"edit.php",
           method:"POST",
           dataType:"json",
           data:JSON.stringify(mydata),
           success:function(data){
               console.log(data.user_id);
               $("#update_user_name").val(data.user_name);
               $("#update_email").val(data.email);
               $("#id").val(data.user_id);
           }
       });
      
    }
  

