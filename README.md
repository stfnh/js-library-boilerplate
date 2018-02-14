# JavaScript Library Boilerplate

Based on this [egghead.io course](https://egghead.io/courses/how-to-write-an-open-source-javascript-library) with a few changes.

What's included:

- Everything automated
- CI with Travis
- Codecoverage with codecov
- Testing with jest
- Semantic releases with assisted commit messages
- NPM and UMD releases
- Githooks by Husky
- Babel, ESLint, Prettier

## Usage

Set up travis-ci account and connect github gepository with codecov. After adding files with git, commit using 
``
yarn commit
``
and follow instructions. Commit will fail if tests don't pass (pre-commit hook).

A push to the github repository will trigger a test, reporting coverage to codecov.io and creating a build (npm / umd). In case of a new release, it will be tagged on github. Issues will be closed based on your commit message.

## License

MIT