import { squaredNumbers } from './index';

test('01. Squared numbers', () => {
  expect(squaredNumbers([1, 2, 4, 9])).toStrictEqual([1, 4, 16, 81]);
});
