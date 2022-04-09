const num = document.getElementById("num")
const btn_decrease = document.getElementById("decrease")
const btn_reset = document.getElementById("reset")
const btn_increase = document.getElementById("increase")

const btn_mores = document.querySelectorAll(".more")

btn_decrease.addEventListener('click',decrease)
btn_reset.addEventListener('click',reset)
btn_increase.addEventListener('click',increase)


function decrease(){
    num.textContent = parseInt(num.textContent) -1;
    if(num.textContent < 0){
        num.style.color = "red"
    }
}

function reset(){
    num.textContent = 0;
    num.style.color = "black"
}

function increase(){
    num.textContent = parseInt(num.textContent) +1;
    if(num.textContent > 0){
        num.style.color = "blue"
    }
}

btn_mores.forEach(btn_more => {
    btn_more.addEventListener('click',()=>{
        if(btn_more.textContent === "+5"){
            num.textContent = parseInt(num.textContent) +5;
        }
        if(btn_more.textContent === "-5"){
            num.textContent = parseInt(num.textContent) -5;
        }
        if(btn_more.textContent === "+10"){
            num.textContent = parseInt(num.textContent) +10;
        }
        if(btn_more.textContent === "-10"){
            num.textContent = parseInt(num.textContent) -10;
        }
    
        if(num.textContent > 0){
            num.style.color = "blue"
        }else if(num.textContent==="0"){
            num.style.color = "black"
        }else{
            num.style.color = "red"
        }
    })
});

