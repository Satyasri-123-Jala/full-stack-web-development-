"use strict";
class Student {
    id;
    constructor(id) {
        this.id = id;
    }
    display() {
        console.log(this.id);
    }
}
let s = new Student(101);
s.display();
