

let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');
formBtn.addEventListener('click', ()=>{
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    
    if(fullname.value.lenght < 3){
        showFormError('name must be 3 letters long');
    }else if(email.value.lenght < 10){
        showFormError('enter your email');
    }else if(password.value.lenght < 8){
        showFormError('password must be 8 letters long');
    }else{
        loader.style.display = 'block';
    }
});