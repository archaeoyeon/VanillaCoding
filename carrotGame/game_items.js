const main = document.querySelector(".main");
const mainRect = main.getBoundingClientRect();

let carrot_size = 80;

const x1=0;
const y1=0;
const x2=mainRect.width - carrot_size;
const y2=mainRect.height - carrot_size;


function randomNumber(min, max){
    return Math.random() * (max-min)+min ;
}


export default class item_setting{
    constructor(){
        this.carrot = document.querySelectorAll(".carrot");
        this.bug = document.querySelectorAll(".bug");

        this.click_Carrot = this.clickCarrot.bind(this);
        this.loseGame_bug = this.loseGame_bug.bind(this);

        this.carrot.forEach((each)=> each.addEventListener("click", ()=>{
            this.onClick_carrot && this.onClick_carrot();
            this.click_Carrot(each)
        }))
        this.bug.forEach((each) =>each.addEventListener("click", ()=>{
            this.onClick_bug && this.onClick_bug();
            this.loseGame_bug();
        }))
    }


    set_carrotListener(doThis){
        this.onClick_carrot = doThis;
    }

    set_bugListener(doThis){
        this.onClick_bug = doThis;
    }

    //아이템 랜덤배치//
    displayItem(num, name){
        const Item = document.querySelectorAll(`.${name}`);
        for(let i = 0 ; i<num; i++){
            let randomX = randomNumber(x1, x2);
            let randomY = randomNumber(y1, y2);
            Item[i].style.top = randomY + 'px';
            Item[i].style.left = randomX + 'px';
            Item[i].style.userDrag = 'none';
        }
    }

    img_canSee(){
        this.carrot.forEach((each)=>each.classList.add("selected"));
        this.bug.forEach((each)=>each.classList.add("selected"));
    }

    clickCarrot(each){
        each.classList.remove("selected");
    }



    loseGame_bug(){
        this.carrot.forEach((each)=>each.classList.remove("selected"));
        this.bug.forEach((each)=>each.classList.remove("selected"));
    }

    //게임 종료 후 남은 당근 개수 세기//
    countLeft(){
        for(let i = 0 ; i<this.carrot.length ; i++){
            if(this.carrot[i].classList.contains("selected") || !this.bug[i].classList.contains("selected")){
                return true;
            }
        }
        return false;
    }

    //졌을때 당근 사라지고 곤충 늘리기//
    loseEffect(num){
        this.carrot.forEach((each)=>each.classList.remove("selected"));
        
        for(let i = 0 ; i<num ; i++){
            const buggie = document.createElement('img');
            buggie.setAttribute('class', "fail bug selected");
            buggie.setAttribute('src', "bug.png");
            buggie.style.position='absolute';
            main.appendChild(buggie);

            let randomX = randomNumber(x1, x2);
            let randomY = randomNumber(y1, y2);
            buggie.style.top = randomY + 'px';
            buggie.style.left = randomX + 'px';
            buggie.style.userDrag = 'none';
        }
    }
}
