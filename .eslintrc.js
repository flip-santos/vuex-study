module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'semi': 0,
    'no-new': 0,
    'new-parens': 0,
    'arrow-parens': 0,
    'keyword-spacing': 0,
    'no-trailing-spaces': 0,
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': 0,
    'no-unused-vars': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
