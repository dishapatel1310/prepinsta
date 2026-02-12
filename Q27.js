let n = Number(prompt("Enter number: "));
let sum = 0;

for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
        sum += i;
    }
}

if (sum > n) {
    console.log("Abundant number");
} else {
    console.log("Not an Abundant number");
}