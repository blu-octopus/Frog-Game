class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        //add to existing scene
        scene.add.existing(this);
        //store pointValue
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    //position reset
    reset(){
        this.x = game.config.width;
    }
}