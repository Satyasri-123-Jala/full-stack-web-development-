"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let box1 = new Box(100);
let box2 = new Box("Hello");
box1.display();
box2.display();
