export default class game_control{
    constructor(){
        this.start = document.querySelector(".start");
        this.timer = document.querySelector(".timer");
        this.score = document.querySelector(".score");
        this.button_Disappear = this.button_Disappear.bind(this);
        this.start.addEventListener("click", ()=>{
            this.onClick && this.onClick();
            this.button_Disappear();
        })
    }

    setListener(doThis){
        this.onClick = doThis;
    }

    button_Disappear(){
        this.start.classList.add("selected_hidden");
    }

    score_canSee(){
        this.score.classList.remove("selected_hidden");
    }

    countScore(gamescore, doThis, count){
        this.score.innerHTML = count - gamescore;
        if(gamescore === count) doThis();
    }

    declareOver(){
        this.timer.innerHTML = "Game Over";
    }
}