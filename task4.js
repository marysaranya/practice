var password=document.querySelector("#password");
password.addEventListener('click',function(){
    var type=password.getAttribute("type")==="password"?"text":"password";
    password.setAttribute("type",type);
    this.classList.toggel("bi-eye");
});
var form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();

});