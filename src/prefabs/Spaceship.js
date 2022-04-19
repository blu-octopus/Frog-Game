class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        //add to existing scene
        scene.add.existing(this);
        //store pointValue
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.direction = 2*Math.random();

    }
    update() {
        //move spaceship left
        if (this.direction <= 1){
            this.x -= this.moveSpeed;
        }else{
            this.x += this.moveSpeed;
        }
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
        if(this.x >= game.config.width + this.width){
            this.x = 0;
        }
    }

    //position reset
    reset(){
        this.x = game.config.width;
    }
}
//SOS