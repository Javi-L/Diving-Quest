function Shark(game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.4;
    this.y0 = this.game.canvas.height * 0.6;
    this.y = this.y0;
    this.img = new Image();
    this.img.src = 'images/shark-1.png';
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.w = 150;
    this.h = 75;
    this.vy = 1;

    this.randomMove();
  }

  
  Shark.prototype.draw = function() {

    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  
  };
  
  Shark.prototype.randomMove = function() {


  };
  
  Shark.prototype.move = function() {

       if (this.y <= 215) {
      this.vy = 1;
      this.y = 215;
    } if (this.y >=830) {
        this.vy = 1;
        this.y = 830;
    } if (this.x <= 0) {
        this.vx = 1;
        this.x = 0;
    } if (this.x >= 1150) {
        this.vx = 1;
        this.x = 1150;
    }
    
  };