
'use strict';
import popup from './Popup_gameover.js';
import item_Setting from './game_items.js';
import game_Setting from './game_setting.js';

const timer = document.querySelector(".timer");

const gamePopup = new popup();
const gameItems = new item_Setting();
const gameSetting = new game_Setting();

const carrotSound = new Audio('carrot_pull.mp3');
const bgSound = new Audio('bg.mp3');
const bugSound = new Audio('bug_pull.mp3');
const winSound = new Audio('game_win.mp3');


let carrot_count = 6;
let bug_count = 6;
let time, gamescore =0;


//타이머 작동&배경음악 재생, 화면에서 시작버튼 없에고 재시작 버튼 없애고 점수판 보이게 하기//
function startGame(count){
    gameSetting.button_Disappear();
    gameSetting.score_canSee();
    gamePopup.restart_Disappear();
    gamePopup.result.innerHTML =""

    time = setInterval( function(){
        if(count === 0){
            clearInterval(time);
            finishGame();
            wannaRestart();
            return;
        }
        updateTimer(--count);
        }, 1000
    )

    bgSound.currentTime = 0;
    bgSound.play();
}


function updateTimer(time){
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    timer.innerHTML = `${minutes}:${seconds}`;
}


function stopgameTimer(){
    clearInterval(time);
}


//종료를 선언하고, 타이머를 멈춘 뒤, 게임 결과 출력, 재시작 버튼 출력//
function finishGame(){
    gameSetting.declareOver();
    stopgameTimer();

    if(gameItems.countLeft()) {
        gamePopup.changeText("You LOSE!");
        gameItems.loseEffect(50);
    }
    else gamePopup.changeText("You WIN!");

    gamePopup.restart_canSee();
    bgSound.pause();
    winSound.play();
}


//이미지 랜덤 배치//
function showimage(){    
    gameItems.displayItem(carrot_count, "carrot")
    gameItems.displayItem(bug_count, "bug")
    gameItems.img_canSee();
}


//당근 클릭시 점수 바뀌고 사운드 효과, 클릭한 당근 안보이게 하기//
gameItems.set_carrotListener(()=>{
    carrotSound.play();
    gameSetting.countScore(++gamescore, finishGame, carrot_count);
})


//곤충 클릭시 게임 종료, 결과 출력, 재시작 버튼 출력, 타이머 멈추고 소리도 멈추기//
gameItems.set_bugListener(()=>{
    gamePopup.changeText("You LOSE!");
    gamePopup.restart_canSee();
    gameSetting.declareOver();
    
    stopgameTimer();
    bgSound.pause();
    bugSound.play();
})


//시작 버튼 클릭시 게임 시작//
gameSetting.setListener(()=>{
    gamescore=0;
    startGame(5); 
    showimage(); 
    gameSetting.countScore(0, finishGame, carrot_count);
})


//재시작버튼 클릭시 게임 재시작, 게임 초기화//
gamePopup.setListener(()=>{
    gamescore=0;
    startGame(5); 
    showimage(); 
    gameSetting.countScore(0, finishGame, carrot_count);
})
