class controls extends Phaser.Scene
{
    constructor ()
    {
        super({key: "controlsKey"});
    }

    preload()
    {

    };

    create()
    {
        this.add.image(300,400, 'backgroundSun');
        this.add.image(300, 400, 'background');  
        
        this.add.image(config.width / 2, config.height / 2 - 100, 'controls');
    

        /* START BUTTON CREATION */
        const startButton = this.add.image(config.width / 2 - 150, config.height / 2 + 300, 'startButton');
        startButton.setInteractive();

        /* CONTROL BUTTON CREATION */
        const howToButton = this.add.image(config.width / 2 + 150, config.height / 2 + 300, 'howTo');
        howToButton.setInteractive();

        startButton.on('pointerdown', () => 
        {
            console.log('start button');
            this.scene.start("gameKey");
            this.game.sound.stopAll();
        });

        
        howToButton.on('pointerdown', () =>
        {
           console.log('controls button');
           this.scene.start("howToKey");
        });
        
    };

    update()
    {

    };
}