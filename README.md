# Tab Panel
*Author: Conrad Johnston*

## Introduction
This is an implementation of a tab panel, with accessibility in mind. The underlying framework is Next.js (with React). The styling is provided by the Material UI project.

## To run the project
```sh
yarn install
yarn build
yarn start
```
Then visit http://localhost:3000

## To run the project tests:
```sh
yarn install
yarn test
```

### The tests include
* UI Integration tests
* Code linting
* Pa11y automated accesibiliyt checks against the WCAG2AA standard

## Future work

1. Because the components modify window.location, and tests do not run in a browser, there is some work to mock out this feature.
1. Install husky pre and post commit hooks to make sure tests are all passing before pushing.
1. Snapshot tests to be generated.