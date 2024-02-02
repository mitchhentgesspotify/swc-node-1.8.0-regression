require('@swc-node/register/register').register({
  compilerOptions: {
    module: 'CommonJS',
    sourceMap: true,
  },
});

require('./repro.ts')
