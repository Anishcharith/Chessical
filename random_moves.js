var makeRandomMove = function() {
  var possibleMoves = game.moves();

  // exit if the game is over
  if (game.game_over() === true ||
    game.in_draw() === true ||
    possibleMoves.length === 0) return;
  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  game.move(possibleMoves[randomIndex]);
  board.position(game.fen());
  from = game.history({verbose:true}).pop().from
  to = game.history({verbose:true}).pop().to
  console.log(from, to);
  generate_sound(from, to);
  updateStatus();

  window.setTimeout(makeRandomMove, 500);
  

};
window.setTimeout(makeRandomMove, 500);
