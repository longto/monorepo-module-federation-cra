module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["react-mfv"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
}
