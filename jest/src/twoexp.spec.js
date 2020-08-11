const twoexp = require('./twoexp');

// TODO: add BDD-style tests

describe('twoexp()', () => {

  it('should exp 2^0', () => {
    expect(twoexp(0)).toBe(1);
  });

  it('should exp 2^2', () => {
    expect(twoexp(2)).toBe(4);
  });

  it('should exp 2^2', () => {
    expect(twoexp(-1)).toBe(0.5);
  });

});