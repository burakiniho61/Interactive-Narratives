    var game = new Phaser.Game(500, 400, Phaser.AUTO, 'burak', {
    preload: preload,
    create: create,
    update: update
}, true) // true here means that the game background is going to be transparent


function preload() {
	game.load.spritesheet('guy', 'Base.png', 32, 32)
}

// set up the game
function create() {
	 // give the game canvas an ID so that we can style it with CSS
    game.canvas.id = 'burak'

    // give the game world some physics rules
    game.physics.startSystem(Phaser.Physics.ARCADE)

    // set the game world boundaries
    game.world.setBounds(0, 0, 2000, game.height)

    // create the player
    player = game.add.sprite(0, 0, 'guy')
    player.x = (game.width - player.width) / 2
    player.y = (game.height - player.height) / 2
    game.physics.arcade.enable(player)
    player.body.collideWorldBounds = true // so that player doesn't fall off the screen

    // create alien walking animations
    player.animations.add('up', [0,1,2], 10, true)
    player.animations.add('left', [4,5,6], 10, true)
    player.animations.add('right', [12,13,14], 10, true)
    player.animations.add('down', [8,9,10], 10, true)

    // create the controls
    cursors = game.input.keyboard.createCursorKeys()

}   
   

// called every single frame
function update() {
}