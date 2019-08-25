// Anonymous closure. Need more understanding...

(function add() {  // <-- note extra (
  let a = 10;
  let b = 10;
  add = () => {
    return a * b;
  };
  
  console.log(add());
})()  // <-- note extra )()

// MOSH
// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules 

// CommonJS (Used in Node)
// Exporting 
module.exports.Cirlce = Circle; 
// Importing 
const Circle = require('./circle');

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing 
import {Square} from './square'; 

// We use Babel to transpile our modern JavaScript code 
// into code that browsers can understand (typically ES5). 

// We use Webpack to combine our JavaScript files into a
// bundle. 