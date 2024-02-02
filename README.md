I'm using Node v18.19.0 for this.

1. `cd 1.6.8`
2. `yarn`
3. `node entry.js`
4. > success!
5. `cd ../1.8.0`
6. `yarn`
7. `node entry.js`

```shell
/Users/mhentges/dev/swc-node-1.8.0-regression/1.8.0/repro.ts:4
    throw new Error('"fs" is undefined!');
    ^

Error: "fs" is undefined!
    at Object.<anonymous> (/Users/mhentges/dev/swc-node-1.8.0-regression/1.8.0/repro.ts:4:11)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._compile (/Users/mhentges/dev/swc-node-1.8.0-regression/1.8.0/node_modules/pirates/lib/index.js:117:24)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Object.newLoader [as .ts] (/Users/mhentges/dev/swc-node-1.8.0-regression/1.8.0/node_modules/pirates/lib/index.js:121:7)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1013:12)
    at Module.require (node:internal/modules/cjs/loader:1225:19)
    at require (node:internal/modules/helpers:177:18)
    at Object.<anonymous> (/Users/mhentges/dev/swc-node-1.8.0-regression/1.8.0/entry.js:8:1)

Node.js v18.19.0
```
