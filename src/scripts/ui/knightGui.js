const knight = document.getElementById('knight');
const squares = document.querySelectorAll('.square');

function moveKnightTo(x, y) {
  knight.style.transform = `translate(${x * 100}%, -${y * 100}%)`;
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
