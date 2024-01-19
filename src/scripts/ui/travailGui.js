const knight = document.getElementById('knight');

function moveKnightTo(x, y) {
  knight.style.transform = `translate(${x * 100}%, -${y * 100}%)`;
}

moveKnightTo(0, 2);
setTimeout(() => {
  moveKnightTo(7, 7);
}, 1000);
