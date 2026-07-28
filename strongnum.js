"use strict";
let num = 145;
let temp = num;
let sum = 0;
while (temp > 0) {
    let digit = temp % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++)
        fact *= i;
    sum += fact;
    temp = Math.floor(temp / 10);
}
if (sum == num)
    console.log("Strong Number");
else
    console.log("Not Strong");
