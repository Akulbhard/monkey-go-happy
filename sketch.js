//Global Variables
var back,backImg, player,playerImg, bananaImg, obstacleImg, obstacleGroup, foodgroup, score, ground;


function preload() {

  backImg = loadImage("jungle.jpg");

  playerImg =
    loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImg = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
}


function setup() {
  createCanvas(600, 300);
  back = createSprite(200, 200, 4000, 400);
  back.addImage("background",backImg);
  back.velocityX = -8;
  back.x = back.width / 2;

  player = createSprite(40, 360, 20, 20);
  player.addAnimation("monkey", playerImg);
  player.scale = 0.2;

  ground = createSprite(200, 390, 8000, 20);
  ground.velocityX = -8;
  ground.visible = false;

  foodgroup = new Group();
  obstaclegroup = new Group();

  score = 0;

}


function draw() {
  background(255);
  if (back.x < 0) {
    back.x = back.width / 2;

  }

  if (keyDown("space")) {
    player.velocityY = -12;
  }

  player.velocityY = player.velocityY + 0.8;

  if (foodgroup.isTouching(player)) {
    score = score + 2
    foodgroup.destroyEach();

  }

  switch (score) {
    case 10:
      player.scale = 0.12;
      break;
    case 20:
      player.scale = 0.14;
      break;
    case 30:
      player.scale = 0.16;
      break;
    case 40:
      player.scale = 0.18;
      break;

    default:
      break;

  }

  if (obstaclegroup.isTouching(player)) {
    player.scale = 02;
  }

  food();
  Obstacle();
  drawSprite();

  text("score" + score, 350, 30);
}

function food() {
  if (frameCount % 80 === 0) {
    var rand = random(120, 200);
    var banana = createSprite(400, rand, 20, 20);
    banana.addImage("bananaImg",bananaImg);
    banana.scale = 0.05;
    banana.velocityX = -8;
    banana.lifetime = 50;
    foodgroup.add(banana);
  }
}

function Obstacle() {
  if (frameCount % 300 === 0) {
    var stone = createSprite(400, 368, 20, 20);
    stone.addAnimation("Stone",obstacleImg);
    stone.scale = 0.075;
    stone.velocityX = -8;
    stone.lifetime = 50;
    obstaclegroup.add(stone);
  }

}