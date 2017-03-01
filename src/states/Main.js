import ExampleObject from 'objects/ExampleObject';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		// this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
		// this.game.stage.backgroundColor = '#cecece';

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);
		//  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen and assign it to a variable
    let image = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'kikar');
    image.anchor.set(0.5);
		image.width = this.game.width;
		image.height = this.game.height;

		
		image = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'cat');
    image.anchor.set(0.5);
		image.width = 100;
		image.height = 100;
    image.inputEnabled = true;
    image.events.onInputDown.add(() => {
			image.kill();
		});
	}

	update() {
		
	}

}

export default Main;
