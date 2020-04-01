import Swordsmam from '../characters/Swordsman';

test('creating new character', () => {
  const received = new Swordsmam(1);
  const expected = {
    level: 1,
    health: 50,
    type: 'swordsman',
    attack: 40,
    defence: 10,
    distance: 4,
    distanceAttack: 1,
  };

  expect(received).toEqual(expected);
});

test(() => {
  expect(() => new Character()).toThrow();
});