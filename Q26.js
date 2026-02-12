let n = Number(prompt("Enter number: "));
let temp = n;
let sum = 0;

while (temp > 0) {
    let r = temp % 10;
    sum += r;
    temp = Math.floor(temp / 10);
}

if (n % sum === 0) {
    console.log("Harshad number");
} else {
    console.log("Not a Harshad number");
}