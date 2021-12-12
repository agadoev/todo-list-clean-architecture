const OFF = 0, WARN = 1, ERROR = 2;


module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  "plugins": ["@angular-eslint/eslint-plugin"],
  "parser": "babel-eslint",
  "parserOptions": {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  "rules": {
    "eqeqeq": [ ERROR, "smart" ],
    "no-trailing-spaces": WARN
  }
}
