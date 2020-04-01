import charInfo from '../characters/hp';
import Swordsmam from '../characters/Swordsman';

test('test', () => {
  const received = charInfo(new Swordsmam(1));
  const expected = '\u{1F396}1  \u{2694}25  \u{1F6E1}25  \u{2764}50';

  expect(received).toBe(expected);
});