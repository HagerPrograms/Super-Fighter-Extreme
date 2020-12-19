class Scene0 extends Phaser.Scene{

    constructor() {
        super({key:"Scene0"});
    }
    preload(){
        //loading spritesheet
        this.load.spritesheet('fighter', '../assets/maleBase/full/advnt_full.png', {frameWidth: 32, frameHeight: 64});
    }

    create(){
        //extracting animations from spritesheet 
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [0]
            }),
            frameRate: 12,
            repeat: -1
        });
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [1,2,3,4,5,6]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'crouch',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [7,8,9]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'stand',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [10]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'damageHigh',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [11, 12]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'damageLow',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [13,14]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'damageCrouch',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [15,16]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [17,18,19]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'standingVStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [20,21,22,23]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'standingHStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [24,25,26]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'standingJab',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [27,28]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'standingBlock',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [29]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'crouchingVStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [30,31,32,33]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'crouchingHStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [34,35,36]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'crouchingJab',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [37,38]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'crouchingBlock',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [39]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'jumpingVStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [40,41,42,43]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'jumpingHStrike',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [44,45,46]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'jumpingJab',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [47,48]
            }),
            frameRate: 12,
            repeat: -1
        })
        this.anims.create({
            key: 'jumpingBlock',
            frames: this.anims.generateFrameNumbers('fighter', {
                frames : [49]
            }),
            frameRate: 12,
            repeat: -1
        })
        

    const keys = ['idle', 'walk', 'crouch'];
    
    const fighter0 = this.add.sprite(600,370);
    fighter0.setScale(4);
    fighter0.play('standingVStrike');

    let c = 0;
    this.input

};
    update(delta){
        
    }
}