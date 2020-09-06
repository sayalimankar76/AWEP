const mod1 = require("./module1");
const mod2 = require("./module2");
const mod3 = require("./module3");
const mod4 = require("./module4");



console.log(mod1.PI);
console.log(mod1.sum(2, 1));

console.log(mod2);

console.log(mod3.sum(2, 3));
const substract = mod3.sub(4, 2);
console.log(substract);

console.log(mod4);