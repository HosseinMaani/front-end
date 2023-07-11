const RATE_BOX = document.querySelector('.rating-box');
const THANK_YOU_BOX = document.querySelector('.thank-you-box');
const RATE_BUTTONS = document.querySelectorAll('.rate-number');
const SUBMIT = document.getElementById('submit');

function RemoveActiveState() {
    RATE_BUTTONS.forEach((e)=>{
        e.classList.remove('active')
    });
}


let rate = 0;

RATE_BUTTONS.forEach((e)=>{
    e.addEventListener('click',(element)=>{
        const { target } = element;
        rate = target.innerHTML;
        RemoveActiveState();
        target.classList.add('active');
    });
});

SUBMIT.addEventListener('click',()=>{
    if(rate !== 0){
        document.querySelector('.rate-message').innerHTML = `You selected ${rate} out of 5`
        RATE_BOX.classList.add('hide');
        THANK_YOU_BOX.classList.remove('hide');
    }
});