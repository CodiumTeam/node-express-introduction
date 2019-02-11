'use strict';

class TennisGame {
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    };

    wonPoint(playerName) {
        if (playerName === this.player1Name)
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    };

    getScore() {
        if (this.hasSameScore()) {
            return this.getScoreWithSameScore();
        } else if (this.gameHasEnded()) {
            return 'Win for ' + this.winningPlayer();
        } else if (this.moreThan4PointsWonByAPlayer()) {
            return 'Advantage ' + this.winningPlayer();
        } else {
            return this.getScoreNormalScore();
        }
    };

    hasSameScore() {
        return this.m_score1 === this.m_score2;
    };

    getScoreWithSameScore() {
        const tieScores = {0: 'Love-All', 1: 'Fifteen-All', 2: 'Thirty-All'};
        return tieScores[this.m_score1] || 'Deuce';
    };

    getScoreNormalScore() {
        const scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
        return scores[this.m_score1] + '-' + scores[this.m_score2];
    };

    gameHasEnded() {
        return this.moreThan4PointsWonByAPlayer() &&
            this.thereIsADifferenceOfMoreThan1Point();
    };

    thereIsADifferenceOfMoreThan1Point() {
        return Math.abs(this.m_score1 - this.m_score2) >= 2;
    };

    winningPlayer() {
        return this.m_score1 > this.m_score2 ? 'player1' : 'player2';
    };

    moreThan4PointsWonByAPlayer() {
        return this.m_score1 >= 4 || this.m_score2 >= 4;
    };
}

module.exports = TennisGame;
