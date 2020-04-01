  
import GameStateService from '../data/GameStateService';
import data from '../data/data';

jest.mock('../data/data');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Loading', () => {
  const expected = 
  `{"point":10,
    "maxPoint":10,
    "level":1,
    "currentTheme":"prairie",
    "userPositions":[]}`;
  data.mockReturnValue(expected);
  const recived = GameStateService.load();
  expect(JSON.stringify(recived)).toBe(expected);
});

test('Error', () => {
  const expected = '';
  dataForMocks.mockReturnValue(expected);

  expect(() => GameStateService.load()).toThrow();
});