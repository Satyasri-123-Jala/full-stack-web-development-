let arr = [1, 2, 2, 3, 1, 4];

let count: any = {};

for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}

console.log(count);
export {};