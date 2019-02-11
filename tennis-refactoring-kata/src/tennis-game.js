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
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        return this.getScoreNearToEndGame();
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

TennisGame.prototype.getScoreNearToEndGame = function() {
    let score;
    var minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = 'Advantage player1';
    else if (minusResult === -1) score = 'Advantage player2';
    else if (minusResult >= 2) score = 'Win for player1';
    else score = 'Win for player2';
    return score;
};

TennisGame.prototype.getScoreNormalScore = function() {
    let score = '';
    let tempScore;
    for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else {
            score += '-';
            tempScore = this.m_score2;
        }
        score = partialScore(tempScore, score);
    }
    return score;
};

function partialScore(tempScore, score) {
    switch (tempScore) {
        case 0:
            score += 'Love';
            break;
        case 1:
            score += 'Fifteen';
            break;
        case 2:
            score += 'Thirty';
            break;
        case 3:
            score += 'Forty';
            break;
    }
    return score;
}

module.exports = TennisGame;
