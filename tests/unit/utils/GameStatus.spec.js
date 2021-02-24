import {GameStatus,GameStatusEnum} from '@/utils/GameStatus';

describe('tests for the GameStatus.js file', () => {
    it(`should test the GameStatus method's else case and return 'undefined'.`, () => {
        expect(
            GameStatus(
                'white',
                'white',
                'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1']
            )
        ).toBe(undefined);
    });
    it(`should test the GameStatus method's stalemate branch.`, () => {
        expect(
            GameStatus(
                'white',
                'white',
                '2k5/2P5/2K5/8/8/8/8/8 b - - 0 1',
                ['2k5/2P5/2K5/8/8/8/8/8 b - - 0 1']
            )
        ).toBe(GameStatusEnum[3]);
    });
    it(`should test the GameStatus method's draw by insufficient material branch.`, () => {
        expect(
            GameStatus(
                'white',
                'white',
                '2k5/8/8/8/2B5/2K5/8/8 w - - 0 1',
                ['2k5/8/8/8/2B5/2K5/8/8 w - - 0 1']
            )
        ).toBe(GameStatusEnum[4]);
    });
    it(`should test the GameStatus method's checkmate branch.`, () => {
        expect(
            GameStatus(
                'white',
                undefined,
                '2k5/2Q5/2K5/8/8/8/8/8 w - - 0 1',
                ['2k5/2Q5/2K5/8/8/8/8/8 w - - 0 1']
            )
        ).toBe(GameStatusEnum[0]('white'));
    });
    it(`should test the GameStatus method's fifty-move draw branch.`, () => {
        expect(
            GameStatus(
                'white',
                'white',
                '2k5/2Q5/2K5/8/8/8/8/8 w - - 100 1',
                ['2k5/2Q5/2K5/8/8/8/8/8 w - - 100 1']
            )
        ).toBe(GameStatusEnum[1]);
    });
    it(`should test the GameStatus method's fifty-move draw branch.`, () => {
        expect(
            GameStatus(
                'white',
                'white',
                '1k6/8/8/8/8/2Q5/1K6/8 w - - 0 1',
                [
                    '1k6/8/8/8/8/2Q5/1K6/8 w - - 0 1', // 1
                    '1k6/8/8/8/8/1Q6/1K6/8 b - - 0 1',
                    '2k5/8/8/8/8/1Q6/1K6/8 w - - 0 1',
                    '2k5/8/8/8/8/2Q5/1K6/8 b - - 0 1',
                    '1k6/8/8/8/8/2Q5/1K6/8 w - - 0 1', // 2
                    '1k6/8/8/8/8/1Q6/1K6/8 b - - 0 1',
                    '2k5/8/8/8/8/1Q6/1K6/8 w - - 0 1',
                    '2k5/8/8/8/8/2Q5/1K6/8 b - - 0 1',
                    '1k6/8/8/8/8/2Q5/1K6/8 w - - 0 1', // 3
                ]
            )
        ).toBe(GameStatusEnum[2]);
    });
});