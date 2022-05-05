console.log("at menu");
class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

<<<<<<< HEAD
    preload() {
        this.load.spritesheet('screen', './assets/titleScreen.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 1});
        this.load.spritesheet('bigFrog', './assets/frogBig.png', {frameWidth: 290, frameHeight: 215, startFrame: 0, endFrame: 1});
        this.load.image('noFroggo', './assets/screen.jpg');
        // load audio
        this.load.audio('sfx_select', './assets/IDKNoise.wav');
        this.load.audio('sfx_explosion', './assets/EatNoise.mp3');
        this.load.audio('sfx_eat', './assets/ummNummNoise.wav');

        this.load.audio('sfx_rocket', './assets/jump.wav');
        this.load.audio('sfx_gameOver', './assets/gameOverNoise.wav');
        this.load.audio('sfx_yeahNoise', './assets/YeahNoise.wav');

        this.load.audio('bgm', './assets/bgm.mp3');
        //this.sound.play('bgm');


    }

    create() {


        this.noFrog = this.add.tileSprite(0, 0, 640, 480, 'noFroggo').setOrigin(0, 0);
        this.noFrog.tilePositionX = 0;

        //this.titlee = (this, game.config.width + borderUISize*6, borderUISize*4, 'screen', 0, 30).setOrigin(0, 0);
        this.anims.create({
            key: 'bigFroggo',
            frames: this.anims.generateFrameNumbers('bigFrog', { start: 0, end: 1, first: 0}),
            frameRate: 5,
            repeat: -1
       });

       this.bigFrog = this.add.sprite(game.config.width/2 , game.config.height/2 +64, 'bigFrog');
       this.bigFrog.play('bigFroggo');

        let menuConfig = {
            fontFamily: 'Cursive',
            fontSize: '60px',
            backgroundColor: '#F7DD72',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text

        this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, "Froggy", menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding*2 +16, "Use ← → & (SPACE)", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#A5C882';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*3 +16, "press ← for EASY or → for HARD", menuConfig).setOrigin(0.5);
        //this.scene.start("playScene");

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                timeLeft: 60000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5,
                timeLeft: 18000    
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }


=======
    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
>>>>>>> parent of ff4556f (should be done!)
    }
}
