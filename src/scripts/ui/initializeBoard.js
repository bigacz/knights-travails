const board = document.getElementById('board');

function initializeBoard() {
  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1) {
      const square = document.createElement('div');
      square.setAttribute('data-x', x);
      square.setAttribute('data-y', y);

      board.appendChild(square);
    }
  }
}

initializeBoard();
