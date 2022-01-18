import { isPrimeNumber } from '..';

describe('test myModule', () => {
  it('should return 42', () => {
    expect(isPrimeNumber(2)).toStrictEqual(true);
  });
});
