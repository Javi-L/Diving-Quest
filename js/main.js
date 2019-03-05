function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.reset();
}

// this.sharks = [];
// this.sharksnNumber = [];

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();      
    this.move();
    this.draw();

    if (this.player.health <= 0) {
      this.gameOver();
      return;
    }

  }.bind(this));
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.shark = new Shark(this);
  this.squid = new Squid(this);
  this.shark2 = new Shark2(this);
  this.squid2 = new Squid2(this);
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
  
};

Game.prototype.move = function() {
  this.player.move();
  this.shark.move();
  this.squid.move();
  this.shark2.move();
  this.squid2.move();
};

Game.prototype.bytes = function(a, b) {
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  ) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.gameOver = function () {
  alert ('Game Over')
}