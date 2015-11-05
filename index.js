var postcss = require('postcss');
var hash = require('hash-sum');

module.exports = postcss.plugin('postcss-scoped', function (opts) {
    opts = opts || {};

    opts.scope = opts.scope || function (value) {
        return 'scope-' + value;
    };

    return function (root) {

        root.each(function (rule) {
            if (rule.type === 'atrule') {
                if (rule.name === 'scope') {
                    var scope = '.' + opts.scope(hash(rule.params));

                    rule.walkRules(function (child) {
                        if (!child.selectors) {
                            return child;
                        }

                        child.selectors = child.selectors.map(function (selector) {
                            if (selector.indexOf(scope) === 0) {
                                return selector;
                            }

                            return scope + ' ' + selector;
                        });
                    });

                    rule.each(function (child) {
                        root.insertBefore(rule, child);
                    });

                    rule.remove();
                }
            }

            return rule;
        });

    };
});
