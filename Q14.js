let n = Number(prompt("Enter number: "));
let original = n;

let digits = n.toString().length;
let sum = 0;

while (n > 0) {
    let r = n % 10;
    sum += r ** digits;           // r^digits
    n = Math.floor(n / 10);
}

if (sum === original) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}