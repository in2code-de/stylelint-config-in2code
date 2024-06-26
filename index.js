module.exports = {
    extends: [
        'stylelint-config-standard-scss',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-use-logical',
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'color-hex-length': 'long',
        'comment-whitespace-inside': null,
        'no-descending-specificity': null,
        'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
        'declaration-no-important': true,
        'no-duplicate-at-import-rules': true,
        'selector-max-id': 0,
        'declaration-block-no-duplicate-properties': true,
        'rule-empty-line-before': ['always-multi-line', { ignore: ['after-comment'] }],
        'value-keyword-case': 'lower',
        'scss/at-import-partial-extension': null,
        'selector-class-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*(_[a-z0-9]+)*(__[a-z]((_|-)?[a-z0-9])*)?(--[a-z0-9]((_|-)?[a-z0-9\\\\\\/])*)?$', { resolveNestedSelectors: true }],
        'csstools/use-logical': true,
    },
};
