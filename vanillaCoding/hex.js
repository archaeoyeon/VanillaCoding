const core = document.querySelector(".core"),
    colorcode = core.querySelector("span"),
    click = core.querySelector("input");

function hexGenerator() {
    const hexNumbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ];
  
    let result = "#";
    
    for (var i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[randomIndex];
    }
    
    return result;
  }



  function changebackground(){
      core.style.backgroundColor = hexGenerator();

  }

  function changetext (text){
      colorcode.innerHTML = `${text}`;
      changebackground(text);
  }

  function action(event){
    event.preventDefault();
    changetext(hexGenerator());
    
  }

  function Clickbutton(){
    click.addEventListener("click", action); 
}

  function init (){
    Clickbutton();
    hexGenerator()
  }

  init()
