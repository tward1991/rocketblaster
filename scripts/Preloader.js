var BasicGame = {};

BasicGame.Preloader = function (game) {
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function () {
    //displays a loading screen message while the assets are loaded into memory
		this.preloaderText = this.add.text(this.world.centerX,this.world.centerY, 'Loading...',
	{
		fontSize: '96px'
	  fill: '#fff',
		align: 'center'
	});
	this.preloaderText.anchor.setTo(0.5,0.5);

	//preload the images, sprites and audio assets into memory
this.load.image('logo','assets/PhaserLogo.png');
this.load.image('logo','assets/starfield.png');
this.load.image('logo','assets/StartButton.png');
this.load.image('logo','assets/ship.png');
},
	create: function () {

	},

	update: function () {
this.game.state.start('MainMenu');
	}

};
