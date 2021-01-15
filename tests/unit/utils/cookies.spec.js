import {getCookie, setCookie} from '@/utils/cookies';

describe('cookies.js', () => {
    it('should test the set and get cookie method', () => {
        setCookie('foo','bar');
        expect(getCookie('foo')).toBe('bar');
    });
});