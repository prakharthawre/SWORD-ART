var database;
var gamestate = 0;
var playercount,form,player,game;
var master,blackmaster1,blackmaster2;
var allPlayers;
function preload(){
  master1 = loadImage("blackmaster1.png");
  master2 = loadImage("blackmaster2.png");
  back = loadImage("background1.png");
}
function setup() {
  createCanvas(800,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);
  if(playercount===2){
    game.update(1);
  }
  if(gamestate===1){
  game.play();
  }
}