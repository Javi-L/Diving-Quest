function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
  }

  // this.sharks = [];
  // this.sharksnNumber = [];


  this.framesCounter = 0;
  this.enemies = [];
  this.enemiesOn = []
  this.generate = true;
  
  Game.prototype.start = function() {
    this.interval = setInterval(function() {
      this.clear();      
      this.move();
      this.draw();
      this.bytes();
      this.update();

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
    this.healthPlayer();
  
    
  };
  
  Game.prototype.move = function() {
    this.player.move();
    this.shark.move();
    this.squid.move();
    this.shark2.move();
    this.squid2.move();
  };

  Game.prototype.bytes = function(/* a, b */) {
    // var a = this.player;
    // var b = this.shark;
    if (
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
     // var that = this;
     this.ctx.fillStyle = '#1C6177';
     this.ctx.fillRect (10, 10, 350, 25);
     this.ctx.fillStyle = '#1DC8B8'; 
     this.x = 12;
     this.y = 12;
     this.width = 346;
     this.height = 21;
     this.ctx.fillRect (this.x, this.y, this.width, this.height)
      if (this.bytes() === true) {

        //  this.player.health -= 10;
        //  alert (this.player.health);
         return true; 
        
      } /* else {
     
      } */
    };


     Game.prototype.update = function() {

          // this.healthBar = [];
          // while (this.player.health > 0) {
       if (this.healthPlayer() === true) {

        // this.player.health -= 5;
        // console.log(this.player.health)

      this.width -= 34;

       }
  
        this.ctx.clearRect (12, 12, 346, 21);
        this.ctx.save();
        this.ctx.fillStyle = '#1DC8B8'; 
        this.ctx.fillRect (this.x, this.y, this.width, this.height);
        this.ctx.restore();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }

      
   
  Game.prototype.gameOver = function() {
    alert ('Game Over');
  }