let email_input = document.getElementById('email');
let email_thanks = document.querySelector('.Success-box p span');
let form = document.querySelector('form');
let news_box = document.querySelector('.Newsletter-box');
let success_box = document.querySelector('.Success-box');
let dismiss = document.querySelector('.Success-box button');


function invalidSet() {
    document.querySelector('.input-error').classList.add('show');
}

form.addEventListener('submit',(event)=>{
    document.querySelector('.input-error').classList.remove('show');
    event.preventDefault();
    email_thanks.innerHTML = email_input.value;
    success_box.classList.replace('hide','show');
    news_box.classList.replace('show','hide');
});

dismiss.addEventListener('click',()=>{
    news_box.classList.replace('hide','show');
    success_box.classList.replace('show','hide');
});