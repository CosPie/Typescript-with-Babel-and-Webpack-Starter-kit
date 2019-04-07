# Typescript with Babel and Webpack Starter kit for web

## todo

1. [] image handle

2. [] media (such as _.mp3 , _.wav file) file-loader

3. [] cdn publicPath handle

4. [] dev/produciton mode split the config

5. [] Compress JS (uglify-js)

6. [] Compress Css (postcss, purgecss for remove unused css)
7. [] Copy Webpack Plugin

8. [] maybe add DefinePlugin
9. [] maybe add the svg font handle
10. [] cypress test suite.
11. [] dts gen tool

## Quick Start

1. clone the project

```shell
git clone https://github.com/CosPie/Typescript-with-Babel-and-Webpack-Starter-kit.git
```

2. install dependencies

```shell
npm install

# or
yarn install
```

3. run webpack-dev-server

```shell
npm run dev
```

## Typescript

1. Use babel-loader to transform `*.ts` file to `*.js` with no type-check , and then it can improved performance.

> see more detail:[TypeScript With Babel: A Beautiful Marriage - I Am Turns](https://iamturns.com/typescript-babel/)

2. if you want to use the type-check , `npm run check-types`

## Use Scss

I prefer to use Scss css-pre-processing rather than etc.(such as less).

## Code Format

1. use prettier

2. use eslint to format `*.ts` file to replace tslint.

## Note

1. Namespaces.

Solution: don’t use them! They’re outdated. Use the industry standard ES6 modules (import / export) instead. The recommended tslint rules ensure namespaces are not used.

2. Casting a type with the`<newtype>x`syntax.

    Solution: Use x as newtype instead.

3. Const enums.

    This is a shame. Need to resort to regular enums for now.

4. Legacy-style import / export syntax.

    Examples: import foo = require(...) and export = foo.

## Inspire

1. [GitHub - Microsoft/TypeScript-Babel-Starter](https://github.com/Microsoft/TypeScript-Babel-Starter)

2. [Using ESLint and Prettier in a TypeScript Project](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

3. [TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)
