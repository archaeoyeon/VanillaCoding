const start = document.querySelector(".start");
const submit = document.querySelector(".submit"),
    input = submit.querySelector("input");

const result = document.querySelector(".result");
const randomresult = document.querySelector(".randomresult");
const inning = document.querySelector(".inning");

start.addEventListener("click", createNum);

let count = 0;

function createNum(){

    if (count >9){
        alert("Game over");
        start.value = "restart"
        count = 0;
        
    }
    count ++;
    inning.innerHTML = `Inning ${count}`;
    let randomNum = Math.floor(Math.random()*1000);
    localStorage.setItem("randomNum", randomNum);
    submit.addEventListener("submit", submitNum);
    
}


function submitNum(event){
    start.value = "start"
    event.preventDefault();
    const submitedNum = input.value;
    if(submitedNum.length != 3 ){
        alert ("Please.. I said 3!!");
    } else{
    saveNum(submitedNum);
    compareNum();
    }
}

function saveNum(submitedNum){
    localStorage.setItem("submitedNum", submitedNum);
}

function compareNum(){
    const resultRandom = localStorage.getItem("randomNum");
    const resultSubmitted = localStorage.getItem("submitedNum")
    let strikeCount = 0,
        ballCount = 0;
    for( let i = 0 ; i<3 ; i++){
    if (resultRandom[i] == resultSubmitted[i]){
        strikeCount++ ;
    } else {
        ballCount++ ;
    }
}
    result.innerHTML = `${strikeCount} Strike!, ${ballCount} Ball~` ;
    randomresult.innerHTML = `Computer: ${resultRandom}`;
}


