var play='pause'
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

  if(play=='play')
  	window.setTimeout(two_kings, 500);
};

function pause(){
	play='pause'
}

function resume(){
	play='play';
	window.setTimeout(two_kings,500);
}

function restart(){
	game = new Chess('4k1n1/8/8/8/8/8/8/1N2K3 w - - 12 42'); // 2 kings 2 knights
  	board.position(game.fen());
}
