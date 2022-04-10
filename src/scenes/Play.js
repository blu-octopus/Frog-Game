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
        this.load.image('water', './assets/water.png');

      }

    create() {
        this.add.text(20, 20, "Rocket Patrol Play");
        
        //place tile sprite tileSprite(x, y, width, height, key string)
       this.water = this.add.tileSprite(0, 0, 640, 480, 'water').setOrigin(0, 0);

        //Top UI background yellow
       this.add.rectangle(0, borderUISize+borderPadding, game.config.width, borderUISize*2, 0xF7DD72).setOrigin(0, 0);

       //borders green
       //rectangle(x, y, width, height, color)
       this.add.rectangle(0, 0, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
    }
    
    update(){
        this.water.tilePositionX -= 4;
    }
}
