let n = Number(prompt("Enter number: "));
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sum += i;
    }
}

if (sum === n && n > 0) {
    console.log("Perfect number");
} else {
    console.log("Not a perfect number");
}