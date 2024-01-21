import PubSub from 'pubsub-js';

const knight = document.getElementById('knight');
const extractRegEx = /(-?\d+(?:,\d{1,})*(?:\.\d+)?)/g;

function moveKnightTo(x, y) {
  knight.style.transform = `translate(${x * 100}%, -${y * 100}%)`;
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
