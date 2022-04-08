console.log("at Play");
class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
      }

    create() {
        this.add.text(20, 20, "Rocket Patrol Play");
        //Top UI background yellow
       this.add.rectangle(0, borderUISize+borderPadding, game.config.width, borderUISize*2, 0xF7DD72).setOrigin(0, 0);
       //borders green
       //rectangle(x, y, width, height, color)
       this.add.rectangle(0, 0, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
    }
}
