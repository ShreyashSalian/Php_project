// insert data
alert('script loaded');
$('#btnadd').click(function(e){
    e.preventDefault();
    console.log('Save Button clicked');
});








// $(document).ready(function(){
//     alert('working');
//     Insert_record();
//     view_record();
// });

// function DeleteUser(deleteId){  
//     alert(deleteId);
//     // let conf = confirm('Are you sure you wanted to delete?');
//     // if(conf == true){
//         $.ajax({
//             url:"views.php",
//             type:"post",
//             data:{Id:deleteId},
//             success:function(data,status){
//                 alert(data);
//                 //view_record();
//             }
//         });
//     // }
//     // else{
//     //     alert('Not selected');
//     // }
// }


// function Insert_record()
// {
//     $(document).on('click','#btn_register',function(){
//         let user_name = $('#user_name').val();
//         let email = $('#email').val();
//         console.log(user_name,email);
//         if(user_name == "" || email == ""){
//             $("#message").html('PLease Fill All the Details');
//         }
//         else{
//             $.ajax({
//                 url:'action.php',
//                 method:'post',
//                 data:{
//                     user_name:user_name,
//                     email:email,
//                 },
//                  success:function(data){
//                     $("#message").html(data);
//                     $('#Registration').modal('show');
//                     $('form').trigger('reset');
//                     view_record();
//                  }
//             })
//         }
//     })
//     $(document).on('click','#btn_close',function()
//     {
//         $('form').trigger('reset');
//         $('#message').html('');
//     })   
// }        
// // Display record

// function view_record()
// {
//     let readrecord = "readrecord";

//     $.ajax({
//         url:"action.php",
//         type:"post",
//         data:{readrecord:readrecord},
//         success:function(data,status){
//             $('#table').html(data);
//         }
//     });
// }
// function GetUserDetails(id){
//     $('#hidden_user_id').val(id);
//     alert(id);
//     $.post(
//         "action.php",{
//             id:id
//         },
//         function(data,status){
//             let user = JSON.parse(data);
//             $('#update-user_name').val(user.user_name),
//             $('#update-email').val(user.email)
//         }
//     );
//     $('#update_modal').modal("show");
// }



$(document).ready(function(){
    showdata();
});
      // ----------------- editing data -----------------
    $("tbody").on("click",".btn-edit",function(){
        //console.log("edit button clicked");
        let id = $(this).attr("data-sid");
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
        let output = "";
        $.ajax({
            url:"display.php",
            method:"post",
            dataType:'json',
            success:function(data){
                //console.log(data);
                if(data){
                    x = data;
                }else{
                    x = "";
                }
                for(i=0;i<x.length;i++){
                    // console.log(x[i]);
                    output+= "<tr><td>"+x[i].user_id + "</td><td>" + x[i].user_name + "</td><td>"+x[i].email+"</td><td><button class='btn btn-warning btn-edit' data-sid="+x[i].user_id+" data-toggle='modal' data-target='#update_modal'>EDit</button>&nbsp;<button class='btn btn-danger btn-delete' data-sid="+x[i].user_id+">Delete</button></td></tr>"; 
                
                
                
                }
                $('#tbody').html(output);
            }
        })
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

        })
    });
  

