/* Code for the loading bar was taken from https://www.patchesoft.com/phaser-3-loading-screen*/


class loader extends Phaser.Scene
{
    constructor()
    {
        super({key : "loaderKey"});
    }

    preload()
    {
        this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var progressBar = new Phaser.Geom.Rectangle(100, 200, 400, 50);
	
		this.graphics.fillStyle(0x0000ff, 1);
		this.graphics.fillRectShape(progressBar);

		var loadingText = this.add.text(150,260,"Loading: ", { font: '32px CustomFont', fill: '#fa00fa' });
        for(var i=0; i<1 ;i++) {
            this.load.image('backgroundSun', 'assets/environment/background.png');
            this.load.image('laser', 'assets/playerAssets/laser.png');
            this.load.image('laser2', 'assets/playerAssets/laser2.png');
            this.load.image('ground', 'assets/environment/ground2.png');
            this.load.image('heartFull', 'assets/UI/fullHeart.png');
            this.load.image('heartEmpty', 'assets/UI/emptyHeart.png');
            this.load.image('laserDefence', 'assets/playerAssets/laserDefenceBeam.png');
            this.load.image('sun', 'assets/environment/sunTest.png');
    
    
            /* SPRITE SHEETS OF SCENE PLAYERS*/
            this.load.spritesheet('enemy', 'assets/enemy/enemySheetTest.png', { frameWidth: 20, frameHeight: 20 });
            this.load.spritesheet('player1', 'assets/playerAssets/pinkPlayerSheet2.png', { frameWidth: 64, frameHeight: 64 });
            this.load.spritesheet('player2', 'assets/playerAssets/bluePlayerSheet2.png', { frameWidth: 64, frameHeight: 64 });
    
    
    
            /* SPRITE SHEET FOR BACKGROUND */
            this.load.spritesheet('background', 'assets/environment/backgroundAnim.png', { frameWidth: 600, frameHeight: 800 });
    
            /* SPRITE SHEETS FOR BUILDINGS */
            this.load.spritesheet('building1', 'assets/building/building1.png', { frameWidth: 43, frameHeight: 88 });
            this.load.spritesheet('building2', 'assets/building/building2.png', { frameWidth: 77, frameHeight: 88 });
            this.load.spritesheet('building3', 'assets/building/building3.png', { frameWidth: 43, frameHeight: 88 });
            this.load.spritesheet('building4', 'assets/building/building4.png', { frameWidth: 77, frameHeight: 88 });
            this.load.spritesheet('building5', 'assets/building/building5.png', { frameWidth: 43, frameHeight: 88 });
            this.load.spritesheet('building6', 'assets/building/building6.png', { frameWidth: 17, frameHeight: 88 });
         
         
            /* AUDIO - MUSIC */
            this.load.audio("titleMusic", 'assets/Audio/music/music1.mp3');
            this.load.audio("mainGameMusic", 'assets/Audio/music/mainGameMusic.mp3');
    
            /* SOUND EFFECTS */
            this.load.audio("thrust", 'assets/Audio/effects/thrustSoundEffect.mp3');
            this.load.audio("enemyExplosion", 'assets/Audio/effects/enemyExplosion.mp3');
            this.load.audio("laserFire", 'assets/Audio/effects/laserSoundEffect2.mp3');
            this.load.audio("specialLaserBeam", 'assets/Audio/effects/specialLaserBeam.mp3');
            this.load.audio("lifeLost", 'assets/Audio/effects/lifeLost.mp3');
            this.load.audio("gainLife", 'assets/Audio/effects/gainLife.mp3');
            this.load.audio("gainHealth", 'assets/Audio/effects/gainHealth.mp3');
            this.load.audio("playerExplosion", 'assets/Audio/effects/shipExplosion.mp3');
            this.load.audio("buildingExplosion", 'assets/Audio/effects/buildingExplosion.mp3');
            this.load.audio("player1LifeLost", 'assets/Audio/effects/player1.mp3');
            this.load.audio("player2LifeLost", 'assets/Audio/effects/player2.mp3');
            this.load.audio("player1HealSelf", 'assets/Audio/effects/player1SelfHeal.mp3');
            this.load.audio("player1HealTeam", 'assets/Audio/effects/player1TeamHeal.mp3');
            this.load.audio("player2HealSelf", 'assets/Audio/effects/player2SelfHeal.mp3');
            this.load.audio("player2HealTeam", 'assets/Audio/effects/player2TeamHeal.mp3');
            this.load.audio("player1TeamLives", 'assets/Audio/effects/player1TeamLives.mp3');
            this.load.audio("player2LaserScan", 'assets/Audio/effects/player2LaserScan.mp3');
    
            /* BUTTONS */
            this.load.image('startButton', 'assets/UI/startButton.png');
            this.load.image('controlButton', 'assets/UI/controlButton.png');
            this.load.image('howTo', 'assets/UI/howTo.png');
            this.load.image('controls', 'assets/UI/controls.png');
            this.load.image('howToPlay', 'assets/UI/howToPlay.png');
    
            
            this.load.text('font', 'assets/fonts/AstroSpace.ttf');
		}
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
		this.load.on('complete', this.complete, {scene:this.scene});
	}

	updateBar(percentage) {
        this.newGraphics.clear();
        this.newGraphics.fillStyle('0xFF00FF', 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(105, 205, percentage*390, 40));
                
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");        
        }

        complete() {
            this.scene.start("mainMenuKey");
        }
    };

    // create()
    // {
    //     this.scene.start("mainMenuKey");        
    // };



