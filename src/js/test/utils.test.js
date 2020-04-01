import { calcTileType } from '../utils';

test('check borders --> top', () => {
  const recived = calcTileType(5, 8);
  const expected = 'top';

  expect(recived).toBe(expected);
});

test('check borders --> top-right', () => {
  const recived = calcTileType(7, 8);
  const expected = 'top-right';

  expect(recived).toBe(expected);
});

test('check borders --> right', () => {
  const recived = calcTileType(15, 8);
  const expected = 'right';

  expect(recived).toBe(expected);
});

test('check borders --> bottom-right', () => {
  const recived = calcTileType(63, 8);
  const expected = 'bottom-right';

  expect(recived).toBe(expected);
});

test('check borders --> bottom', () => {
  const recived = calcTileType(60, 8);
  const expected = 'bottom';

  expect(recived).toBe(expected);
});

test('check borders --> bottom-left', () => {
  const recived = calcTileType(56, 8);
  const expected = 'bottom-left';

  expect(recived).toBe(expected);
});

test('check borders --> left', () => {
  const recived = calcTileType(8, 8);
  const expected = 'left';

  expect(recived).toBe(expected);
});

test('check borders --> top-left', () => {
  const recived = calcTileType(0, 8);
  const expected = 'top-left';

  expect(recived).toBe(expected);
});

test('check borders --> center', () => {
  const recived = calcTileType(10, 8);
  const expected = 'center';

  expect(recived).toBe(expected);
});