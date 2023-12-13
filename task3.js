var validation=document.querySelector("#validation");
validation.addEventListener('submit',function(e){
    e.preventDefault();
    
    var username=document.querySelector("#username");
    var phone=document.querySelector("#phone");
    var password=document.querySelector("#password");
    var hello=document.querySelector("#hello");
    var tc=document.querySelector("#tc");

    if(username.value==""){
        setError(username,'username is empty')
    }
    else{
        var control=username.parentElement;
        var span=control.querySelector('span');
        span.innerText=""; 
    }
    if(phone.value==""){
        setError(phone,'phone is empty')
    }
    else{
        var control=phone.parentElement;
        var span=control.querySelector('span');
        span.innerText=""; 
    }
    if(password.value==""){
        setError(password,'password is empty')
    }
    else{
        var control=password.parentElement;
        var span=control.querySelector('span');
        span.innerText=""; 
    }
    if(hello.value==""){
        setError(hello,'Repaetpassword is empty')
    }
    else{
        var control=hello.parentElement;
        var span=control.querySelector('span');
        span.innerText=""; 
    }
    if(tc.checked){
        var control=tc.parentElement;
        var span=control.querySelector('span');
        span.innerText="";
    }
    else{
        setError(tc,'please check the checkbox');
    }
    if(password.value == hello.value){
        var control=hello.parentElement;
        var span=control.querySelector('span');
        span.innerText=""; 
    }
    else{
        setError(hello,'invalid password'); 
    }
});
function setError(field,message){
    var control=field.parentElement;
        var span=control.querySelector('span');
        span.innerText=message; 
}


