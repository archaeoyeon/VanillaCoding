export default class main_field{
    constructor(){
        this.carrot = document.querySelectorAll(".carrot");
        this.bug = document.querySelectorAll(".bug");
        this.clickCarrot = this.clickCarrot.bind(this);
        this.gameover = this.gameover.bind(this);
        for(let i = 0 ; i<this.carrot.length; i++){
             this.carrot[i].addEventListener("click",()=>{
                  this.onClick_carrot && this.clickCarrot(i);
                  this.onClick_carrot();
             })

             this.bug[i].addEventListener("click", ()=>{
                 this.onClick_bug && this.onClick_bug();
                 this.gameover();
             })
        }
    }

    set_carrotListener(doThis){
        this.onClick_carrot = doThis;
    }

    set_bugListener(doThis){
        this.onClick_bug = doThis;
    }

    displayCarrot(x1,x2,y1,y2){
        for(let i = 0 ; i<this.carrot.length; i++){
            let randomX = randomNumber(x1, x2);
            let randomY = randomNumber(y1, y2);
            this.carrot[i].style.top = randomY + 'px';
            this.carrot[i].style.left = randomX + 'px';
        }
    }

    displayBug(x1,x2,y1,y2){
        for(let i = 0 ; i<this.bug.length; i++){
            let randomX = randomNumber(x1, x2);
            let randomY = randomNumber(y1, y2);
            this.bug[i].style.top = randomY + 'px';
            this.bug[i].style.left = randomX + 'px';
        }
    }


    img_canSee(){
        for(let i =0; i<this.carrot.length ; i++){
        this.carrot[i].classList.add("selected");
        this.bug[i].classList.add("selected");
        }
    }

    clickCarrot(i){
        this.carrot[i].classList.remove("selected");
    }

    gameover(){
        for(let i =0; i<this.carrot.length ; i++){
            this.carrot[i].classList.remove("selected");
            this.bug[i].classList.remove("selected");
            }
    }

    showResult(){
        for(let i = 0 ; i<this.carrot.length ; i++){
            if(this.carrot[i].classList.contains("selected") || !this.bug[i].classList.contains("selected")){
                return true;
            }
        }
        return false;
    }
}

function randomNumber(min, max){
    return Math.random() * (max-min)+min ;
}