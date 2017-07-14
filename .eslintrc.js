module.exports = {
  'extends': 'eslint-config-airbnb',
  'env': {
    'browser': true,
  },
  'plugins': ['html'],
  'rules': {
    'no-param-reassign': ['error', {
      'props': false
    }],
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }],
    'max-len': ['error', 200, 2, {
      'ignoreUrls': true,
      'ignoreComments': false,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }]
  }
};
