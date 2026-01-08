export default {
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["react", "react-hooks"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    rules: {
      "react/jsx-no-undef": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
};