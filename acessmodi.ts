class Employee {

    public name = "Bhavani";

    private salary = 50000;

    protected department = "IT";

    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

class Manager extends Employee {

    show() {
        console.log(this.name);
        console.log(this.department);
    }
}

let m = new Manager();

m.show();