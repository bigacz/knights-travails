import board from './boardLogic';

function getKnightMoves(start, finish) {
  const [startX, startY] = start;
  const [finishX, finishY] = finish;

  const startSquare = board[`${startX}${startY}`];
  if (typeof startSquare !== 'object') {
    throw new Error('Wrong start coordinates!');
  }
  const startStander = new QueueElement(startSquare);

  const queue = [startStander];

  while (queue.length > 0) {
    const currentStander = queue.shift();
    const currentSquare = currentStander.square;
    const currentPath = currentStander.path;

    const currentX = currentSquare.x;
    const currentY = currentSquare.y;
    const newPath = [...currentPath, [currentX, currentY]];

    if (currentX === finishX && currentY === finishY) {
      return newPath;
    }

    const possibleSquares = currentSquare.getSquares();

    possibleSquares.forEach((element) => {
      const stander = new QueueElement(element, newPath);

      queue.push(stander);
    });
  }
}

class QueueElement {
  constructor(square = null, path = []) {
    this.square = square;
    this.path = path;
  }
}

export default getKnightMoves;
