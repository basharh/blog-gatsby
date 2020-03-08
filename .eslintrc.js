module.exports = {
  plugins: ["react"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  rules : {
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 1
  }
}
