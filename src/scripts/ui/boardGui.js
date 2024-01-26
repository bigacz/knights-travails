import PubSub from 'pubsub-js';
import './initializeBoard';

const squares = document.querySelectorAll('.square');

function changeEnd(x, y) {
  const previous = document.querySelector('.square-end');
  if (previous) {
    previous.classList.remove('square-end');
  }

  const square = getSquare(x, y);
  square.classList.add('square-end');

  PubSub.publish('pathChange');
}

function getEndCoordinates() {
  const endElement = document.querySelector('.square-end');

  if (!endElement) {
    return null;
  }

  const x = Number(endElement.getAttribute('data-x'));
  const y = Number(endElement.getAttribute('data-y'));

  return [x, y];
}

function visualizePath(path) {
  clearSteps();
  for (let i = 1; i < path.length; i += 1) {
    const [x, y] = path[i];
    addStep(i, x, y);
  }
}

function getSquareColor(x, y) {
  const square = getSquare(x, y);
  const color = square.getAttribute('data-color');

  return color;
}

// Helper functions

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

// Execution

let lastCoordinates = [];
squares.forEach((element) => {
  element.addEventListener('click', () => {
    const x = element.getAttribute('data-x');
    const y = element.getAttribute('data-y');

    changeEnd(x, y);
  });

  element.addEventListener('dragover', (event) => {
    const x = element.getAttribute('data-x');
    const y = element.getAttribute('data-y');

    const [lastX, lastY] = lastCoordinates;
    if (x !== lastX || y !== lastY) {
      PubSub.publish('squareDragOver', [x, y]);
      lastCoordinates = [x, y];
    }

    event.preventDefault();
  });
});

const BoardGui = {
  changeEnd,
  getSquareColor,
  visualizePath,
  getEndCoordinates,
};

export default BoardGui;
