class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display() {
        console.log(this.value);
    }
}

let box1 = new Box<number>(100);

let box2 = new Box<string>("Hello");

box1.display();

box2.display();