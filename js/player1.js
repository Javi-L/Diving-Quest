function Player(game) {
    this.game = game;
   
    this.x = this.game.canvas.width * 0.02;
    this.y0 = this.game.canvas.height * -0;
    this.y = this.y0;
    this.img = new Image();
    this.img.src = 'images/diver.png';
    this.img.frames = 1;
    this.img.frameIndex = 0;
    this.w = 100;
    this.h = 75;
    this.vy = 1;

    this.setListeners();
  }
  
  var up = 38;
  var down = 40;
  var left = 37;
  var right = 39;
  
  Player.prototype.draw = function() {

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
  
  Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === up) {
        this.y -= 10;
        this.vy -= 15;
      } else if (event.keyCode === down) {
        this.y +=5;
        this.vy +=10;
      } else if (event.keyCode === left ) {
          this.x -= 5;
          this.vx -= 10;
      } else if (event.keyCode === right) {
          this.x +=5;
          this.vx += 10;
        }
    }.bind(this);
  };
  
  Player.prototype.move = function() {

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