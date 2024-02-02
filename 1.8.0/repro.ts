import fs from 'fs-extra';
if (fs === undefined) {
  throw new Error('"fs" is undefined!');
}
console.log('success!');
