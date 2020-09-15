import { FR2SQ } from '../../../../src/utils/engine';

describe('the tests for the engine', () => {
    it('should test the FR2SQ function', () => {
        let f = Math.floor(Math.random() * 65);
        let r = Math.floor(Math.random() * 65);        
        expect(FR2SQ(f,r)).toBe((21 + (f)) + ((r) * 10));
    });
});