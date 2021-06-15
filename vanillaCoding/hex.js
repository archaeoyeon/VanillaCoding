const core = document.querySelector(".core"),
    colorcode = core.querySelector("span"),
    click = core.querySelector("input");


function hexGenerator() {
    const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F'];
  
    let result = "#";
    
    for (let i = 0; i < 6; i ++) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[randomIndex];
    }
    
  return result;
}

function changeBackground(hexCode){
  core.style.backgroundColor = hexCode;
}

function changeText (text){
  colorcode.innerHTML = `: ${text}`;
  changeBackground(text);
}

function action(){
  changeText(hexGenerator());
}

function clickButton(){
  click.addEventListener("click", action); 
}

clickButton();
