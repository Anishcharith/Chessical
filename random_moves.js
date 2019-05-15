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
  no_of_moves=Math.max(Math.abs(from[0].charCodeAt(0)-to[0].charCodeAt(0)), Math.abs(from[1]-to[1]))+1;
  console.log(no_of_moves)
  
  if(play=='play')
  	window.setTimeout(call_makeRandomMove, 200*no_of_moves);
  

};

function call_makeRandomMove(){
	makeRandomMove();
}
