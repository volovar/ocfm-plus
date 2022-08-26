module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
