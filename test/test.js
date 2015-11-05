var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-scoped', function () {

    it('transforms an at scope rule', function (done) {
        test('@scope test { a{ }; b { } }', '.scope-2d29e588 a {}\n.scope-2d29e588 b {}', { }, done);
    });

});
