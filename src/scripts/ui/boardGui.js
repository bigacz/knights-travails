const boardDom = document.getElementById('board');
let squares;

function initializeBoard() {
  for (let y = 0; y < 8; y += 1) {
    for (let x = 7; x >= 0; x -= 1) {
      createSquare(x, y);
    }
  }

  squares = document.querySelectorAll('.square');
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

function getSquare(x, y) {
  const square = document.querySelector(`div[data-x="${x}"][data-y="${y}"]`);
  return square;
}

function addStep(step, x, y) {
  const square = getSquare(x, y);
  square.textContent = step;
}

function clearSteps() {
  squares.forEach((element) => {
    if (element.id !== 'knight') {
      element.textContent = '';
    }
  });
}

function changeEnd(x, y) {
  const previous = document.querySelector('.square-end');
  if (previous) {
    previous.classList.remove('square-end');
  }

  const square = getSquare(x, y);
  square.classList.add('square-end');
}

function getEndCoordinates() {
  const endElement = document.querySelector('.square-end');

  if (!endElement) {
    return null;
  }

  const x = endElement.getAttribute('data-x');
  const y = endElement.getAttribute('data-y');

  return [x, y];
}

const BoardGui = {
  clearSteps,
  addStep,
};

export default BoardGui;

initializeBoard();

squares.forEach((element) => {
  element.addEventListener('click', (event) => {
    const x = element.getAttribute('data-x');
    const y = element.getAttribute('data-y');

    changeEnd(x, y);
  });
});
