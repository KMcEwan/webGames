class gameOver extends Phaser.Scene
{
    constructor (player1, player2 )
    {
        super({key: "gameOverKey", player1, player2});
    }

    preload()
    {

    };

    create(gameOverReason)
    {
        this.reason = gameOverReason.keyDeath;


        this.backgroundSun = this.add.image(300,400, 'backgroundSun');
        this.add.image(300, 400, 'background');  
        console.log("controls script");
 

        this.gameOver = this.add.text (config.width / 2, config.height / 2 - 300, 'GAME OVER', { font: '56px CustomFont', fill: '#e357ff' }).setOrigin(0.5, 0.5);
        this.deathReason = this.add.text (config.width / 2, config.height / 2 - 200, this.reason, { font: '40px CustomFont', fill: '#0377fc', align: "center"}).setOrigin(0.5, 0.5);


    //    add.text (config.width / 2, config.height / 2, this.playerClicked, {font: '20px Ariel', fill: '#000000', align: "center"});


        this.playerOneScore = this.add.text (config.width / 2 , config.height / 2 + 50, 'P1 score : 0', { font: '48px CustomFont', fill: '#e357ff'}).setOrigin(0.5, 0.5);
        this.playerTwoScore = this.add.text (config.width / 2 , config.height / 2 + 130, 'P2 score : 0', {font: '48px CustomFont', fill: '#0377fc'}).setOrigin(0.5, 0.5);

        this.playerOneScore.setText('P1 score : ' + player1.score);
        this.playerTwoScore.setText('P2 score : ' + player2.score);
        //this.deathReason.setText(this.reason);
        

        const startButton = this.add.image(config.width / 2, config.height / 2 - 100, 'startButton');
        startButton.setInteractive();

        startButton.on('pointerdown', () => 
        {
            console.log('start button');
            this.scene.start("gameKey");
            this.game.sound.stopAll();
        });
        
    };

    update()
    {

    };
}