import PubSub from 'pubsub-js';
import KnightGui from './knightGui';
import BoardGui from './boardGui';

PubSub.subscribe('pathChange', () => {
  const [knightX, knightY] = KnightGui.getKnightCoordinates();
  const [endX, endY] = BoardGui.getEndCoordinates();
});
