let n = Number(prompt("Enter number: "));
let original = n;
let sum = 0;

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

while (n > 0) {
    let r = n % 10;
    sum += factorial(r);
    n = Math.floor(n / 10);
}

if (sum === original) {
    console.log("Strong number");
} else {
    console.log("Not a Strong number");
}