// Rocket prefab
console.log("at rockey");
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      //track rocket's firing status
      this.isFiring = false;
      //pixels per frame
      this.moveSpeed = 2;

      //add rocket sfx
      this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update(){
      //left right movement
      if(!this.isFiring){
        if(keyLEFT.isDown && this.x >= borderUISize + this.width){
          this.x -= this.moveSpeed;
        }else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
          this.x += this.moveSpeed;
        }
      }

      //fire button
      if(Phaser.Input.Keyboard.JustDown(keyF)){
        this.isFiring = true;
        this.anims.stop();
        this.setTexture('move');
        this.anims.play('moving');

        //change sprite hopefully
        
        //this.rocket.texture = 'moving';


        //play rocket fire sfx
        this.sfxRocket.play(); 
      }

      //if fired, move up
      if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
        this.y -= this.moveSpeed;
      }

      //reset on miss
      if(this.y <= borderUISize * 3 + borderPadding){
        this.isFiring = false;
        this.y = game.config.height - borderUISize*2 - borderPadding*2;
        
        this.setTexture('idle');
        this.anims.play('idling');
      }
    }

    //reset rocket  to "ground"
    reset() {
      this.isFiring = false;
      //game.config.width/2, game.config.height - borderUISize - borderPadding*2
      this.y = game.config.height - borderUISize*2 - borderPadding*2;
      this.setTexture('idle');
      this.anims.play('idling');

    }

  }