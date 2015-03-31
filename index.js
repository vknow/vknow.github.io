var game;
var plat;
$(function()
  {    
//alert("hello game..");
game = new Phaser.Game(
    800,600,Phaser.AUTO, "",
    {
        preload:preload,
        create:create,
        update:update 
    }
    );
});


function preload(){
    game.load.image("star", "assets/star.png");
    game.load.image("platform", "assets/platform.png");
    game.load.image("sky", "assets/sky.png");
    game.load.audio("sound","assets/score.wav");
  

console.log(">>> preload");

}

function create(){
   
    game.add.sprite(0,0,"sky");
    game.add.sprite(50,50,"star");
    game.add.sprite(0,500,"platform");
    var s = new Sound(game,"sound",5,true);
    plat = game.add.group();
    var ground = plat.create(0,game.world.height - 10, "platform");
    console.log(">>> create");
}

function update(){
console.log(">>> update");
}