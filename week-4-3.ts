function printValue<T>(value: T): T {
    return value;
}

console.log(printValue<number>(100));
console.log(printValue<string>("TypeScript"));

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show() {
        console.log(this.value);
    }
}

let b = new Box<string>("Hello");
b.show();