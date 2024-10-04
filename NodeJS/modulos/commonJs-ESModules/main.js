// Export commonJS
// const sum = require('./sum.cjs');
// console.log(sum(2, 2));

// Export ESModules
import subtract from './subtract.mjs';
console.log(subtract(6, 3));

// OBS: 
// * files don't need to have the mjs/cjs extension, it's just a simple way of knowing which file it is using commonJS or ESM.
// * type is set to modules in package.json to work with ESModules