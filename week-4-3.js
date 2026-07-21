"use strict";
function printValue(value) {
    return value;
}
console.log(printValue(100));
console.log(printValue("TypeScript"));
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    show() {
        console.log(this.value);
    }
}
let b = new Box("Hello");
b.show();
