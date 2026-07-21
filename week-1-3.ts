let value: any = 100;
console.log(value);

value = "Hello";
console.log(value);

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

function display(): void {
    console.log("Void Function");
}

display();