document.addEventListener('DOMContentLoaded',()=>{
    const cpass=document.getElementById("cpass");
    const pass=document.getElementById("pass");
    const submit=document.getElementById("submit-button");
    submit.addEventListener('mouseover',()=>{
        if(pass.value != cpass.value){
            cpass.style.borderColor='red';
        }
        else{
            cpass.style.borderColor='green';
        }
    }) 
})