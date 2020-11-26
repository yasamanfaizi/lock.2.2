function preload(){
  TorchImg = loadImage("Torch.png");
  EighteenImg = loadImage("Paper.png");
}

function setup(){
  createCanvas(600,600);
 torch = createSprite(100,100);
eighteen = createSprite(590,50);
  torch.addImage(TorchImg);
  torch.scale = 0.2;
  eighteen.addImage(EighteenImg);
  eighteen.scale = 0.5
  
}

function draw(){
  background("Black");
  torch.visible = false;
  if (keyDown("R")){
    torch.visible = true;
  } else {
  
  }
  torch.x = mouseX
  torch.y = mouseY
  drawSprites();
}