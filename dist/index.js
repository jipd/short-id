"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;/**
* create a string composed of random numbers, upper and lowercase letters
*
* @param integer length
* @return string
*/var _default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:8,b="";if(0>a)throw new Error("Invalid length passed to shortId");for(;b.length<a;){var c=48,d=10,e=Math.random();(.33<e||!b.length)&&(d=26,c=.66>e?65:97);var f=String.fromCharCode(c+Math.floor(Math.random()*d));b="".concat(b).concat(f)}return b};exports["default"]=_default;
//# sourceMappingURL=index.js.map