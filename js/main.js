function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.reset();
  }

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();
    this.framesCounter++;
    if (this.framesCounter > 500 && this.shark.x === (this.canvas.width -550)) {
      this.framesCounter = 0;
      this.reload();
    }      

    if (this.framesCounter % 50 === 0) {
      this.generateEnemy();
    } 

    this.move();
    this.draw();
    this.bites();

    if (this.player.health <= 0) {
      this.gameOver();
      return;
    }

  }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.shark = new Shark(this);
  this.squid = new Squid(this);
  this.shark2 = new Shark2(this);
  this.squid2 = new Squid2(this);
  this.framesCounter = 0;
  this.enemies = [];

};

Game.prototype.reload = function () {
  this.shark = new Shark(this);
}

Game.prototype.generateEnemy = function() {
  this.enemies.push(new Shark(this));
};


Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.shark.draw();
  this.squid.draw();
  this.shark2.draw();
  this.squid2.draw();
  this.healthPlayer();  
};

Game.prototype.move = function() {
  this.player.move();
  this.shark.move();
  this.squid.move();
  this.shark2.move();
  this.squid2.move();
};

Game.prototype.bites = function(/* a, b */) {

  if  (
    this.player.x < this.shark2.x + this.shark2.w &&
    this.player.x + this.player.w > this.shark2.x &&
    this.player.y < this.shark2.y + this.shark2.h &&
    this.player.y + this.player.h > this.shark2.y

/*       a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y */
  ) {
    return true;

  }  else {

    return false;
  }
};

 Game.prototype.healthPlayer = function() {
   
   this.ctx.fillStyle = '#1C6177';
   this.ctx.fillRect (10, 10, 350, 25);
   this.ctx.fillStyle = '#1DC8B8'; 
   this.x = 12;
   this.y = 12;
   this.width = this.player.width;
   this.height = 21;
   this.ctx.fillRect (this.x, this.y, this.width, this.height)
    if (this.bites() === true) {

      this.player.health -= 0.1;
      this.player.width = this.player.health;
      this.ctx.clearRect (12, 12, 346, 21);
      this.ctx.fillStyle = '#1DC8B8'; 
      this.ctx.fillRect (this.x, this.y, this.width, this.height);
      this.ctx.restore();
      this.ctx.fillRect(this.x, this.y, this.width, this.height);

      console.log(this.player.health);
      
    } else {

      this.health = this.health;
    }

  };
 
Game.prototype.gameOver = function() {
  alert ('Game Over');
}
