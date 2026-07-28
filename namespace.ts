namespace MathOperations {

    export function add(a: number, b: number) {
        return a + b;
    }

    export function subtract(a: number, b: number) {
        return a - b;
    }

    export function multiply(a: number, b: number) {
        return a * b;
    }

    export function divide(a: number, b: number) {
        return a / b;
    }
}

console.log(MathOperations.add(10, 5));
console.log(MathOperations.subtract(10, 5));
console.log(MathOperations.multiply(10, 5));
console.log(MathOperations.divide(10, 5));

