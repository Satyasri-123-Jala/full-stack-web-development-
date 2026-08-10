class Employee {
    public name: string = "Bhavani";

    private salary: number = 50000;

    protected department: string = "IT";

    display(): void {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}

class Manager extends Employee {
    show(): void {
        console.log(this.name);
        console.log(this.department);
    }
}

const m = new Manager();

m.show();

export {};