class loader extends Phaser.Scene
{
    constructor()
    {
        super({key : "loaderKey"});
    }

    preload()
    {

        this.load.image('backgroundSun', '/public/assets/environment/background.png');
        this.load.image('laser', '/public/assets/playerAssets/laser.png');
        this.load.image('laser2', '/public/assets/playerAssets/laser2.png');
        this.load.image('ground', '/public/assets/environment/ground2.png');
        this.load.image('heartFull', '/public/assets/UI/fullHeart.png');
        this.load.image('heartEmpty', '/public/assets/UI/emptyHeart.png');
        this.load.image('laserDefence', '/public/assets/playerAssets/laserDefenceBeam.png');
        this.load.image('sun', '/public/assets/environment/sunTest.png');


        /* SPRITE SHEETS OF SCENE PLAYERS*/
        this.load.spritesheet('enemy', '/public/assets/enemy/enemySheetTest.png', { frameWidth: 20, frameHeight: 20 });
        this.load.spritesheet('player1', '/public/assets/playerAssets/pinkPlayerSheet2.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('player2', '/public/assets/playerAssets/bluePlayerSheet2.png', { frameWidth: 64, frameHeight: 64 });



        /* SPRITE SHEET FOR BACKGROUND */
        this.load.spritesheet('background', '/public/assets/environment/backgroundAnim.png', { frameWidth: 600, frameHeight: 800 });

        /* SPRITE SHEETS FOR BUILDINGS */
        this.load.spritesheet('building1', '/public/assets/building/building1.png', { frameWidth: 43, frameHeight: 88 });
        this.load.spritesheet('building2', '/public/assets/building/building2.png', { frameWidth: 77, frameHeight: 88 });
        this.load.spritesheet('building3', '/public/assets/building/building3.png', { frameWidth: 43, frameHeight: 88 });
        this.load.spritesheet('building4', '/public/assets/building/building4.png', { frameWidth: 77, frameHeight: 88 });
        this.load.spritesheet('building5', '/public/assets/building/building5.png', { frameWidth: 43, frameHeight: 88 });
        this.load.spritesheet('building6', '/public/assets/building/building6.png', { frameWidth: 17, frameHeight: 88 });
     
     
        /* AUDIO - MUSIC */
        this.load.audio("titleMusic", '/public/assets/Audio/music/music1.mp3');
        this.load.audio("mainGameMusic", '/public/assets/Audio/music/mainGameMusic.mp3');

        /* SOUND EFFECTS */
        this.load.audio("thrust", '/public/assets/Audio/effects/thrustSoundEffect.mp3');
        this.load.audio("enemyExplosion", '/public/assets/Audio/effects/enemyExplosion.mp3');
        this.load.audio("laserFire", '/public/assets/Audio/effects/laserSoundEffect2.mp3');
        this.load.audio("specialLaserBeam", '/public/assets/Audio/effects/specialLaserBeam.mp3');
        this.load.audio("lifeLost", '/public/assets/Audio/effects/lifeLost.mp3');
        this.load.audio("gainLife", '/public/assets/Audio/effects/gainLife.mp3');
        this.load.audio("gainHealth", '/public/assets/Audio/effects/gainHealth.mp3');
        this.load.audio("playerExplosion", '/public/assets/Audio/effects/shipExplosion.mp3');
        this.load.audio("buildingExplosion", '/public/assets/Audio/effects/buildingExplosion.mp3');

      




        /* BUTTONS */
        this.load.image('startButton', '/public/assets/UI/startButton.png');
        this.load.image('controlButton', '/public/assets/UI/controlButton.png');
        this.load.image('controls', '/public/assets/UI/controls.png');
        this.load.text('font', '/public/assets/fonts/AstroSpace.ttf');



    };

    create()
    {
        this.scene.start("mainMenuKey");        
    };

    update()
    {

    };



}