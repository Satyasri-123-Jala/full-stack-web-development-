"use strict";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
let s = new Student("Satya Sri");
s.display();
