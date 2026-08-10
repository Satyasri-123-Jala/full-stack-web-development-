let numb = 153;
let tempo = numb;
let sum1 = 0;

while (tempo > 0) {
    let digit = tempo % 10;
    sum1 += digit * digit * digit;
    tempo = Math.floor(tempo / 10);
}

if (sum1 == numb) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}