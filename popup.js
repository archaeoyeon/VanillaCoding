export default class popup{
    constructor(){
        this.restart =document.querySelector(".restart");
        this.result = document.querySelector(".result");
        this.restart_Disappear = this.restart_Disappear.bind(this);
        this.restart.addEventListener("click", ()=>{
            this.onClick && this.onClick();
            this.restart_Disappear();
        });
    }

    setListener(doThis){
        this.onClick = doThis;
    }

    changeText(text){
        this.result.innerHTML = text;
        this.result.classList.remove("selected_hidden");
    }

    restart_Disappear(){
        this.restart.classList.remove("selected");
    }

    restart_canSee(){
        this.restart.classList.add("selected");
    }

}