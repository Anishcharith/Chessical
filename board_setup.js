var board,
//  game = new Chess('6K1/8/2r5/8/8/8/2k5/8 b - - 100 208');
//game = new Chess('8/8/8/7K/3k4/8/8/8 w - - 23 227');
game = new Chess('4k3/8/8/8/8/8/8/4K3 w - - 0 33');
statusEl = $('#status'),
fenEl = $('#fen'),
pgnEl = $('#pgn');

board = ChessBoard('board', 'start');


var updateStatus = function() {
  var status = '';

  var moveColor = 'White';
  if (game.turn() === 'b') {
    moveColor = 'Black';
  }

  // checkmate?
  if (game.in_checkmate() === true) {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (game.in_draw() === true) {
    status = 'Game over, drawn position';
  }

  // game still on
  else {
    status = moveColor + ' to move';

    // check?
    if (game.in_check() === true) {
      status += ', ' + moveColor + ' is in check';
    }
  }

  statusEl.html(status);
  fenEl.html(game.fen());
  pgnEl.html(game.pgn());
};

