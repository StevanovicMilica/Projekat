let applyBtn = document.querySelector('.apply_btn');
applyBtn.addEventListener('click', ()=>{
    let businessName = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let about = document.querySelector('#about').value;
    let email = document.querySelector('#email').value;
    if(!businessName.lenght || !address.lenght || !about.lenght || !email.lenght < 8){
        showFormError('some information(s) is/are incorrect');
}else{
    loader.style.display = 'block';
}
})