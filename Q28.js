let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum;
}

let index1 = sumOfDivisors(a) / a;
let index2 = sumOfDivisors(b) / b;

if (index1 === index2) {
    console.log("Friendly pair");
} else {
    console.log("Not a friendly pair");
}