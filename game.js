//first level
class Lvl1 extends Phaser.Scene
{
    platform1;
    cursors;
    platforms;
    player;
    constructor (){
      super({key: 'Lvl1'})
    }
    preload ()
    {
        this.load.spritesheet('ballMan', 'assets/playerSheet.png', { frameWidth: 70, frameHeight: 70 });
        this.load.image('endGoal', 'assets/endGoal.png')
    }
    createRect(x, y, width, height) {
      let temp=this.add.rectangle(x, y, width, height, 0x000000)
      this.platforms.add(temp)
      return temp
    }
    collisionHandler(obj1, obj2) {
      this.scene.start('Lvl2')
      console.log("Collision Occurred!")
    }
    create ()
    {
      //platforms
      this.platforms = this.physics.add.staticGroup();

        this.ground = this.createRect( 0, window.innerHeight-10, window.innerWidth*2, 100)
        this.platform1 = this.add.rectangle(window.innerWidth-1400, window.innerHeight-190, 400, 25, 0x000000)
        this.platforms.add(this.platform1)
        this.platform2 = this.createRect(window.innerWidth-1100, window.innerHeight-340, 400, 25)
        this.platform3 = this.createRect(window.innerWidth-400, window.innerHeight-490, 490*2, 25)
        //finish
        this.goal = this.physics.add.sprite(window.innerWidth-68, window.innerHeight-590+38, 'endGoal')
        this.goal.setImmovable(true)
        this.goal.body.allowGravity = false

        //player
        this.player = this.physics.add.sprite(100, window.innerHeight-110, 'ballMan');

        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('ballMan', { start: 7, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'ballMan', frame: 0 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('ballMan', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.platform1);
        this.keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O)
        this.physics.add.overlap(this.player, this.goal, this.collisionHandler, null, this);
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
        if (this.keyO.isDown){
          this.scene.start('Lvl4')
        }
    }

}
//second level
class Lvl2 extends Phaser.Scene
{
  platform1;
  cursors;
  platforms;
  player;
  constructor (){
    super({key: 'Lvl2'})
  }
  preload ()
  {
      this.load.spritesheet('ballMan', 'assets/playerSheet.png', { frameWidth: 70, frameHeight: 70 });
      this.load.image('endGoal', 'assets/endGoal.png')
  }
  createRect(x, y, width, height) {
    let temp=this.add.rectangle(x, y, width, height, 0x000000)
    this.platforms.add(temp)
    return temp
  }
  collisionHandler(obj1, obj2) {
    this.scene.start('Lvl3')
    console.log("Collision Occurred!")
  }
  create ()
  {
    this.platforms = this.physics.add.staticGroup();
    //platforms
    this.ground = this.createRect( 0, window.innerHeight-10, window.innerWidth*2, 100)
    this.platform1 = this.createRect(window.innerWidth/2, window.innerHeight-190, 400, 25)
    this.platform2 = this.createRect(window.innerWidth/2, window.innerHeight-340, 400, 25)
    this.platform3 = this.createRect(window.innerWidth/2, window.innerHeight-490, 400, 25)
    this.platform4 = this.createRect(window.innerWidth/2, window.innerHeight-640, 400, 25)
    //finish
    this.goal = this.physics.add.sprite(window.innerWidth/2, window.innerHeight-740+38, 'endGoal')
    this.goal.setImmovable(true)
    this.goal.body.allowGravity = false

    //player
    this.player = this.physics.add.sprite(100, window.innerHeight-110, 'ballMan');

    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 7, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'ballMan', frame: 0 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platform1);

    this.physics.add.overlap(this.player, this.goal, this.collisionHandler, null, this);
  }

  update ()
  {
      const { left, right, up } = this.cursors;

      if (left.isDown)
      {
          this.player.setVelocityX(-160);

          this.player.anims.play('left', true);
      }
      else if (right.isDown)
      {
          this.player.setVelocityX(160);

          this.player.anims.play('right', true);
      }
      else
      {
          this.player.setVelocityX(0);

          this.player.anims.play('turn');
      }

      if (up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
  } 
}
//third level
class Lvl3 extends Phaser.Scene
{
  platform1;
  cursors;
  platforms;
  player;
  constructor (){
    super({key: 'Lvl3'})
  }
  preload ()
  {
      this.load.spritesheet('ballMan', 'assets/playerSheet.png', { frameWidth: 70, frameHeight: 70 });
      this.load.image('endGoal', 'assets/endGoal.png')
  }
  createRect(x, y, width, height) {
    let temp=this.add.rectangle(x, y, width, height, 0x000000)
    this.platforms.add(temp)
    return temp
  }
  collisionHandler3(obj1, obj2) {
    this.scene.start('Lvl4')
    console.log("Collision Occurred!")
  }
  create ()
  {
    this.platforms = this.physics.add.staticGroup();
    //platforms
    this.ground = this.createRect( 0, window.innerHeight-10, window.innerWidth*2, 100)
    this.wall = this.createRect(window.innerWidth/2, window.innerHeight/2+300, 50, window.innerHeight)
    this.platform1 = this.createRect(window.innerWidth/2-200, window.innerHeight-200, 400, 25)
    this.platform2 = this.createRect(200, window.innerHeight-350, 400, 25)
    this.platform3 = this.createRect(window.innerWidth/2-200, window.innerHeight-500, 400, 25)
    this.platform4 = this.createRect(window.innerWidth/2+window.innerWidth/2-550, window.innerHeight-500, window.innerWidth/2-200, 25)
    this.platform5 = this.createRect(window.innerWidth/2+window.innerWidth/2-375, window.innerHeight-350, window.innerWidth/2-200, 25)
    this.platform6 = this.createRect(window.innerWidth/2+window.innerWidth/2-550, window.innerHeight-200, window.innerWidth/2-200, 25)
    //finish
    this.goal = this.physics.add.sprite(window.innerWidth/2+75, window.innerHeight-110, 'endGoal')
    this.goal.setImmovable(true)
    this.goal.body.allowGravity = false

    //player
    this.player = this.physics.add.sprite(100, window.innerHeight-110, 'ballMan');

    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 7, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'ballMan', frame: 0 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platform1);

    this.physics.add.overlap(this.player, this.goal, this.collisionHandler3, null, this);
  }

  update ()
  {
      const { left, right, up } = this.cursors;

      if (left.isDown)
      {
          this.player.setVelocityX(-160);

          this.player.anims.play('left', true);
      }
      else if (right.isDown)
      {
          this.player.setVelocityX(160);

          this.player.anims.play('right', true);
      }
      else
      {
          this.player.setVelocityX(0);

          this.player.anims.play('turn');
      }

      if (up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
  } 
}
//fourth level
class Lvl4 extends Phaser.Scene
{
  platform1;
  cursors;
  platforms;
  player;
  constructor (){
    super({key: 'Lvl4'})
  }
  preload ()
  {
      this.load.spritesheet('ballMan', 'assets/playerSheet.png', { frameWidth: 70, frameHeight: 70 });
      this.load.image('endGoal', 'assets/endGoal.png')
      this.load.image('spike', 'assets/spike.png')
  }
  createRect(x, y, width, height) {
    let temp=this.add.rectangle(x, y, width, height, 0x000000)
    this.platforms.add(temp)
    return temp
  }
  addSpike(x, y, numOfSpikes, name) {
    this[name] = this.add.tileSprite( x, y, numOfSpikes*25, 25, 'spike')
    this.physics.add.existing(this[name], true)
    console.log(this[name].body)
    this[name].body.allowGravity = false
    this.physics.add.collider(this.player, this[name], this.collisionHandlerSpike, null, this);
    return this[name] 
  }
  collisionHandlerGoal(obj1, obj2) {
    this.scene.start('Lvl5')
    console.log("Collision Occurred!")
  }
  collisionHandlerSpike(obj1, obj2) {
    this.scene.start()
    console.log("Collision Occurred!")
   
  }
  create ()
  {
    this.platforms = this.physics.add.staticGroup();
    //platforms
    this.ground = this.createRect( 0, window.innerHeight-10, window.innerWidth*2, 100)

    
    //finish
    this.goal = this.physics.add.sprite(window.innerWidth-68, window.innerHeight-110, 'endGoal')
    this.goal.setImmovable(true)
    this.goal.body.allowGravity = false

    //player
    this.player = this.physics.add.sprite(100, window.innerHeight-110, 'ballMan');

    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 7, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'ballMan', frame: 0 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    //spikes
    this.addSpike(400, window.innerHeight-72, 6, 'spike1')

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platform1);
    
    this.physics.add.overlap(this.player, this.goal, this.collisionHandlerGoal, null, this);
  }

  update ()
  {
      const { left, right, up } = this.cursors;

      if (left.isDown)
      {
          this.player.setVelocityX(-160);

          this.player.anims.play('left', true);
      }
      else if (right.isDown)
      {
          this.player.setVelocityX(160);

          this.player.anims.play('right', true);
      }
      else
      {
          this.player.setVelocityX(0);

          this.player.anims.play('turn');
      }

      if (up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
  } 
}
//fourth level
class Lvl5 extends Phaser.Scene
{
  platform1;
  cursors;
  platforms;
  player;
  constructor (){
    super({key: 'Lvl5'})
  }
  preload ()
  {
      this.load.spritesheet('ballMan', 'assets/playerSheet.png', { frameWidth: 70, frameHeight: 70 });
      this.load.image('endGoal', 'assets/endGoal.png')
      this.load.image('spike', 'assets/spike.png')
  }
  createRect(x, y, width, height) {
    let temp=this.add.rectangle(x, y, width, height, 0x000000)
    this.platforms.add(temp)
    return temp
  }
  addSpike(x, y, numOfSpikes, name) {
    this[name] = this.add.tileSprite( x, y, numOfSpikes*25, 25, 'spike')
    this.physics.add.existing(this[name], true)
    console.log(this[name].body)
    this[name].body.allowGravity = false
    this.physics.add.collider(this.player, this[name], this.collisionHandlerSpike, null, this);
    return this[name] 
  }
  collisionHandlerGoal(obj1, obj2) {
    this.scene.start()
    console.log("Collision Occurred!")
  }
  collisionHandlerSpike(obj1, obj2) {
    this.scene.start()
    console.log("Collision Occurred!")
   
  }
  create ()
  {
    this.platforms = this.physics.add.staticGroup();
    //platforms
    this.ground = this.createRect( 0, window.innerHeight-10, window.innerWidth*2, 100)

    
    //finish
    this.goal = this.physics.add.sprite(window.innerWidth-68, window.innerHeight-110, 'endGoal')
    this.goal.setImmovable(true)
    this.goal.body.allowGravity = false

    //player
    this.player = this.physics.add.sprite(100, window.innerHeight-110, 'ballMan');

    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 7, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'ballMan', frame: 0 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('ballMan', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    //spikes
    

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.platform1);
    
    this.physics.add.overlap(this.player, this.goal, this.collisionHandlerGoal, null, this);
  }

  update ()
  {
      const { left, right, up } = this.cursors;

      if (left.isDown)
      {
          this.player.setVelocityX(-160);

          this.player.anims.play('left', true);
      }
      else if (right.isDown)
      {
          this.player.setVelocityX(160);

          this.player.anims.play('right', true);
      }
      else
      {
          this.player.setVelocityX(0);

          this.player.anims.play('turn');
      }

      if (up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
  } 
}
const config = {
  type: Phaser.AUTO,
  backgroundColor: 0x03fcf0,
  width: innerWidth -18,
  height: innerHeight-18,
  parent: 'phaser-example',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 350 },
          debug: false
      }
  },
  scene: [Lvl1, Lvl2, Lvl3, Lvl4, Lvl5]
}

var game = new Phaser.Game(config);