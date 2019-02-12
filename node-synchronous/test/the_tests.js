var expect = require('chai').expect;

let code = require('../src/7_tests');
var getChange = code.getChange;

describe('exercise 5 getChange', () => {
    it('the euro is 1', function() {
        expect(getChange('EUR')).to.equal(1);
    });

    it('the dollar is 1.145443', function() {
        expect(getChange('USD')).to.equal(1.145443);
    });

    it('the british pound is 1.145443', function() {
        expect(getChange('GBP')).to.equal(0.874837);
    });

    it('returns a error message when currency does not exist', function() {
        expect(getChange('Peseta')).to.equal("Sorry, we don't support the currency Peseta");
    });
});
