console.log("main");
/**
 * Name: Daphne Cheng
 * Project Title: Froggy
 * 4/18/22
 * Very long
 * 420 hours
 * ---
 * Track a high score that persists across scenes and display it in the UI (5)
 * Randomize each spaceship's movement direction at the start of each play (5)
 * Implement parallax scrolling (10)
 * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
 * Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
 * ---
 * collabrated with Alex Xie
 * ---
 * stop watch icon from https://www.flaticon.com/free-icons/timer
 * bgm https://www.chosic.com/download-audio/28487/
 * sfx
 * all from https://www.mixkit.com
 * 
 */






let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);


//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
//set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

//high score
let highScore = 0;