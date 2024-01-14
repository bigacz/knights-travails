const board = {};

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.ul = null;
    this.ur = null;
    this.ru = null;
    this.rd = null;

    this.dr = null;
    this.dl = null;
    this.ld = null;
    this.lu = null;
  }
}

for (let x = 0; x < 8; x += 1) {
  for (let y = 0; y < 8; y += 1) {
    const name = `${x}${y}`;
    board[name] = new Square(x, y);
  }
}

const keys = Object.values(board);
keys.forEach((square) => {
  const { x, y } = square;

  square.ul = board[`${x - 1}${y + 2}`];
  square.ur = board[`${x + 1}${y + 2}`];
  square.ru = board[`${x + 2}${y + 1}`];
  square.rd = board[`${x + 2}${y - 1}`];
  square.dr = board[`${x + 1}${y - 2}`];
  square.dl = board[`${x - 1}${y - 2}`];
  square.ld = board[`${x - 2}${y - 1}`];
  square.lu = board[`${x - 2}${y + 1}`];
});

export default board;
