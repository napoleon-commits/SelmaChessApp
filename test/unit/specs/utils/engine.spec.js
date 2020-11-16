import { FR2SQ, RAND_32 } from '@/utils/engine';

describe('the tests for the engine', () => {
  it('should test the FR2SQ function', () => {
    const f = Math.floor(Math.random() * 65);
    const r = Math.floor(Math.random() * 65);
    expect(FR2SQ(f, r)).toBe((21 + (f)) + ((r) * 10));
  });
  it('should test the RAND_32 function', () => {
    const randomNumber = RAND_32();
    expect(randomNumber).toBeLessThan(2147483648);
    expect(randomNumber).toBeGreaterThanOrEqual(255);
  });
});
