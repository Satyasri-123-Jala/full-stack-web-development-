"use strict";
let arr = [1, 2, 3, 5];
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = arr.reduce((x, y) => x + y, 0);
console.log(total - sum);
