class Student {

    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    display() {
        console.log(this.id);
    }
}

let s = new Student(101);

s.display();
export {};