var TennisGame = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name)
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame.prototype.getScore = function() {
    if (this.hasSameScore()) {
        return this.getScoreWithSameScore();
    } else if (this.gameHasEnded()) {
        return 'Win for ' + this.winningPlayer();
    } else if (this.moreThan4PointsWonByAPlayer() && !this.gameHasEnded()) {
        return 'Advantage ' + this.winningPlayer();
    } else {
        return this.getScoreNormalScore();
    }
};

TennisGame.prototype.hasSameScore = function() {
    return this.m_score1 === this.m_score2;
};

TennisGame.prototype.getScoreWithSameScore = function() {
    const tieScores = {0: 'Love-All', 1: 'Fifteen-All', 2: 'Thirty-All'};
    return tieScores[this.m_score1] || 'Deuce';
};

TennisGame.prototype.getScoreNormalScore = function() {
    const scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return scores[this.m_score1] + '-' + scores[this.m_score2];
};

TennisGame.prototype.gameHasEnded = function() {
    return this.moreThan4PointsWonByAPlayer() &&
        Math.abs(this.m_score1 - this.m_score2) >= 2;
};

TennisGame.prototype.winningPlayer = function() {
    return this.m_score1 > this.m_score2 ? 'player1' : 'player2';
};

TennisGame.prototype.moreThan4PointsWonByAPlayer = function() {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
};

module.exports = TennisGame;
