"use strict";
let start = 1;
let end = 20;
for (let i = start; i <= end; i++) {
    let prime = true;
    if (i <= 1)
        prime = false;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        console.log(i);
}
