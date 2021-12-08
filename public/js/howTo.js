class howTo extends Phaser.Scene
{
    constructor ()
    {
        super({key: "howToKey"});
    }

    preload()
    {

    };

    create()
    {
        /*ADD BACKGROUND IMAGE */
        this.backgroundSun = this.add.image(300,400, 'backgroundSun');
        this.add.image(300, 400, 'background');  

        this.add.image(config.width / 2, config.height / 2 - 100, 'howToPlay');

        /* START BUTTON CREATION */
        const startButton = this.add.image(config.width / 2 - 150, config.height / 2 + 300, 'startButton');
        startButton.setInteractive();

        /* CONTROL BUTTON CREATION */
        const controlButton = this.add.image(config.width / 2 + 150, config.height / 2 + 300, 'controlButton');
        controlButton.setInteractive();


   
        /* ON START BUTTON CLICK */
        startButton.on('pointerdown', () => 
        {
            console.log('start button');
            this.scene.start("gameKey");
            this.game.sound.stopAll();                                                             // TURN BACK ON 
        });

        /* ON CONTROL BUTTON CLICK */
        controlButton.on('pointerdown', () =>
        {
           console.log('controls button');
           this.scene.start("controlsKey");
           
        });
    
        
    };

    update()
    {

    };
}