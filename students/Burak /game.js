    var game = new Phaser.Game(500, 400, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
}, true) // true here means that the game background is going to be transparent


function preload() {
	game.load.spritesheet('guy','Assets/Base.png', 32, 48)
}

// set up the game
function create() {
	 // give the game canvas an ID so that we can style it with CSS
    game.canvas.id = 'game'

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
    player.animations.add('up', [3,4,5], 10, true)
    player.animations.add('left', [9,10,11], 10, true)
    player.animations.add('right', [6,7,8], 10, true)
    player.animations.add('down', [0,1,2], 10, true)

    // create the controls
    cursors = game.input.keyboard.createCursorKeys()
    game.camera.follow(player)

}   
   

// called every single frame
var playerSpeed = 53

function update() {
    player.body.velocity.x = 0
    player.body.velocity.y = 0
        // make the pig animate in four directions
    if (cursors.right.isDown) {
        player.animations.play('right')
         player.body.velocity.x = playerSpeed
    } else if (cursors.left.isDown) {
        player.animations.play('left')
         player.body.velocity.x = -playerSpeed
    } else if (cursors.up.isDown) {
        player.animations.play('up')
        player.body.velocity.y = -playerSpeed
    } else if (cursors.down.isDown) {
        player.animations.play('down')
        player.body.velocity.y = playerSpeed
    } else {
        player.animations.stop()
    }
    
    var data = { x: game.camera.x, y:game.camera.y }
    document.dispatchEvent( new CustomEvent( 'Camera', { detail: data } ) )

}