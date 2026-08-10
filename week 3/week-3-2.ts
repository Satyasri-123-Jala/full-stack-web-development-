class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
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