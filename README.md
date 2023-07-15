# Express with TypeScript 

## Initial config tsconfig
### Install TypeScript
`npm install typescript -D -E`

### Added tsc script to package.json
```js
  "scripts": {
    "tsc": "tsc"
  }
```
### Init config tsc
`npm run tsc -- --init`

### Added types express
`npm install @types/express -D -E`

### Added dev mode
`npm install ts-node-dev -D -E`

### Added dev script to package.json
```js
  "scripts": {
    "dev": "ts-node-dev src/index.ts"
  }
```

## Start project

### ¿How does that work?

Require Node.js 18.x

* `npm install` to install the dependencies
* `npm run dev` to run development mode app
* `npm start` to build production

https://blog.logrocket.com/how-to-set-up-node-typescript-express/
