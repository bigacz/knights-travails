const boardDom = document.getElementById('board');

function initializeBoard() {
  for (let y = 0; y < 8; y += 1) {
    for (let x = 7; x >= 0; x -= 1) {
      createSquare(x, y);
    }
  }
}

function createSquare(x, y) {
  const square = document.createElement('div');
  square.setAttribute('data-x', x);
  square.setAttribute('data-y', y);
  square.classList.add('square');

  const isOddX = x % 2;
  const isOddY = y % 2;

  let color = 'black';

  if (isOddY) {
    if (isOddX) {
      color = 'black';
    } else {
      color = 'white';
    }
  } else if (isOddX) {
    color = 'white';
  } else {
    color = 'black';
  }

  square.classList.add(`square-${color}`);
  square.setAttribute('data-color', color);

  boardDom.prepend(square);
}

initializeBoard();
