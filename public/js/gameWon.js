class gameWon extends Phaser.Scene
{
    constructor (player1, player2)
    {
        super({ key: "gameWonKey",  player1, player2});
    }

    preload()
    {

    };

    create()
    {
        this.backgroundSun = this.add.image(300,400, 'backgroundSun');
        this.add.image(300, 400, 'background');  

        this.gameWon = this.add.text (config.width / 2, config.height / 2 - 300, 'GAME WON', { font: '56px CustomFont', fill: '#e357ff' }).setOrigin(0.5, 0.5);


        this.playerOneScore = this.add.text (config.width / 2, config.height / 2 + 50, 'P1 score : 0', { font: '48px CustomFont', fill: '#e357ff' }).setOrigin(0.5, 0.5);
        this.playerTwoScore = this.add.text (config.width / 2, config.height / 2 + 130, 'P2 score : 0', {font: '48px CustomFont', fill: '#0377fc'}).setOrigin(0.5, 0.5);

        this.playerOneScore.setText('P1 score : ' + player1.score);
        this.playerTwoScore.setText('P2 score : ' + player2.score);

        const startButton = this.add.image(config.width / 2, config.height / 2 - 100, 'startButton');
        startButton.setInteractive();

        const TitleMusic = this.sound.add("titleMusic", {volume: 0.06});                              // TURN BACK ON AFTER TESTING
        TitleMusic.play();


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