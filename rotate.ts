let arr = [1, 2, 3, 4, 5];

let n = 2;

let result = [...arr.slice(n), ...arr.slice(0, n)];

console.log(result);
