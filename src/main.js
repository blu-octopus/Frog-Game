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
 * 
 * bonus:
 * lily pad that moves with frog's x, and stay there
 * title and game over screen, animated
 * rocket's sprite change after firing
 * rocket and spaceshift animated
 * flash text of "+time!" during collision
 * end screen showing player's score
 * sad sfx when game over
 *
 * ---
 * collabrated with Alex Xie
 * ---
 * stop watch icon from https://www.flaticon.com/free-icons/timer
 * bgm https://www.chosic.com/download-audio/28487/
 * all sfx from https://www.mixkit.com
 * base code froom rocket patrol tutorial
 * ---
 * things I want to add:
 * frog falling down after jumping up
 * smoother frog explosion
 * new enemies that is not flies
 * 
 */






let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);
//set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

//high score
let highScore = 0;