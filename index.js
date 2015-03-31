var game;
var plat;
var dude;
var cursor;
var star;
var stargroup;
var scoretext;
var soundscore;
var scoew = 0;
$(function ()
{
//alert("hello game..");
    game = new Phaser.Game(
            800, 400, Phaser.AUTO, "",
            {
                preload: preload,
                create: create,
                update: update
            }
    );
});


function preload() {
    game.load.image("star", "assets/star.png");
    game.load.image("platform", "assets/platform.png");
    game.load.image("sky", "assets/sky.png");
    game.load.spritesheet("dude", "assets/dude.png", 32, 48);
    game.load.audio("score", "assets/score.wav");
    console.log(">>> preload");

}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, "sky");

    plat = game.add.group();
    plat.enableBody = true;
    var ground = plat.create(0, game.world.height - 50, "platform");
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    ground = plat.create(0, game.world.height - 150, "platform");
    ground.body.immovable = true;
    ground = plat.create(650, game.world.height - 250, "platform");
    ground.scale.setTo(2, 1);
    ground.body.immovable = true;
    ground = plat.create(160, game.world.height - 350, "platform");
    ground.scale.setTo(1, 1);
    ground.body.immovable = true;
    stargroup = game.add.group();
    stargroup.enableBody = true;
    var dis = game.world.width / 12;
    for (var i = 0; i < 12; i++)
    {
        star = stargroup.create(dis * i, 0, "star");
        star.body.collideWorldBounds = true;
        game.physics.arcade.enable(star);
        var a = Math.random() * 1 + 10;
        star.body.gravity.y = 100 * a;
        star.body.bounce.y = .5;


    }
    scoretext = game.add.text(30, 10, "score : 0", {fontSize: "15px",
        fontWeight: "bolder",fill:"red"});
    dude = game.add.sprite(32, game.world.height - 98, "dude");
    dude.animations.add("left", [0, 1, 2, 3], 10, true);
    dude.animations.add("right", [5, 6, 7, 8], 10, true);
    dude.animations.add("face", [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true);
    game.physics.arcade.enable(dude);
    cursor = game.input.keyboard.createCursorKeys();
//    dude.body.bounce.y = .5;
//    dude.body.gravity.y = -20;
    dude.body.collideWorldBounds = true;
    soundscore = game.add.audio("score");
    console.log(">>> create");
}


function update() {
    console.log(">>> update");

    game.physics.arcade.collide(dude, plat);
    game.physics.arcade.collide(dude, stargroup, staranddude);

    game.physics.arcade.collide(plat, stargroup);
    if (cursor.left.isDown) {
        dude.animations.play("left");
        dude.body.velocity.x = -150;
        dude.body.velocity.y = 0;
    } else if (cursor.right.isDown) {
        dude.animations.play("right");
        dude.body.velocity.x = 150;
        dude.body.velocity.y = 0;
    }
    else if (cursor.down.isDown) {
        dude.animations.play("face");
        dude.body.velocity.y = 100;
        if (dude.body.velocity.x > 0)
            dude.body.velocity.x = 100;
        else
            dude.body.velocity.x = -100;
    }
    else if (cursor.up.isDown) {
        dude.body.velocity.y = -100;
        if (dude.body.velocity.x > 0)
            dude.body.velocity.x = 100;
        else
            dude.body.velocity.x = -100;
    }
    else {
//        dude.animations.frame = 4;
//        dude.body.velocity.x = 0;
//        dude.body.velocity.y = 0;
    }
}
function staranddude(dude, star) {

    soundscore.play();
    scoew = scoew + 10;
    star.kill();
    scoretext.text = "score : " + scoew;


}
