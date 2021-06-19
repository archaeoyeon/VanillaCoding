const carrotSound = new Audio('carrot_pull.mp3');
const bgSound = new Audio('bg.mp3');
const bugSound = new Audio('bug_pull.mp3');
const winSound = new Audio('game_win.mp3');

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }

  export function playCarrot() {
    playSound(carrotSound);
  }
  
  export function playBug() {
    playSound(bugSound);
  }
  
  export function playWin() {
    playSound(winSound);
  }
    
  export function playBg() {
    playSound(bgSound);
  }
  
  export function stopBg() {
    bgSound.pause();
  }
  