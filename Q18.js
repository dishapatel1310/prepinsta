let n = Number(prompt("Enter number: "));
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log("Factorial =", fact);