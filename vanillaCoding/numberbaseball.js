const start = document.querySelector(".start");
const submit = document.querySelector(".submit"),
    input = submit.querySelector("input");

const result = document.querySelector(".result");
const randomresult = document.querySelector(".randomresult");
const inning = document.querySelector(".inning");

start.addEventListener("click", createNum);


let count = 0;
function createNum(){
    let randomNum = Math.floor(Math.random()*1000).toString().padStart(3,0);
    localStorage.setItem("randomNum", randomNum);
    gameSetting();
}

function gameSetting(){
    if (count >8){
        gameOver();
    } 
    else{
        count ++;
        inning.innerHTML = `Inning ${count}`;
        result.innerHTML = "";
        randomresult.innerHTML = "";
        input.value="";
        start.value = "Inning Change";
        submit.classList.remove("hidden");
        submit.addEventListener("submit", submitNum);
    }
}

function gameOver(){
    inning.innerHTML = "Game over";
    submit.classList.add("hidden");
    start.value = "restart"
    result.innerHTML = ""
    count = 0;
}

function submitNum(event){
    event.preventDefault();
    const submitedNum = input.value;
    if(submitedNum.length != 3 ){
        alert ("Please.. throw 3 Numbers");
    } 
    else{
        saveNum(submitedNum);
        compareNum();
    }
}

function saveNum(userInput){
    localStorage.setItem("userInput", userInput);
}

function compareNum(){
    const randomNum = localStorage.getItem("randomNum");
    const userInput = localStorage.getItem("userInput");
    let strikeCount = 0, ballCount = 0;

    for( let i = 0 ; i<3 ; i++){
        if (randomNum[i] === userInput[i]){
            strikeCount++;
        } 
        else {
            ballCount++ ;
        }
    }

    result.innerHTML = `<span class="strike"> ${strikeCount}</span> Strike! <span class="ball">${ballCount}</span> Ball~` ;
    randomresult.innerHTML = `Computer: ${randomNum}`;
}
