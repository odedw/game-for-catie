class Boot extends Phaser.State {

	preload() {
    this.load.image('preloaderBar', 'static/images/preloader_bar.png');
	}

	create() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.forceLandscape = true;
    this.scale.pageAlignHorizontally = true;
		this.game.state.start("Preload");
	}

}

export default Boot;