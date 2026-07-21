"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    show() {
        console.log(this.name);
        console.log(this.salary);
    }
}
let e = new Employee("Anil", 50000, "IT");
e.show();
