let assert = require('assert');

let TennisGame = require('../src/tennis-game');

describe('test valid scores', () => {
    let tests = [
        {fistPlayerPoints: 0, secondPlayerPoints: 0, expected: 'Love-All'},
        {fistPlayerPoints: 1, secondPlayerPoints: 1, expected: 'Fifteen-All'},
        {fistPlayerPoints: 2, secondPlayerPoints: 2, expected: 'Thirty-All'},
        {fistPlayerPoints: 3, secondPlayerPoints: 3, expected: 'Deuce'},
        {fistPlayerPoints: 4, secondPlayerPoints: 4, expected: 'Deuce'},

        {fistPlayerPoints: 1, secondPlayerPoints: 0, expected: 'Fifteen-Love'},
        {fistPlayerPoints: 0, secondPlayerPoints: 1, expected: 'Love-Fifteen'},
        {fistPlayerPoints: 2, secondPlayerPoints: 0, expected: 'Thirty-Love'},
        {fistPlayerPoints: 0, secondPlayerPoints: 2, expected: 'Love-Thirty'},
        {fistPlayerPoints: 3, secondPlayerPoints: 0, expected: 'Forty-Love'},
        {fistPlayerPoints: 0, secondPlayerPoints: 3, expected: 'Love-Forty'},
        {fistPlayerPoints: 4, secondPlayerPoints: 0, expected: 'Win for player1'},
        {fistPlayerPoints: 0, secondPlayerPoints: 4, expected: 'Win for player2'},

        {fistPlayerPoints: 2, secondPlayerPoints: 1, expected: 'Thirty-Fifteen'},
        {fistPlayerPoints: 1, secondPlayerPoints: 2, expected: 'Fifteen-Thirty'},
        {fistPlayerPoints: 3, secondPlayerPoints: 1, expected: 'Forty-Fifteen'},
        {fistPlayerPoints: 1, secondPlayerPoints: 3, expected: 'Fifteen-Forty'},
        {fistPlayerPoints: 4, secondPlayerPoints: 1, expected: 'Win for player1'},
        {fistPlayerPoints: 1, secondPlayerPoints: 4, expected: 'Win for player2'},

        {fistPlayerPoints: 3, secondPlayerPoints: 2, expected: 'Forty-Thirty'},
        {fistPlayerPoints: 2, secondPlayerPoints: 3, expected: 'Thirty-Forty'},
        {fistPlayerPoints: 4, secondPlayerPoints: 2, expected: 'Win for player1'},
        {fistPlayerPoints: 2, secondPlayerPoints: 4, expected: 'Win for player2'},

        {fistPlayerPoints: 4, secondPlayerPoints: 3, expected: 'Advantage player1'},
        {fistPlayerPoints: 3, secondPlayerPoints: 4, expected: 'Advantage player2'},
        {fistPlayerPoints: 5, secondPlayerPoints: 4, expected: 'Advantage player1'},
        {fistPlayerPoints: 4, secondPlayerPoints: 5, expected: 'Advantage player2'},
        {fistPlayerPoints: 15, secondPlayerPoints: 14, expected: 'Advantage player1'},
        {fistPlayerPoints: 14, secondPlayerPoints: 15, expected: 'Advantage player2'},

        {fistPlayerPoints: 6, secondPlayerPoints: 4, expected: 'Win for player1'},
        {fistPlayerPoints: 4, secondPlayerPoints: 6, expected: 'Win for player2'},
        {fistPlayerPoints: 16, secondPlayerPoints: 14, expected: 'Win for player1'},
        {fistPlayerPoints: 14, secondPlayerPoints: 16, expected: 'Win for player2'},
    ];

    tests.forEach(input => {
        it(input['fistPlayerPoints'] + '-' + input['secondPlayerPoints'] + ' is ' + input['expected'], () => {
            let tennisGame = new TennisGame('player1', 'player2');

            [...Array(input['fistPlayerPoints'])].forEach(() => tennisGame.wonPoint('player1'));
            [...Array(input['secondPlayerPoints'])].forEach(() => tennisGame.wonPoint('player2'));

            assert.equal(input['expected'], tennisGame.getScore());
        });
    });
});
