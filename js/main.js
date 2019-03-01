function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
  }
  
  Game.prototype.start = function() {
    this.interval = setInterval(function() {
      this.clear();      
      this.move();
      this.draw();
    }.bind(this));
  };
  
  Game.prototype.reset = function() {
    this.background = new Background(this);
    this.player = new Player(this);
  };
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }; 
  
  Game.prototype.draw = function() {
    this.background.draw();
    this.player.draw();
  };
  
  Game.prototype.move = function() {
    this.player.move();
  };