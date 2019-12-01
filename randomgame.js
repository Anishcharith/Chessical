var count=-1;
var game_moves=["e4","e5","Nf3","Nc6","Bc4","Bc5","O-O","Nf6","d4","exd4","e5","Ng4","Bf4","O-O","h3","Nh6","Bxh6","gxh6","Qd2","d5","Bd3","Re8","Qxh6","Bf8","Qxh7"];

var makeMove = function() {
	count+=1
	var possibleMoves = game.moves();
	console.log(game_moves[count])
	console.log(possibleMoves[count])
	move=game_moves[count]

  // exit if the game is over
  if (game.game_over() === true ||
    game.in_draw() === true ||
    possibleMoves.length === 0) return;
  //var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  //game.move(possibleMoves[randomIndex]);
  game.move(move);
  board.position(game.fen());
  from = game.history({verbose:true}).pop().from
  to = game.history({verbose:true}).pop().to
  console.log(from, to);
  generate_sound(from, to);
  updateStatus();
  no_of_moves=Math.max(Math.abs(from[0].charCodeAt(0)-to[0].charCodeAt(0)), Math.abs(from[1]-to[1]))+1;
  console.log(no_of_moves)
  
  if(play=='play')
  	window.setTimeout(call_makeRandomMove,400);
  

};

function call_makeRandomMove(){
	makeMove();
}
