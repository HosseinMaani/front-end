const RANDOM_ADVICE_URL = "https://api.adviceslip.com/advice";
const DiceButton = document.querySelector(".dice");
const AdviceIdElement = document.querySelector('.advice-id');
const AdviceTextElement = document.querySelector('.advice-text');

function DiceAnimation(run){
    if(run){
        DiceButton.querySelector('img').classList.toggle('animation');
    }
    else{
        DiceButton.querySelector('img').classList.toggle('animation');
    }
}

async function GetRandomAdviceAsync() {
    let result = await axios.get(RANDOM_ADVICE_URL);
    let {id, advice} = result.data.slip;
    AdviceIdElement.innerHTML = `Advice #${id}`
    AdviceTextElement.innerHTML = `"${advice}"`
  
}

window.addEventListener('load',async ()=>{
    DiceAnimation(true);
    await GetRandomAdviceAsync();
    DiceAnimation(false);
})

DiceButton.addEventListener("click", async () => {
    DiceAnimation(true);
    await GetRandomAdviceAsync();
    DiceAnimation(false);
});
