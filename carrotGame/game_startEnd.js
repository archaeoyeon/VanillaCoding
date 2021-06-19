import popup from './gameover_popup.js';
import item_Setting from './game_items.js';
import game_Setting from './game_setting.js';
import * as sound from './game_sound.js';

const timer = document.querySelector(".timer");

const gamePopup = new popup();
const gameItems = new item_Setting();
const gameSetting = new game_Setting();

let carrot_count = 6;
let bug_count = 6;
let time;


export function startGame(count){
    gameSetting.button_Disappear();
    gameSetting.score_canSee();
    gamePopup.restart_Disappear();
    gamePopup.result.innerHTML =""

    time = setInterval( function(){
        if(count === 0){
            clearInterval(time);
            finishGame();
            return;
        }
        updateTimer(--count);
        }, 1000
    )

    sound.playBg();
}

export function finishGame(){
    gameSetting.declareOver();
    stopgameTimer();

    if(gameItems.countLeft()) {
        gamePopup.changeText("You LOSE!");
        gameItems.loseEffect(50);
    }
    else gamePopup.changeText("You WIN!");

    gamePopup.restart_canSee();
    sound.stopBg();
    sound.playWin();
}

export function showimage(){    
    gameItems.displayItem(carrot_count, "carrot")
    gameItems.displayItem(bug_count, "bug")
    gameItems.img_canSee();
}

export function stopgameTimer(){
    clearInterval(time);
}

function updateTimer(time){
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    timer.innerHTML = `${minutes}:${seconds}`;
}

