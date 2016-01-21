'use strict';

let options = {
  'env': {
		'node': true,
		'browser': true
  },
  'rules': {
		'array-bracket-spacing': [2, 'never'],
		'block-scoped-var': 2,
		'brace-style': [2, '1tbs'],
		'camelcase': 1,
		'computed-property-spacing': [2, 'never'],
		'curly': 2,
		'eol-last': 2,
		'eqeqeq': [2, 'smart'],
		'max-depth': [1, 3],
		'max-len': [1, 80],
		'max-statements': [1, 15],
		'new-cap': 1,
		'no-extend-native': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-trailing-spaces': 2,
		'no-unused-vars': 2,
		'no-use-before-define': [2, 'nofunc'],
		'object-curly-spacing': [2, 'never'],
		'quotes': [2, 'single', 'avoid-escape'],
		'semi': [2, 'always'],
		'space-after-keywords': [2, 'always'],
		'space-unary-ops': 2
  },
  'ecmaFeatures': {
		'blockBindings': true,
		'arrowFunctions': true,
		'spread': true,
		'templateStrings': true,
  }
};

module.exports = options;
