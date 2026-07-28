class Student {

    constructor(
        public id: number,
        public name: string,
        public age: number
    ) {}

    display() {
        console.log(this.id, this.name, this.age);
    }
}

let s = new Student(1, "Bhavani", 20);

s.display();