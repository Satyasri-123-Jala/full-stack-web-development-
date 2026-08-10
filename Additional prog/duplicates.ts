let arr = [1, 2, 2, 3, 4, 4, 5];

let seen = new Set();
let duplicate = new Set();

for (let num of arr) {
    if (seen.has(num))
        duplicate.add(num);
    else
        seen.add(num);
}

console.log(duplicate);
export {};