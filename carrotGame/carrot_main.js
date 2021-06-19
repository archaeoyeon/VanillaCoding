'use strict';
import popup from './gameover_popup.js';
import item_Setting from './game_items.js';
import game_Setting from './game_setting.js';
import * as game_play from './game_startEnd.js';
import * as sound from './game_sound.js';


const gamePopup = new popup();
const gameItems = new item_Setting();
const gameSetting = new game_Setting();


let carrot_count = 6;
let gamescore =0;


//시작 버튼 클릭시 게임 시작//
gameSetting.setListener(()=>{
    gamescore=0;
    game_play.startGame(5); 
    game_play.showimage(); 
    gameSetting.countScore(0, game_play.finishGame, carrot_count);
})


//재시작버튼 클릭시 게임 재시작, 게임 초기화//
gamePopup.setListener(()=>{
    gamescore=0;
    game_play.startGame(5); 
    game_play.showimage(); 
    gameSetting.countScore(0, game_play.finishGame, carrot_count);
})


//당근 클릭시 점수 바뀌고 사운드 효과, 클릭한 당근 안보이게 하기//
gameItems.set_carrotListener(()=>{
    sound.playCarrot();
    gameSetting.countScore(++gamescore, game_play.finishGame, carrot_count);
})


//곤충 클릭시 게임 종료, 결과 출력, 재시작 버튼 출력, 타이머 멈추고 소리도 멈추기//
gameItems.set_bugListener(()=>{
    gamePopup.changeText("You LOSE!");
    gamePopup.restart_canSee();
    gameSetting.declareOver();
    
    game_play.stopgameTimer();
    sound.stopBg();
    sound.playBug();
})
