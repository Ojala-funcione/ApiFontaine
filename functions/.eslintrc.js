module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": ["error", "windows"],
    "new-cap": ["error", {capIsNewExceptions: ["Router"]}],
  },
};
