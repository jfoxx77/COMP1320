module.exports = {
  extends: 'airbnb-base',
  env: {
    commonjs: true,
    node: true,
    jest: true,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-plusplus': 'off',
    'no-console': 'off',
  },
};
