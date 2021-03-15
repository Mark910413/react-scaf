import add from './01';

test('adds "1" + "2" to equal "12"', () => {
  expect(add('1', '2')).toBe('12');
});

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
})