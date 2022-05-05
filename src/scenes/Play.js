console.log("at Play");
class Play extends Phaser.Scene{

    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
<<<<<<< HEAD
        this.load.image('rocket', './assets/singleFrog.png');
        this.load.image('clock', './assets/stopwatch.png');
        this.load.image('lilyPad', './assets/lilyPad.png');


        //this.load.image('moving', './assets/FrogMoving.png');
        //this.load.image('spaceship', './assets/FlyNew-modified.png');
        
        this.load.spritesheet('fly', './assets/fly_moving.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 1});
        this.load.spritesheet('move', './assets/FrogMoving.png', {frameWidth: 58, frameHeight: 66, startFrame: 0, endFrame: 1});
        this.load.spritesheet('idle', './assets/FrogIdle.png', {frameWidth: 73, frameHeight: 53, startFrame: 0, endFrame: 1});

        //parallex
        this.load.image('bg', './assets/bg.png');
        this.load.image('lowerWave', './assets/lowerWave.png');
        this.load.image('topWave', './assets/topWave.png');

        //this.load.image('water', './assets/water.png');
                     
        //load spritesheet()
        //asset name, asset file name, {frame width, frame height, start frame, end frame}
        //assume all frames are the same
        this.load.spritesheet('explosion', './assets/frogEat.png', {frameWidth: 73, frameHeight: 53, startFrame: 0, endFrame: 9});
=======
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('water', './assets/water.png');
>>>>>>> parent of ff4556f (should be done!)

      }

    create() {
        this.add.text(20, 20, "froggy");

        // BGM
        this.BGM = this.sound.add('bgm');
        this.BGM.play();
        
        //place tile sprite tileSprite(x, y, width, height, key string)
       this.water = this.add.tileSprite(0, 0, 640, 480, 'bg').setOrigin(0, 0);
       this.lowerWave = this.add.tileSprite(0, 0, 640, 480, 'lowerWave').setOrigin(0, 0);
       this.topWave = this.add.tileSprite(0, 0, 640, 480, 'topWave').setOrigin(0, 0);

        //Top UI background yellow
       this.add.rectangle(0, borderUISize+borderPadding -15, game.config.width, borderUISize*3, 0xF7DD72).setOrigin(0, 0);

       //borders green
       //rectangle(x, y, width, height, color)
       this.add.rectangle(0, 0, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(0, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
       this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x4E6766).setOrigin(0, 0);
<<<<<<< HEAD

       // add lilypad
       this.lilypad = this.add.image(game.config.width/2, game.config.height/2 + borderUISize*5 + borderPadding*5, 'lilyPad');
       
       // add rocket (p1)
       this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize*2 - borderPadding*2, 'rocket').setOrigin(0.5, 0);



       //add spaceships (x3)
       this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'fly', 0, 30).setOrigin(0, 0);
       this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'fly', 0, 20).setOrigin(0,0);
       this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'fly', 0, 10).setOrigin(0,0);

       //define keys
       keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
       keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
       keyLEFT  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

       //animation config
       this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
       });
       this.anims.create({
            key: 'flying',
            frames: this.anims.generateFrameNumbers('fly', { start: 0, end: 1, first: 0}),
            frameRate: 5,
            repeat: -1
        });       
        // this.anims.create({
        //     key: 'rocketing',
        //     frames: this.anims.generateFrameNumbers('rocket', { start: 0, end: 1, first: 0}),
        //     frameRate: 5,
        //     repeat: -1
        // });
        this.anims.create({
            key: 'moving',
            frames: this.anims.generateFrameNumbers('move', { start: 0, end: 1, first: 0}),
            frameRate: 5,
            repeat: -1
        });
        this.ship01.anims.play('flying');
        this.ship02.anims.play('flying');
        this.ship03.anims.play('flying');

       this.anims.create({
            key: 'idling',
            frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 1, first: 0}),
            frameRate: 5,
            repeat:-1
        });       
        this.anims.create({
            key: 'moving',
            frames: this.anims.generateFrameNumbers('move', { start: 0, end: 1, first: 0}),
            frameRate: 5,
            repeat: -1
        });
        this.p1Rocket.anims.play('idling');


       //initialize score
       this.p1Score = 0;

         // display score
         this.scoreConfig = {
            fontFamily: 'Cursive',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding + 60, borderUISize + borderPadding*2, this.p1Score, this.scoreConfig);
        this.curScoreText = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2 , 'SCORE:', this.scoreConfig).setOrigin(0);
        // let greenConfig = {
        //     fontFamily: 'Courier',
        //     fontSize: '28px',
        //     backgroundColor: '#A5C882',
        //     color: '#000',
        //     align: 'right',
        //     padding: {
        //     top: 5,
        //     bottom: 5,
        //     },
        //     fixedWidth: 180
        // }   
        //change this.scoreConfig color
        //high score score
        this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding - 100, borderUISize + borderPadding*2, this.p1Score, this.scoreConfig);
        //change this.scoreConfig fixed width
        this.scoreConfig.fixedWidth = 150;
        //
        this.highscoreText = this.add.text(game.config.width - borderUISize - borderPadding - 210, borderUISize + borderPadding*2, 'HI SCORE:', this.scoreConfig).setOrigin(0);
        //revert back to this.scoreConfig
        this.scoreConfig.backgroundColor = '#F3B141';
        this.scoreConfig.color = '#843605';
        this.scoreConfig.fixedWidth = 100;



        //GAME OVER flag
        this.gameOver = false;
        
        // 60-second play clock
        // this.clock = this.time.delayedCall(60, () => {
        //     if(this.timeLeft <= 0){
        //         if (this.p1Score > highScore){
        //             highScore = this.p1Score;
        //         }
        //         this.add.text(game.config.width/2, game.config.height/2, 'GAME END', this.scoreConfig).setOrigin(0.5);
        //         this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or <- for Menu', this.scoreConfig).setOrigin(0.5);
        //         this.gameOver = true;
        //         this.sound.play('sfx_gameOver');

        //     }
        // }, null, this);

        //timer
        this.scoreConfig.backgroundColor = '#A5C882';
        this.scoreConfig.color = '#000';

        this.timeLeft = 1800;
        this.timeMid = this.add.text(game.config.width/2 - this.scoreConfig.fixedWidth/2 - 20, borderUISize + borderPadding*2, this.timeLeft, this.scoreConfig);
        this.timerImage = this.add.image(game.config.width/2 - this.scoreConfig.fixedWidth/2 , borderUISize + borderPadding*2 +2, 'clock').setOrigin(0);
        this.timerImage.setScale(.07);


    }
    
    update(){
 
    // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.BGM.destroy();
            this.scene.restart();
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.BGM.destroy();
            this.scene.start("menuScene");
        }

        this.scoreConfig.fixedWidth = 0;
        this.scoreConfig.backgroundColor = '#A5C882';

        this.lilypad.x = this.p1Rocket.x;

        if(this.timeLeft <= 0 && !this.gameOver){
            //end page
            this.noFrog = this.add.image(this.x, this.y, 'noFroggo').setOrigin(0, 0);
            this.anims.create({
                key: 'bigFroggo',
                frames: this.anims.generateFrameNumbers('bigFrog', { start: 0, end: 1, first: 0}),
                frameRate: 5,
                repeat: -1
            });
            this.bigFrog = this.add.sprite(game.config.width/2 , game.config.height/2 +64, 'bigFrog');
            this.bigFrog.play('bigFroggo');

            this.scoreConfig.backgroundColor = '#F3B141';
            this.scoreConfig.color = '#843605';
            //this.scoreConfig.fixedWidth = 100;
            this.add.text(game.config.width/2, game.config.height/3 + 32, 'Your Score is', this.scoreConfig).setOrigin(0.5);
            this.scoreEnd = this.add.text(game.config.width/2, game.config.height/2 - 32, this.p1Score, this.scoreConfig).setOrigin(0);

            if (this.p1Score > highScore){
                highScore = this.p1Score;
            }

            //this.scoreConfig.fontSize = 'px60';
            this.scoreConfig.backgroundColor = '#A5C882';
            this.scoreConfig.color = '#000';
            this.add.text(game.config.width/2, game.config.height/4, 'GAME END', this.scoreConfig).setOrigin(0.5);
            //this.scoreConfig.fontSize = 'px28';
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', this.scoreConfig).setOrigin(0.5);
            this.gameOver = true;
            this.sound.play('sfx_gameOver');

        }

        //this.sound.play('bgm');


        this.water.tilePositionX = 0;
        this.lowerWave.tilePositionX -= 0.5;
        this.topWave.tilePositionX -= 1;


        this.p1Rocket.update();

        //update spaceships (x3)
        this.ship01.update();            
        this.ship02.update();
        this.ship03.update();
        
        //reduce displayed time
        if (this.timeLeft > 0) {
            this.timeLeft -= 1;
            this.timeMid.text = Math.floor(this.timeLeft / 60);
        }

        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }   

        if (!this.gameOver) {               
            this.p1Rocket.update();         // update rocket sprite
            this.ship01.update();           // update spaceships (x3)
            this.ship02.update();
            this.ship03.update();
        } 
    }

    checkCollision(rocket, ship){
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
            } else {
                return false;
        }
    }

    shipExplode(ship){
        //add time to timer
        this.timeLeft += 50;

        // temporarily hide ship
        ship.alpha = 0;
        this.p1Rocket.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(this.p1Rocket.x - this.p1Rocket.width/2, ship.y, 'explosion').setOrigin(0, 0);
        //play add time text
        this.scoreConfig.backgroundColor= '#00F3B141';
        let addTime = this.add.text(this.p1Rocket.x + this.p1Rocket.width/2, ship.y, '+ time!', this.scoreConfig).setOrigin(0);

        //play explode animation
        boom.anims.play('explode');
        //callback after animation omplete
        boom.on('animationcomplete', () => {
            //reset ship position
            ship.reset();
            //make ship visible again (transparency)
            ship.alpha = 1;
            this.p1Rocket.alpha = 1;
            //remove explosion sprite
            boom.destroy();
            addTime.destroy();
        });

        // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        
        //eating noise
        this.sound.play('sfx_explosion', {volume: 5});
        this.sound.play('sfx_eat', {volume: 10});
        //this.sound.play('sfx_yeahNoise');                                              
    }

}

//uwu
=======
    }
    
    update(){
        this.water.tilePositionX -= 4;
    }
}
>>>>>>> parent of ff4556f (should be done!)
