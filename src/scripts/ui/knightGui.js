const knight = document.getElementById('knight');
const squares = document.querySelectorAll('.square');
const extractRegEx = /(-?\d+(?:,\d{1,})*(?:\.\d+)?)/g;

function moveKnightTo(x, y) {
  knight.style.transform = `translate(${x * 100}%, -${y * 100}%)`;
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

knight.addEventListener('dragstart', (event) => {
  const img = new Image();
  event.dataTransfer.setDragImage(img, 0, 0);
});

squares.forEach((element) => {
  element.addEventListener('dragover', (event) => {
    const x = element.getAttribute('data-x');
    const y = element.getAttribute('data-y');
    moveKnightTo(x, y);

    event.preventDefault();
  });
});
