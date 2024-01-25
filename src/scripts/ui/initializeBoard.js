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

  if (isOddY) {
    if (isOddX) {
      square.classList.add('square-black');
    } else {
      square.classList.add('square-white');
    }
  } else if (isOddX) {
    square.classList.add('square-white');
  } else {
    square.classList.add('square-black');
  }

  boardDom.prepend(square);
}

initializeBoard();