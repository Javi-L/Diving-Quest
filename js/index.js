window.onload = function() {
  var game = new Game("canvas");
  var audio = document.querySelector('.audio');

  game.start();
  setTimeout(function() {
    audio.play();
  }, 1000);
};

