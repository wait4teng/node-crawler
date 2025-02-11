module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": ["off"],
  },
};
