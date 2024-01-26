import PubSub from 'pubsub-js';
import boardGui from './boardGui';

const knight = document.getElementById('knight');
const extractRegEx = /(-?\d+(?:,\d{1,})*(?:\.\d+)?)/g;

function moveKnightTo(x, y) {
  knight.style.transform = `translate(${x * 100}%, -${y * 100}%)`;

  const squareColor = boardGui.getSquareColor(x, y);
  changeKnightColor(squareColor);

  PubSub.publish('pathChange');
}

function getKnightCoordinates() {
  const currentTransform = knight.style.transform;
  const translateValues = currentTransform.match(extractRegEx);

  let x = 0;
  let y = 0;
  if (translateValues) {
    x = Math.abs(translateValues[0]) / 100;
    y = Math.abs(translateValues[1]) / 100;
  }

  return [x, y];
}

// Helper

function changeKnightColor(color) {
  const blackClass = 'knight-black';
  const whiteClass = 'knight-white';

  knight.classList.remove(whiteClass);
  knight.classList.remove(blackClass);

  if (color === 'white') {
    knight.classList.add(blackClass);
  } else {
    knight.classList.add(whiteClass);
  }
}

// Execution

knight.addEventListener('dragstart', (event) => {
  const img = new Image();
  event.dataTransfer.setDragImage(img, 0, 0);
});

PubSub.subscribe('squareDragOver', (msg, [x, y]) => {
  moveKnightTo(x, y);
});

const KnightGui = {
  getKnightCoordinates,
};

export default KnightGui;
