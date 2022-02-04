var trex, trex_running, edges;
var groundImage;
var ground;
var ground2;
var ground2Image;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  ground2Image = loadImage ("ground1.png");
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();

  ground2 =createSprite(300,180,600,20) ;
  ground2.addImage(ground2Image);

  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite (300,180,600,20);
  ground.addImage(groundImage);

}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  ground.velocityX = -2;

  if(ground.x===0){
    ground.x=ground.width/2;
  }

  console.log (ground.x);

 //impedir que o trex caia
  trex.collide(ground);
  drawSprites();
}