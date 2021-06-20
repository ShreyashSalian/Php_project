
let email = document.getElementById('email');
let user_name = document.getElementById('user_name');
let submit = document.getElementById('submit');
$('#success').hide();
$('#failure').hide();
let valid_user_name = false;
let valid_email = false;

user_name.addEventListener('blur',()=>
{
    let regex = /^([A-Za-z0-9\-\@\.]){5,20}$/;
    if(regex.test(user_name.value)){
        user_name.classList.remove('is-invalid');
        user_name.classList.add('is-valid');
        valid_user_name = true;
    }
    else{
        user_name.classList.add('is-invalid');
        user_name = false;
    }
})

email.addEventListener('blur',()=>
{
    let regex = /^([_a-zA-Z0-9\-\.]+)@([_a-zA-Z0-9\-\.]+)\.([a-zA-Z]){2,7}$/;

    if(regex.test(email.value)){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        valid_email = true;
    }
    else{
        email.classList.add('is-invalid');
        valid_email = false;
    }
})

submit.addEventListener('click',(e)=>{
  
    if(valid_name == true && valid_email == true)
    {
        success.classList.add('show');   
        // $('#failure').alert('close');  
        $('#failure').hide(); 
        $('#success').show();      
    }
    else{
        e.preventDefault();
        failure.classList.add('show');   
        //success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide();
        $('#failure').show(); 
    }
});
