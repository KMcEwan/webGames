class mainMenu extends Phaser.Scene
{
    constructor ()
    {
        super({key: "mainMenuKey"});
    }

    preload()
    {

    };

    create()
    {
        /*ADD BACKGROUND IMAGE */
        this.backgroundSun = this.add.image(300,400, 'backgroundSun');
        this.add.image(300, 400, 'background');  

        /* START BUTTON CREATION */
        const startButton = this.add.image(config.width / 2, config.height / 2 - 100, 'startButton');
        startButton.setInteractive();

        /* CONTROL BUTTON CREATION */
        const controlButton = this.add.image(config.width / 2, config.height / 2 + 100, 'controlButton');
        controlButton.setInteractive();

        /* CONTROL BUTTON CREATION */
        const howToButton = this.add.image(config.width / 2, config.height / 2 + 300, 'howTo');
        howToButton.setInteractive();

        /* TITLE MUSIC CREATION */
        const TitleMusic = this.sound.add("titleMusic", {volume: 0.06});                              
        TitleMusic.play();

        TitleMusic.loop = true;

        /* ON START BUTTON CLICK */
        startButton.on('pointerdown', () => 
        {
            console.log('start button');
            this.scene.start("gameKey");
            TitleMusic.stop();                                                                    // TURN BACK ON 
        });

        /* ON CONTROL BUTTON CLICK */
        controlButton.on('pointerdown', () =>
        {
           console.log('controls button');
           this.scene.start("controlsKey");
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