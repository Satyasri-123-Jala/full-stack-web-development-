"use strict";
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.id, this.name, this.age);
    }
}
let s = new Student(1, "Bhavani", 20);
s.display();
