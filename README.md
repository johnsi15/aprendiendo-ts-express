# Express with TypeScript 

## Initial config tsconfig
### Install TypeScript
`npm install typescript -D -E`

### Add tsc script to package.json
```json
  "scripts": {
    "tsc": "tsc"
  }
```
This generates the code JS for prod

### Init config tsc
`npm run tsc -- --init`

### Add types express
`npm install @types/express -D -E`

### Add dev mode
`npm install ts-node-dev -D -E`

### Add dev script to package.json
```json
  "scripts": {
    "dev": "ts-node-dev src/index.ts"
  }
```
### Add Eslint with ts-standard
`npm install ts-standard -D -E`

```json
  "scripts": {
    "lint": "ts-standard"
  }
```
and add in the `packa.json`:
```json
  "eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": [
      "./node_modules/ts-standard/eslintrc.json"
    ]
  }
```
Check if eslint is configured correctly

## Start project

### ¿How does that work?

Require Node.js 18.x

* `npm install` to install the dependencies
* `npm run dev` to run development mode app
* `npm start` to build production

https://blog.logrocket.com/how-to-set-up-node-typescript-express/
