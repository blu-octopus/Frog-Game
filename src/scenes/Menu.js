class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.spritesheet('screen', './assets/titleScreen.png', {frameWidth: 640, frameHeight: 480, startFrame: 0, endFrame: 1});
        this.load.image('noFroggo', './assets/screen.jpg');
        // load audio
        this.load.audio('sfx_select', './assets/IDKNoise.wav');
        this.load.audio('sfx_explosion', './assets/EatNoise.mp3');
        this.load.audio('sfx_eat', './assets/ummNummNoise.wav');

        this.load.audio('sfx_rocket', './assets/jump.wav');
        this.load.audio('sfx_gameOver', './assets/gameOverNoise.wav');

        this.load.audio('bgm', './assets/bgm.mp3');
        //this.sound.play('bgm');


    }

    create() {

        //this.BGM = this.sound.add('bgm');
        //this.BGM.play();
        this.noFrog = this.add.tileSprite(0, 0, 640, 480, 'noFroggo').setOrigin(0, 0);
        this.noFrog.tilePositionX = 0;

        //this.titlee = (this, game.config.width + borderUISize*6, borderUISize*4, 'screen', 0, 30).setOrigin(0, 0);



        let menuConfig = {
            fontFamily: 'Courier',
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
        this.add.text(game.config.width/2, game.config.height/2, "Use <- -> & (SPACE)", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#A5C882';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "press <- for EASY or -> for HARD", menuConfig).setOrigin(0.5);
        //this.scene.start("playScene");

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.sound.play('bgm');

    //     this.anims.create({
    //         key: 'title',
    //         frames: this.anims.generateFrameNumbers('scene', { start: 0, end: 1, first: 0}),
    //         frameRate: 5
    //    });


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

        //this.anims.play('title');




    }
}
