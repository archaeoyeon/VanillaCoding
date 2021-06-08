
'use strict';
import popup from './popup.js';
import main_field from './game_main.js';
import game_control from './game_control.js';

const main = document.querySelector(".main");
const timer = document.querySelector(".timer");

const gameBanner = new popup();
const gameMain = new main_field();
const gameControl = new game_control();

const carrotSound = new Audio('carrot_pull.mp3');
const bgSound = new Audio('bg.mp3');
const bugSound = new Audio('bug_pull.mp3');
const winSound = new Audio('game_win.mp3');

let carrot_size = 80;
let carrot_count = 6
let time, gamescore =0;

//타이머 작동&배경음악 재생, 화면에서 시작버튼 없에고 재시작 버튼 없애고 점수판 보이게 하기//
function startGame(count){
    gameControl.button_Disappear();
    gameControl.score_canSee();
    gameBanner.restart_Disappear();
    gameBanner.result.innerHTML =""

    time = setInterval( function(){
    if(count === 0){
        clearInterval(time);
        finishGame();
        wannaRestart();
        return;
    }
    updateTimer(--count);
    }, 1000)

    bgSound.currentTime = 0;
    bgSound.play();
}


function updateTimer(time){
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    timer.innerHTML = `${minutes}:${seconds}`;
}


//종료를 선언하고, 타이머를 멈춘 뒤, 게임 결과 출력, 재시작 버튼 출력//
function finishGame(){
    gameControl.declareOver();
    stopgameTimer();

    if(gameMain.showResult()) gameBanner.changeText("You LOSE!");
    else gameBanner.changeText("You WIN!");

    wannaRestart();
    bgSound.pause();
    winSound.play();
}


function stopgameTimer(){
    clearInterval(time);
}


function wannaRestart(){
    gameBanner.restart_canSee();
}


const mainRect = main.getBoundingClientRect();

//이미지 랜덤 배치//
function showimage(){
    gamescore=0;
    const x1=0;
    const y1=0;
    const x2=mainRect.width - carrot_size;
    const y2=mainRect.height - carrot_size;

    gameMain.displayCarrot(x1, x2, y1, y2);
    gameMain.displayBug(x1, x2, y1, y2);

    gameMain.img_canSee();
}


//당근 클릭시 점수 바뀌고 사운드 효과, 클릭한 당근 안보이게 하기//
gameMain.set_carrotListener(()=>{
    carrotSound.play();
    gameControl.countScore(++gamescore, finishGame, carrot_count);
})

//곤충 클릭시 게임 종료, 결과 출력, 재시작 버튼 출력, 타이머 멈추고 소리도 멈추기//
gameMain.set_bugListener(()=>{
    gameBanner.changeText("You LOSE!");
    gameBanner.restart_canSee();
    gameControl.declareOver();
    
    stopgameTimer();
    bgSound.pause();
    bugSound.play();
})


//시작 버튼 클릭시 게임 시작//
gameControl.setListener(()=>{
    startGame(5); 
    showimage(); 
    gameControl.countScore(0, finishGame, carrot_count);
})


//재시작버튼 클릭시 게임 재시작, 게임 초기화//
gameBanner.setListener(()=>{
    startGame(5); 
    showimage(); 
    gameControl.countScore(0, finishGame, carrot_count);
})