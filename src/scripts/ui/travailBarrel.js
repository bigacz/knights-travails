import PubSub from 'pubsub-js';
import KnightGui from './knightGui';
import BoardGui from './boardGui';
import getKnightMoves from '../logic/travailLogic';

PubSub.subscribe('pathChange', () => {
  const knightCoordinates = KnightGui.getKnightCoordinates();
  const endCoordinates = BoardGui.getEndCoordinates();

  const path = getKnightMoves(knightCoordinates, endCoordinates);
  BoardGui.visualizePath(path);
});
