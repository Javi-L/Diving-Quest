function Shark(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.4;
  this.y = this.game.canvas.height * 0.6;
  this.img = new Image();
  this.img.src = 'images/shark-1.png';
  this.img.frames = 1;
  this.maxX = this.game.canvas.width - 150;
  this.maxY = this.game.canvas.height - 100;  
  this.w = 150;
  this.h = 75;
  this.vx = 0.5;
  this.vy = 0.5;
}

 Shark.prototype.draw = function() {
   this.game.ctx.drawImage(
     this.img,
     this.x,
     this.y,
     this.w,
     this.h
   )

 }

 Shark.prototype.move = function() {

   this.x += this.vx;
   this.y += this.vy;

  if (this.y + this.vy > this.maxY || this.y + this.vy < 200) {
    this.vy *= -1;
  }

 if (this.x + this.vx > this.maxX) {
     this.vx *= -1;
     this.img = new Image();
     this.img.src = 'images/shark-4.png';
     this.img.frames = 1;
  }
  
   else if (this.x + this.vx < 0) {
    this.vx *= -1;
    this.img = new Image();
    this.img.src = 'images/shark-1.png';
    this.img.frames = 1;
    }
};

function Squid(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.1;
  this.y = this.game.canvas.height * 0.6;
  this.img = new Image();
  this.img.src = 'images/squid.png';
  this.img.frames = 1;
  this.maxX = this.game.canvas.width - 150;
  this.maxY = this.game.canvas.height - 100;  
  this.w = 150;
  this.h = 75;
  this.vx = 0.5;
  this.vy = 0.5;
}

 Squid.prototype.draw = function() {
   this.game.ctx.drawImage(
     this.img,
     this.x,
     this.y,
     this.w,
     this.h
   )

 }

 Squid.prototype.move = function() {

   this.x += this.vx;
   this.y += this.vy;

  if (this.y + this.vy > this.maxY || this.y + this.vy) {
    this.vy *= -1;
  }
  if (this.x + this.vx > this.maxX || this.x + this.vx < 0) {
    this.vx *= -1;
  }
};
