let base = Number(prompt("Enter base: "));
let exp = Number(prompt("Enter exponent: "));

let result = 1;

for (let i = 1; i <= exp; i++) {
    result *= base;
}

console.log("Power =", result);