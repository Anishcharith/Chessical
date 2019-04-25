var two_kings = function(){
  var possibleMoves = game.moves();


  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  game.move(possibleMoves[randomIndex]);
  board.position(game.fen());
  from = game.history({verbose:true}).pop().from
  to = game.history({verbose:true}).pop().to
  console.log(from, to);
  generate_sound(from, to);
  updateStatus();

  window.setTimeout(two_kings, 500);

};
window.setTimeout(two_kings, 500);
