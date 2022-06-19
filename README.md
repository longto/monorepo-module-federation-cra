## Common Master Monorepo Micro FE

- create with [Create React App](https://create-react-app.dev/)
- build by [Turborepo](https://turborepo.org/)
- micro FE by [Module Federation](https://webpack.js.org/concepts/module-federation/)
- Eslint, Stylelint, Typescript
- Axios, [Zustand](https://github.com/pmndrs/zustand)
- Folder `Apps` contains code, `Packages` contains share code

## Dev

```
  yarn
  yarn dev
```

## Production

```
  yarn build
  yarn start
```

## To setup more package

- workspace name define in `package.json / name`
- we alias workspace to make setup easier
  - `yarn depm` alias for `yarn workspace department-master`
  - `yarn prom` alias for `yarn workspace project-master`
- ex: `yarn depm add axios` -> add axios into workspace department-master
