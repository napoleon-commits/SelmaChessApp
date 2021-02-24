import GameStatus from '@/utils/GameStatus';

describe('tests for the GameStatus.js file', () => {
    it('should test the default exported function', () => {
        GameStatus(
            'white',
            'white',
            'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1']
        );
        expect(true).toBe(true);
    });
});